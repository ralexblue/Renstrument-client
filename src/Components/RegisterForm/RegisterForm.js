import React, { Component } from 'react'
import userService from '../../services/userService'
import './RegisterForm.css'
import { Link } from 'react-router-dom'
export default class RegisterForm extends Component {
    state = { 
        error: null,
        user_namestate:null 
    }

    handleNewUser=e=>{
        e.preventDefault()
        this.setState({error:null})
        const {user_name,password,full_name}=e.target
        const thisfull=full_name.value;
        userService.postUser({user_name:user_name.value,password:password.value,full_name:thisfull})
        .then(res=>{
            this.setState({
                user_namestate:res.user_name
            })
        })
        .catch(res=>{
            this.setState({error:res.error})
        }) 
    }   



    render() {
        const { error,user_namestate } = this.state
      return (
    <div class="middle2">
      <form  class="registerform"  onSubmit={this.handleNewUser}>
      <h1>Register</h1>
       <>{error && <p>{error}</p>}</>
        <label>User Name:</label>
        <input class="innputdesign" required name='user_name' id='user_name'></input>
        <br/>
        <label>Password:</label>
        <input class="innputdesign" required name='password' id='password' type='password'></input>
        <br/>
        <label>Full Name:</label>
        <input class="innputdesign" required name='full_name' id='full_name'></input>
        <br/>
        <div class="row">
        <button class='button1'>submit</button>
        <Link class="thelink" to="/login"><button class="button2">Login</button></Link>
        </div>
        </form>
        {user_namestate?<div>{user_namestate} have been added as a user <Link class="thelink" to="/login"><button class="button2">login</button></Link></div>:<></> }
      </div> 
      )
    }
  }