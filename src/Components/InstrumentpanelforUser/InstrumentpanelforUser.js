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
        category:'',
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
      return(
        <form className='patchinstrument'>
        <>{error && <p>{error}</p>}</>
        <label>Name:</label>
        <input onChange={this.handleChangeName} required name='name' id='name'value={this.state.name}></input>
        <label>
          what type of instrument:
        <select onChange={this.handleChangeCategory} value={this.state.category}>
          <option value="Brass">Brass</option>
          <option value="Guitar">Guitar</option>
          <option selected value="Keyboard">Keyboard</option>
          <option selected value="Percussion">Percussion</option>
          <option selected value="Strings">Strings</option>
          <option value="Misc">Misc</option>
        </select>
        </label>
        <label>description:</label>
        <input onChange={this.handleChangeDescription} name='description' id='description' value={this.state.description}></input>
        <label>image:</label>
        <input onChange={this.handleChangeImage} name='image' id='image' value={this.state.image}></input>
        <button onClick={this.handleEditIntrument}>submit</button>
        </form>
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
    handleEditIntrument=()=>{
      const editedInstrument={
        name:this.state.name,
        description:this.state.description,
        image:this.state.image,
        category:this.state.Category
      }
      console.log(this.state.instId);
      console.log(editedInstrument);
      InstrumentService.patchInstrument(editedInstrument,this.state.instId)
      .then(res=>{
        this.setState({
          name:res.name,
          decription:res.decription,
          image:res.image,
          category:res.category,
          editinst:!this.state.editinst,
        })

      })
    }

    render() {
      const { instrument } = this.props
      return (
        <div class="box">
          <Link to={`/instruments/${instrument.id}`} >
              <img src ={instrument.image} alt="none"/>
          </Link>
          <h1>Name</h1>
          <p>{instrument.name}</p>
          <h3>description</h3>
          <p>{instrument.decription}</p>
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