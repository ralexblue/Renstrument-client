import React, { Component } from 'react'

const InstrumentContext= React.createContext({
    instruments:[],
    currentUserid:null,
    setError: () => {},
    clearError: () => {},
    setinstrumentList: () => {},
    saveuserid:() =>{},
})

export default InstrumentContext

export class InstrumentListProvider extends Component {
    state = {
      instruments: [],
      currentUserid:null,
      error: null,
    }
    saveuserid = currentUserid =>{
      this.setState({currentUserid})
    }

    setinstrumentList = instruments => {
      this.setState({instruments})
    }
  
    setError = error => {
      this.setState({ error })
    }
  
    clearError = () => {
      this.setState({ error: null })
    }
  
    render() {
      const value = {
        instruments: this.state.instruments,
        error: this.state.error,
        currentUserid:this.state.currentUserid,
        setError: this.setError,
        clearError: this.clearError,
        setinstrumentList: this.setinstrumentList,
        saveuserid:this.saveuserid,
      }
      return (
        <InstrumentContext.Provider value={value}>
          {this.props.children}
        </InstrumentContext.Provider>
      )
    }  
  }
