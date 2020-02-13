import config from '../config'
//import TokenService from './token-service'

const userService = {
getUsers(){
    //console.log('here')
    return fetch(`${config.API_ENDPOINT}/users`)
    .then(res =>{
        return (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        
    })
},
postUser(newuser){
    return fetch(`${config.API_ENDPOINT}/users`,{
    method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newuser),
    })
    .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
    
}

}

export default userService