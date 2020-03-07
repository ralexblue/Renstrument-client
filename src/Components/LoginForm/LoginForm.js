import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import authService from '../../services/authService'
import InstrumentContext from '../../context/InstrumentContext'
import { Link } from 'react-router-dom'
import './LoginForm.css'

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
      handleDemoSubmit = () =>{
        const demouser_name="somebodyelse";
        const demopassword="password";
        const user = {
          user_name:demouser_name,
          password:demopassword,
        };
        console.log(user)
        authService.postLogin(
          user
        )
        .then(res=>{
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
      <div class="middle">
        <form className='LoginForm'onSubmit={this.handleSubmitjwt}>
        <h1>Login</h1>
        <>{error && <p>{error}</p>}</>
          <label>User Name:</label>
          <input required name='user_name' id='user_name'class="innputdesign"></input>
          <br/>
          <label>Password:</label>
          <input required name='password' id='password' type='password'class="innputdesign"></input>
          <br/>
          <div class="row">
          <button class="button1">Submit</button>
          <Link class="thelink" to="/register"><button class="button2">Register</button></Link>
          </div>
          <button class='button1'onClick={this.handleDemoSubmit}>Demo Account</button>
        </form>
        
        
      </div> 
      )
    }
  }
  