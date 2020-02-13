import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import Header from '../../Components/Header/Header'
import Instrumentlist from '../../Components/instrumentlist/instrumentlist'
import './HomePage.css'

export default class HomePage extends Component {
    static contextType = InstrumentContext
    render() {
        return (
            <>
            <Header/>
            <Instrumentlist/>      
            </>
        )
    }
}

