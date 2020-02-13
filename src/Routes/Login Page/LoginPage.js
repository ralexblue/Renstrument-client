import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import LoginForm from '../../Components/LoginForm/LoginForm'
//import './LoginPage.css'

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
      }
    
      handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
      }

    render() {
        return (
            <>
            <Header/>
            <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
            </>
        )
    }
}