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
      };
    }
    handleChangeName=(event)=> {
      this.setState({name: event.target.value});
    }
    handleChangeDescription=(event)=> {
      this.setState({description: event.target.value});
    }
    handleChangeCategory=(event)=> {
      this.setState({Category: event.target.value});
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
        <label>Name:
        <input onChange={this.handleChangeName} required name='name' id='name'value={this.state.name}></input>
        </label>
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
        <input class="editdesc" onChange={this.handleChangeDescription} name='description' id='description' value={this.state.description}></input>
        <br/>
        <label>image:</label>
        <input onChange={this.handleChangeImage} name='image' id='image' value={this.state.image}></input>
        <br/>
        <button onClick={this.handleEditIntrument}>submit</button>
        </form>
        </div>
      )
    }
    handleDeleteIntrument=()=>{
      console.log(this.props.instrument)
      this.props.updateUserinstrumentfordelete(this.state.instId);
      InstrumentService.delInstrument(this.state.instId)
      .then(()=>{
        console.log('instrument deleted')
      })
    }
    handleEditIntrument=e=>{
      e.preventDefault();
      const editedInstrument={
        name:this.state.name,
        description:this.state.description,
        image:this.state.image,
        category:this.state.category
      };
      
      InstrumentService.patchInstrument(editedInstrument,this.state.instId)
      .then(()=>{
        this.thisHandleEditInstForm();
        /*console.log(this.context)
        console.log(this.state.instId);
        const newinstlist = this.context.instruments.map(inst=>inst.id != this.state.instId);
        const newinstrumentslistforinst = newinstlist.push({...editedInstrument,id:this.state.instId});
        this.context.setinstrumentList(newinstrumentslistforinst);
        const newinstlistforusers=this.context.instrumentswithusers.map(inst=>inst.id != this.state.instId);
        const neweditedinst = {...editedInstrument,...this.props.currentuser,id:this.state.instId};
        const newerisntlistforuser=newinstlistforusers.push(neweditedinst);
        this.context.setinstrumentListforusers(newerisntlistforuser);
        console.log(this.context)*/
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
