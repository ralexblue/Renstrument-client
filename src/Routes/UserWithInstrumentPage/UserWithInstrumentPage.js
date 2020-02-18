import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import Header from '../../Components/Header/Header'
import InstrumentlistForUsers from '../../Components/InstrumentlistForUsers/InstrumentlistForUsers'
//import './HomePage.css'

export default class HomePage extends Component {
    static contextType = InstrumentContext
    render() {
        return (
            <>
            <Header/>
            <InstrumentlistForUsers/>      
            </>
        )
    }
}
