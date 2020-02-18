import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import userService from '../../services/userService'
import Instrumentpanel  from '../instrumentpanel/Instrumentpanel.js'
//import './Instrumentlist.css'

export default class IndividualUser extends Component {
  static contextType = InstrumentContext
  state={
    currentuser:null,
    addinst:false,
    userInstruments:[]
  }
  componentDidMount(){
    //this.context.clearError(); 
    console.log('ok');
    //this.getuserfromdb();
    //this.getuserinstfromdb();
    console.log(this.context.currentUserid);
  }
  thishandleaddinst=()=>{
    this.setState({
      addinst:!this.state.addinst,
    })
  }
  getuserfromdb = () =>{
    if(this.props.match.params.id==this.context.currentUserid){
      userService.getUser(this.context.currentUserid)
        .then(user=>{
          this.setState({
            currentuser:user,
          })
        })
        .catch(this.context.setError)
    }
    else{
      this.context.setError();
      console.log("error");
    }
  }
  getuserinstfromdb =()=>{
    userService.getUserInst(this.context.currentUserid)
    .then(inst=>{
      this.setState({userInstruments:inst})
    })
    .catch(this.context.setError)
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
  userinstrumentList(){
    const { userInstruments = [] } = this.state
    return userInstruments.map(inst =>
      <Instrumentpanel
        key={inst.id}
        instrument={inst}
      />
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
            this.addinstrumentForm()+
            this.userinstrumentList()
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
    return (
      <>
        {error 
          ? <p>That user doesn't exist, try again</p>
          : this.renderoneUser(currentuser)}
      </>
    )
  }
}
