import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import userService from '../../services/userService'
//import './Instrumentlist.css'

export default class IndividualUser extends Component {
  static contextType = InstrumentContext
  state={
    currentuser:null,
    addinst:false,
    userid:null,
  }
  componentDidMount() {
    this.context.clearError()
    if(this.props.match.params.id===this.context.currentUserid){
    userService.getUser(this.props.match.params.id)
      .then(user=>{
        this.setState({
          currentuser:user,
        })
      })
      .catch(this.context.setError)
    }
    else{
      console.log("error")
    }
  }
  thishandleaddinst=()=>{
    this.setState({
      addinst:!this.state.addinst
    })
  }

  addinstrumentForm(){
    const {error} = this.context
      return(
        <form className='postnewinstrument'>
        <>{error && <p>{error}</p>}</>
        <label>Name:</label>
        <input required name='name' id='name'></input>
        <label>Category:</label>
        <input required name='Category' id='Category'></input>
        <label>description:</label>
        <input name='description' id='description'></input>
        <label>image:</label>
        <input name='image' id='image'></input>
        <button>submit</button>
        </form>
      )
  }
  renderoneUser(user) {
      if (user){
          return(
            <>
            <h1>{user.user_name}</h1>
            <p>{user.full_name}</p>
            <p>{user.email}</p>
            <button onClick ={this.thishandleaddinst}>Add instrument</button>
            {this.state.addinst ? 
            this.addinstrumentForm()
            :<></>}
            </>
        ) 
      }
      else{
        return <></>
      }
  }
  render() {
    const {error} = this.context
    const{currentuser}=this.state
    console.log("here");
    return (
      <>
        {error 
          ? <p>That user doesn't exist, try again</p>
          : this.renderoneUser(currentuser)}
      </>
    )
  }
}
