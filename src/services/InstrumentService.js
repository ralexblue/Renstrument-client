import config from '../config'
//import TokenService from './token-service'

const InstrumentService = {
getInstruments(){
    //console.log('here')
    return fetch(`${config.API_ENDPOINT}/instruments`)
    .then(res =>{
        return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        
    })
}
}

export default InstrumentService