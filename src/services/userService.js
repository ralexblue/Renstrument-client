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
},
getUser(id){
  return fetch(`${config.API_ENDPOINT}/users/${id}`)
  .then(res =>{
      return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
  })
},
getUserInst(id){
  return fetch(`${config.API_ENDPOINT}/users/instruments/${id}`)
  .then(res =>{
      return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
  })
},
getUserWhoOwnsinst(id){
  return fetch(`${config.API_ENDPOINT}/instruments/users/${id}`)
  .then(res =>{
      return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
  })
}

/*parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}*/
}

export default userService