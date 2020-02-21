import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import Instrumentpanel  from '../instrumentpanel/Instrumentpanel.js'
import InstrumentService from '../../services/InstrumentService'
//import './Instrumentlist.css'

export default class InstrumentlistForUsers extends Component {
  static contextType = InstrumentContext
  componentDidMount() {
    this.context.clearError()
    InstrumentService.getInstruments()
      .then(inst=>{ 
        this.context.setinstrumentList(inst)})
      .catch(this.context.setError)
  }

  renderInstruments() {
    const { instruments = [] } = this.context
    return instruments.map(inst =>
        <div class="wrapper">
      <Instrumentpanel
        key={inst.id}
        instrument={inst}
      />
      </div>
    )
  }
  render() {
    const { error } = this.context
    return (
      <>
        {error
          ? <p>There was an error, try again</p>
          : this.renderInstruments()}
      </>
    )
  }


}
