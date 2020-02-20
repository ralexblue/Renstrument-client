import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import userService from '../../services/userService'
import InstrumentService from '../../services/InstrumentService'
import InstrumentpanelforUser  from '../InstrumentpanelforUser/InstrumentpanelforUser.js'
import './Individualuser.css'

export default class IndividualUser extends Component {
  static contextType = InstrumentContext
  constructor(props) {
    super(props);
    this.state = {
      currentuser:null,
      addinst:false,
      userInstruments:[],
      editUser:false,
      name:'',
      description:'',
      Category:'Brass',
      image:'',
      
    };

  }
  handleChangeName=(event)=> {
    //console.log(event.target.value)
    this.setState({name: event.target.value});
  }
  handleChangeDescription=(event)=> {
    //console.log(event.target.value)
    this.setState({description: event.target.value});
  }
  handleChangeCategory=(event)=> {
    //console.log(event.target.value)
    this.setState({Category: event.target.value});
  }
  handleChangeImage=(event)=> {
    //console.log(event.target.value)
    this.setState({image: event.target.value});
  }
  handleChangeUser_Name=(event)=> {
    //console.log(event.target.value)
    this.setState({currentuser:{...this.state.currentuser,user_name: event.target.value}});
  }
  handleChangeFull_name=(event)=> {
    //console.log(event.target.value)
    this.setState({currentuser:{...this.state.currentuser,full_name: event.target.value}});
  }
  handleChangeEmail=(event)=> {
    //console.log(event.target.value)
    this.setState({currentuser:{...this.state.currentuser,email: event.target.value}});
  }
  handleChangeContact=(event)=> {
    //console.log(event.target.value)
    this.setState({currentuser:{...this.state.currentuser,contact: event.target.value}});
  }

  handleSubmitForNewInstrument=()=>{
    const newInstruemntToAdd={
      name:this.state.name,
      description:this.state.description,
      image:this.state.image,
      category:this.state.Category
    }
    console.log(newInstruemntToAdd)
    InstrumentService.postInstrument(newInstruemntToAdd)
    .then(res=>{
      console.log(res);
      this.setState({
        name:'',
        description:'',
        Category:'Brass',
        image:'',
        userInstruments:[...this.state.userInstruments,res]
      })
      this.context.addNewInstrument(res);
    })
  }

  componentDidMount(){ 
    if(this.context.currentUserid>0){
      //console.log('ok');
      this.getuserfromdb();
      this.getuserinstfromdb();
    }
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
  getuserinstfromdb = () =>{
    userService.getUserInst(this.context.currentUserid)
    .then(inst=>{
      this.setState({userInstruments:inst})
    })
    .catch(this.context.setError)
  }
  thishandleEdituser=()=>{
    this.setState({
      editUser:!this.state.editUser,
    })
  }
  edituserForm(){
    const {error} = this.context
      return(<>
        <form className='postnewinstrument'>
        <>{error && <p>{error}</p>}</>
        <label>Name:</label>
        <input onChange={this.handleChangeUser_Name} value={this.state.currentuser.user_name} required name='name' id='name'></input>
        <br/>
        <label>Full Name:</label>
        <input onChange={this.handleChangeFull_name} value={this.state.currentuser.full_name} required name='full_name' id='full_name'></input>
        <br/>
        <label>description:</label>
        <input onChange={this.handleChangeEmail} value={this.state.currentuser.email}  name='description' id='description'></input>
        <br/>
        <label>image:</label>
        <input onChange={this.handleChangeContact} value={this.state.currentuser.contact} name='image' id='image'></input>
        </form>
        <br/>
        <button onClick={this.handleSubmitForUpdatedUser}>submit</button>
        <br/>
        </>
      )
  }
  handleSubmitForUpdatedUser= ()=>{
    //console.log(this.state.currentuser)
    const updateduser={
      user_name:this.state.currentuser.user_name,
      full_name:this.state.currentuser.full_name,
      email:this.state.currentuser.email,
      contact:this.state.currentuser.contact,
    }
   userService.patchUser(updateduser,this.context.currentUserid)
   .then(()=>{
    this.thishandleEdituser();
   });
    //userService
  }

  addinstrumentForm(){
    const {error} = this.context
      return(<>
        <form className='postnewinstrument'>
        <>{error && <p>{error}</p>}</>
        <label>Name:</label>
        <input onChange={this.handleChangeName} value={this.state.name} required name='name' id='name'></input>
        <br/>
        <label>
          what type of instrument:
        <select onChange={this.handleChangeCategory} value={this.state.Category} >
          <option value="Brass">Brass</option>
          <option value="Guitar">Guitar</option>
          <option selected value="Keyboard">Keyboard</option>
          <option selected value="Percussion">Percussion</option>
          <option selected value="Strings">Strings</option>
          <option value="Misc">Misc</option>
        </select>
        </label>
        <br/>
        <label>description:</label>
        <input class="adddesc" onChange={this.handleChangeDescription} value={this.state.description}  name='description' id='description'></input>
        <br/>
        <label>image:</label>
        <input onChange={this.handleChangeImage} value={this.state.image} name='image' id='image'></input>
        </form>
        <br/>
        <button onClick={this.handleSubmitForNewInstrument}>submit</button>
        </>
      )
  }
 
  userinstrumentList(){
    const { userInstruments = [] } = this.state
    return userInstruments.map(inst =>
      <InstrumentpanelforUser
        key={inst.id}
        instrument={inst}
        updateUserinstrumentfordelete={this.updateUserinstrumentfordelete}
      />
      )
  }
  updateUserinstrumentfordelete =(id)=>{
    const { userInstruments = [] } = this.state
    const newuserInstruments = userInstruments.filter(inst=>inst.id != id);
    this.setState({
      userInstruments:newuserInstruments
    })
  }

  renderoneUser(user) {
      if (user){
          return(
            <>
            <h1>{user.user_name}</h1>
            <p>{user.full_name}</p>
            <p>{user.email}</p>
            <p>{user.contact}</p>
            <button onClick ={this.thishandleEdituser}>editUser</button>
            {this.state.editUser ? 
            this.edituserForm()
            :<></>}
            <button onClick ={this.thishandleaddinst}>Add instrument</button>
            {this.state.addinst ? 
            this.addinstrumentForm()
            :<></>}
            <div class="wrapper">
            {this.userinstrumentList()}
            </div>
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
