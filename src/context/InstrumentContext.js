import React, { Component } from 'react'

const InstrumentContext= React.createContext({
    instruments:[],
    setError: () => {},
    clearError: () => {},
    setinstrumentList: () => {},
})

export default InstrumentContext

export class InstrumentListProvider extends Component {
    state = {
      instruments: [],
      error: null,
    };
  
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
        setError: this.setError,
        clearError: this.clearError,
        setinstrumentList: this.setinstrumentList,
      }
      return (
        <InstrumentContext.Provider value={value}>
          {this.props.children}
        </InstrumentContext.Provider>
      )
    }  
  }
