import React, { Component } from 'react'

const InstrumentContext= React.createContext({
    instruments:[],
    currentUserid:0,
    instrumentswithusers:[],
    setError: () => {},
    clearError: () => {},
    setinstrumentList: () => {},
    saveuserid:() =>{},
    addNewInstrument:()=>{},
   
})

export default InstrumentContext

export class InstrumentListProvider extends Component {
    state = {
      instruments: [],
      currentUserid:0,
      error: null,
      instrumentswithusers:[]
    }

    saveuserid = currentUserid =>{
      this.setState({currentUserid})
    }
    

    setinstrumentList = instruments => {
      this.setState({instruments})
    }
    addNewInstrument = newinstrument =>{
      this.setState({instruments:[...this.state.instruments,newinstrument]})
    }
    setinstrumentListforusers = instrumentswithusers => {
      this.setState({instrumentswithusers})
    }
  
    setError = error => {
      this.setState({ error })
    }
  
    clearError = () => {
      this.setState({ error: null })
    }
    componentDidUpdate(prevProps, prevState) {
      if (this.state.value !== prevState.value) {
        // Whatever storage mechanism you end up deciding to use.
        localStorage.setItem("parentValueKey")
      }
    }  
    render() {
      const value = {
        instruments: this.state.instruments,
        instrumentswithusers:this.state.instrumentswithusers,
        error: this.state.error,
        currentUserid:this.state.currentUserid,
        setError: this.setError,
        clearError: this.clearError,
        setinstrumentListforusers:this.setinstrumentListforusers,
        setinstrumentList: this.setinstrumentList,
        saveuserid:this.saveuserid,
        addNewInstrument:this.addNewInstrument,
      }

      return (
        <InstrumentContext.Provider value={value}>
          {this.props.children}
        </InstrumentContext.Provider>
      )
    }  
  }
