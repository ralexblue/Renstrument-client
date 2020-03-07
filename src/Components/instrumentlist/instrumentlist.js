import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import Instrumentpanel  from '../instrumentpanel/Instrumentpanel.js'
import './Instrumentlist.css'

export default class Instrumentlist extends Component {
  static contextType = InstrumentContext
  
  renderInstruments() {
    const { instruments = [] } = this.context
    return instruments.map(inst =>
        <Instrumentpanel
          key={inst.id}
          instrument={inst}
        />
    )
  }
  render() {
    const { error } = this.context
    return (
      <>
       <div class="wrapper">
        {error
          ? <p>There was an error, try again</p>
          : this.context.isLoading ? <p>loading</p> 
            : this.renderInstruments()}
        </div>
      </>
    )
  }


}
