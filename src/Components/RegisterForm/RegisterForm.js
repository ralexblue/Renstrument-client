import React, { Component } from 'react'
import userService from '../../services/userService'
//import './LoginForm.css'
import { Link } from 'react-router-dom'
export default class RegisterForm extends Component {
    state = { error: null,
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
      <>
      <h1>Register</h1>
      <form className='LoginForm'onSubmit={this.handleNewUser}>
       <>{error && <p>{error}</p>}</>
        <label>User Name:</label>
        <input required name='user_name' id='user_name'></input>
        <label>Password:</label>
        <input required name='password' id='password' type='password'></input>
        <label>Full Name:</label>
        <input required name='full_name' id='full_name'></input>
        <button>submit</button>
        </form>
        {user_namestate?<div>{user_namestate} have been added as a user <Link to='/login'>Login</Link></div>:<></> }
      </> 
      )
    }
  }