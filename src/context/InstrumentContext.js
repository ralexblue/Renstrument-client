import React, { Component } from 'react'

const InstrumentContext= React.createContext({
    instruments:[],
    currentUserid:0,
    isLoading:true,
    setError: () => {},
    clearError: () => {},
    setinstrumentList: () => {},
    saveuserid:() =>{},
    addNewInstrument:()=>{},
    addnewUserinstrument:()=>{},
    addupdateInstrument:()=>{},
    delInstrument:()=>{},
    loadingHasStarted:()=>{},
    loadingHasFinished:()=>{},
})

export default InstrumentContext

export class InstrumentListProvider extends Component {
    state = {
      instruments: [],
      currentUserid:0,
      error: null,
      isLoading:true,
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
    addupdateInstrument = (newinstrument,id) =>{
      const newarrys=this.state.instruments.map(inst => {
        if (inst.id !== id) {
          return inst;
        } else {
          return newinstrument
        }
      })
      this.setState({instruments: newarrys})
    }
    delInstrument=id=>{
      const newInstruments = this.state.instruments.filter(inst=>inst.id != id);
      this.setState({
        instruments:newInstruments,
      })
    }
    setError = error => {
      this.setState({ error })
    }
    clearError = () => {
      this.setState({ error: null })
    } 
    loadingHasStarted = () =>{
      this.setState({
        isLoading:true,
      })
    }
    loadingHasFinished=()=>{
      this.setState({
        isLoading:false,
      })

    }
    render() {
      const value = {
        instruments: this.state.instruments,
        error: this.state.error,
        currentUserid:this.state.currentUserid,
        isLoading:this.state.isLoading,
        setError: this.setError,
        clearError: this.clearError,
        setinstrumentList: this.setinstrumentList,
        saveuserid:this.saveuserid,
        addNewInstrument:this.addNewInstrument,
        addupdateInstrument:this.addupdateInstrument,
        delInstrument:this.delInstrument,
        loadingHasStarted:this.loadingHasStarted,
        loadingHasFinished:this.loadingHasFinished,

      }

      return (
        <InstrumentContext.Provider value={value}>
          {this.props.children}
        </InstrumentContext.Provider>
      )
    }  
  }
