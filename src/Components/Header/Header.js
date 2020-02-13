import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
//import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }
  renderLoginLink() {
    return (
    <div>
      <Link to='/login'>
        {' '}
        Login
        </Link>
        <Link to='/register'>
        {' '}
        Register
        </Link>
    </div>
    )
  }
  renderLogoutLink() {
    return (
      <div>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
}



  render() {
    return <>
        <Link to='/'>
        {' '}
        Renstrument
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
    </>
  }
}