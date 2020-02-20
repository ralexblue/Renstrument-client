import config from '../config'
import TokenService from './token-service'

const InstrumentService = {
getInstruments(){
    //console.log('here')
    return fetch(`${config.API_ENDPOINT}/instruments`)
    .then(res =>{
        return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        
    })
},
getInstrument(id){
    return fetch(`${config.API_ENDPOINT}/instruments/${id}`)
    .then(res =>{
        return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json() 
        })
},
delInstrument(id){
    return fetch(`${config.API_ENDPOINT}/instruments/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization':`Bearer ${TokenService.getAuthToken()}`,
        },
      })
},
postInstrument(newInst) {
    return fetch(`${config.API_ENDPOINT}/instruments`, {
      method: 'POST',
      headers: {
        'Authorization':`Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(newInst),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  patchInstrument(newinst,id) {
      //console.log(id);
      //console.log(newinst);
      //console.log(`${config.API_ENDPOINT}/instruments/${id}`)
    return fetch(`${config.API_ENDPOINT}/instruments/${id}`, {
      method: 'PATCH',
      headers: {
        'Authorization':`Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(newinst),
    })
  }
}


export default InstrumentService