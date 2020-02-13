import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './Instrumentpanel.css'
export default class Instrumentpanel extends Component {
    render() {
      const { instrument } = this.props
      return (
        <Link to={`/instruments/${instrument.id}`}>
            <h1>{instrument.name}</h1>
            <p>{instrument.description}</p>
            <p>{instrument.image}</p>
        </Link>
      )
    }
  }
  