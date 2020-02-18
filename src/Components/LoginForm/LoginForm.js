import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import authService from '../../services/authService'
import InstrumentContext from '../../context/InstrumentContext'
//import './LoginForm.css'

export default class LoginForm extends Component {
  static contextType = InstrumentContext;
    static defaultProps = {
        onLoginSuccess: () => {}
      }
      state = { error: null }
      handleSubmitjwt = e =>{
        e.preventDefault()
        this.setState({error:null})
        const {user_name,password}=e.target
        
        authService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
        .then(res=>{
          user_name.value=''
          password.value=''
          TokenService.saveAuthToken(res.authToken)
          const thisnum=res.id.user_id;
          this.context.saveuserid(thisnum);
          this.props.onLoginSuccess();
        })
        .catch(res=>{
          this.setState({error:res.error})
        })
      }
    
    render() {
    const { error } = this.state
      return (
      <>
      <h1>Login</h1>
       <form className='LoginForm'onSubmit={this.handleSubmitjwt}>
       <>{error && <p>{error}</p>}</>
        <label>User Name:</label>
        <input required name='user_name' id='user_name'></input>
        <label>Password:</label>
        <input required name='password' id='password' type='password'></input>
        <button>submit</button>
       </form>
      </> 
      )
    }
  }
  