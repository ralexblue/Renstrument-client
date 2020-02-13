import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import InstrumentService from '../../services/InstrumentService'
//import './Instrumentlist.css'

export default class IndividualInstrument extends Component {
  static contextType = InstrumentContext
  state={
    instrument:null,
  }
  componentDidMount() {
    this.context.clearError()
    console.log(this.props.match.params.id)
    InstrumentService.getInstrument(this.props.match.params.id)
      .then(inst=>{
        console.log(inst);  
        this.setState({instrument:inst})
      })
      .catch(this.context.setError)
  }

  renderoneInstrument(instrument) {
    return(
      <>
      <h1>{instrument.name}</h1>
      <p>{instrument.description}</p>
      <p>{instrument.image}</p>
      </>
    )
  }
  render() {
    const {error} = this.context
    const{instrument}=this.state
    return (
      <>
        {error
          ? <p>There was an error, try again</p>
          : this.renderoneInstrument(instrument)}
      </>
    )
  }


}
