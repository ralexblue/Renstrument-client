import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Instrumentpanel.css'

export default class Instrumentpanel extends Component {
    
    render() {
      const { instrument } = this.props
      return (
        <div class="cool">
          <Link to={`/instruments/${instrument.id}`} >
              <img src ={instrument.image} alt="none"/>
              <h2>{instrument.name}</h2>
              <p>{instrument.decription}</p>
          </Link> 
        </div>
      )
    }
  }
  