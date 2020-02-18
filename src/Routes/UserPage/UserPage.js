import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import IndividualUser from '../../Components/IndividualUser/IndividualUser'
//import './LoginPage.css'

export default class InstrumentPage extends Component {
    render() {
        return (
            <>
            <Header/>
            <IndividualUser {...this.props}/>
            </>
        )
    }

}