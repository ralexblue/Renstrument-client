import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import InstrumentContext from '../../context/InstrumentContext'
import './Header.css'

export default class Header extends Component {
  static contextType = InstrumentContext
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }
  renderLoginLink() {
    return (
    <div class ="userLogin_Style">
      <Link to='/login' style={{ textDecoration: 'none' }}class="linkforuser" >
        {' '}
        Login
        </Link>
        <Link to='/register' style={{ textDecoration: 'none' }}class="linkforuser" >
        {' '}
        Register
        </Link>
    </div>
    )
  }
  renderLogoutLink() {
    return (
      <div class ="userLogin_Style">
        <Link to={`/users/${this.context.currentUserid}`} style={{ textDecoration: 'none' }}class="linkforuser" >
        My account
        </Link>
        <p/>
        <Link
          onClick={this.handleLogoutClick}
          to='/' style={{ textDecoration: 'none' }}class="linkforuser" >
          Logout
        </Link>
      </div>
    )
}
render() {
  return <div class="whole_header">
    <div class="title">
      <Link to='/' style={{ textDecoration: 'none' }}class="links" >
      {' '}
      Renstrument
      </Link>  
      </div>
      {TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()}
  </div>
}
}