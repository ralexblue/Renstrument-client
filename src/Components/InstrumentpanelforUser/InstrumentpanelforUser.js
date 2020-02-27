import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './InstrumentpanelforUser.css'
import InstrumentContext from '../../context/InstrumentContext'
import InstrumentService from '../../services/InstrumentService'
export default class InstrumentpanelforUser extends Component {
    static contextType = InstrumentContext
    constructor(props) {
      super(props);
      this.state = {
        editinst:false,
        instId:this.props.instrument.id,
        name:this.props.instrument.name,
        category:'Misc',
        description:this.props.instrument.decription,
        image:this.props.instrument.image,
        currentuser:this.props.currentuser
      };
    }
    handleChangeName=(event)=> {
      this.setState({name: event.target.value});
    }
    handleChangeDescription=(event)=> {
      this.setState({description: event.target.value});
    }
    handleChangeCategory=(event)=> {
      this.setState({category: event.target.value});
    }
    handleChangeImage=(event)=>{
      this.setState({image: event.target.value});
    }
    thisHandleEditInstForm=()=>{
      this.setState({
        editinst:!this.state.editinst,
      })
    }
    editinstrumentForm(){
      const {error} = this.context
      return( <div class="tofit">
        <form className='patchinstrument'>
        <>{error && <p>{error}</p>}</>
        <label>Name:</label>
        <br/>
        <input onChange={this.handleChangeName} required name='name' id='name'value={this.state.name}></input>
        <br/>
        <label>
          what type of instrument:
        <select onChange={this.handleChangeCategory} value={this.state.category}>
          <option value="Brass">Brass</option>
          <option value="Guitar">Guitar</option>
          <option value="Keyboard">Keyboard</option>
          <option value="Percussion">Percussion</option>
          <option value="Strings">Strings</option>
          <option value="Misc">Misc</option>
        </select>
        </label>
        <br/>
        <label>description:</label>
        <br/>
        <textarea class="editdesc" onChange={this.handleChangeDescription} name='description' id='description' value={this.state.description}></textarea>
        <br/>
        <label>image:</label>
        <br/>
        <input onChange={this.handleChangeImage} name='image' id='image' value={this.state.image}></input>
        <br/>
        <button onClick={this.handleEditIntrument}>submit</button>
        </form>
        </div>
      )
    }
    handleDeleteIntrument=()=>{
      this.props.updateUserinstrumentfordelete(this.state.instId);
      this.context.delInstrument(this.state.instId);
      InstrumentService.delInstrument(this.state.instId)
      .then(()=>{
        console.log('instrument deleted')
      })
    }
    handleEditIntrument=e=>{
      e.preventDefault();
      const editedInstrument={
        id:this.state.instId,
        name:this.state.name,
        decription:this.state.description,
        image:this.state.image,
        category:this.state.category,
        user_id:this.state.currentuser.id,
        user_name:this.state.currentuser.user_name,
        email:this.state.currentuser.email,
        contact:this.state.currentuser.contact,
      };
      InstrumentService.patchInstrument(editedInstrument,this.state.instId)
      .then(()=>{
        this.thisHandleEditInstForm();
        this.context.addupdateInstrument(editedInstrument,this.state.instId);
      })
    }
    render() {
      return (
        <div class="box">
          <Link to={`/instruments/${this.state.instId}`} >
              <img src ={this.state.image} alt="none"/>
          </Link>
          <h1>Name</h1>
          <p>{this.state.name}</p>
          <h3>description</h3>
          <p>{this.state.description}</p>
          <span></span>
          <button onClick ={this.thisHandleEditInstForm}>edit</button>
         {this.state.editinst ? 
            this.editinstrumentForm()
            :<></>}
          <button onClick ={this.handleDeleteIntrument}>delete</button>
        </div>
      )
    }
  }
