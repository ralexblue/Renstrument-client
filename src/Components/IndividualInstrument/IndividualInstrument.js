import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
//import InstrumentService from '../../services/InstrumentService'
//import './Instrumentlist.css'

export default class IndividualInstrument extends Component {
  static contextType = InstrumentContext
  renderoneInstrument(instrument) {
      if (instrument){
        return(
        <div class ="box2">
          <img src ={instrument.image} alt="none"/>
          <h1>{instrument.name}</h1>
          <p>{instrument.decription}</p>
        </div>
        ) 
      }
      else{
        return (<></>)
      }
  }
  render() {
    const {error} = this.context
    console.log(this.props)
    const thisid=this.props.match.params.id;
    const instruments= this.context.instruments
    console.log(instruments);
    const found = instruments.find(inst=>inst.id == thisid); 
    return (
      <>
        {error
          ? <p>That instrument doesn't exist, try again</p>
          : this.renderoneInstrument(found)}
      </>
    )
  }
}
