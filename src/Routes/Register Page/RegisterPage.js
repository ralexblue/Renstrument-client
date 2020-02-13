import React, { Component } from 'react'
import InstrumentContext from '../../context/InstrumentContext'
import Header from '../../Components/Header/Header'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
//import './RegisterPage.css'

export default class RegisterPage extends Component {
    static contextType = InstrumentContext
    render() {
        return (
            <>
            <Header/>
            <RegisterForm/>
            </>
        )
    }
}