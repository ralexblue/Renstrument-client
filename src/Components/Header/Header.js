import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import TokenService from '../../services/token-service'
//import './Header.css'

export default class Header extends Component {
  render() {
    return <>
        <Link to='/'>
        {' '}
        Renstrument
        </Link>
    </>
  }
}