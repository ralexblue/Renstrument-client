import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import IndividualInstrument from '../../Components/IndividualInstrument/IndividualInstrument'
//import './LoginPage.css'

export default class InstrumentPage extends Component {
    render() {
        return (
            <>
            <Header/>
            <IndividualInstrument instrumentid={this.props.instrumentid} />
            </>
        )
    }
}