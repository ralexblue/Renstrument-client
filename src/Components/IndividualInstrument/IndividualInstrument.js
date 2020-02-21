import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import './IndividualInstrument.css'
import userService from '../../services/userService'
export default class IndividualInstrument extends Component {
  static contextType = InstrumentContext
  renderoneInstrument(instrument) {
      if (instrument){
        return(<>
        <div class ="box2">
          <img src ={instrument.image} alt="none" class="imgforindividualinstrumets"/>
          <div class="column">
          <h1>{instrument.name}</h1>
          <h2>{instrument.decription}</h2>
          <h3>{instrument.contact}</h3>
          <h4>{instrument.email}</h4>
          <h3>user: {instrument.user_name}</h3>
          </div>
        </div>   
        </>
        ) 
      }
      else{
        return (<></>)
      }
  }
  render() {
    const {error} = this.context
    const thisid=this.props.match.params.id;
    const instrumentswithusers= this.context.instrumentswithusers
    const found = instrumentswithusers.find(inst=>inst.id == thisid); 
    return (
      <>
        {error
          ? <p>That instrument doesn't exist, try again</p>
          : this.renderoneInstrument(found)}
      </>
    )
  }
}
