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
            <div class="info">
                <div class="center">
                <h2>Hello welcome to Renstrument</h2>
                <p>This little website is so you can make an account and use it to post instruments laying down in your attic.
                You first create an account and post,edit contact info,and post instrument with image (url) add price for
                 rent in description because it may differ.There is a demo account on  how instruments are posted in here </p>
                </div>
            </div>
            <Instrumentlist/>      
            </>
        )
    }
}

