import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../../Routes/HomePage/HomePage'
import LoginPage from '../../Routes/Login Page/LoginPage'
import RegisterPage from '../../Routes/Register Page/RegisterPage'
import InstrumentPage from '../../Routes/InstrumentPage/InstrumentPage'
import UserPage from '../../Routes/UserPage/UserPage'
import UserWithInstrumentPage from '../../Routes/UserWithInstrumentPage/UserWithInstrumentPage'
import InstrumentContext from '../../context/InstrumentContext'
import InstrumentService from '../../services/InstrumentService'
import TokenService from '../../services/token-service'
//import userService from '../../services/userService'
import './App.css';

class App extends Component {
  static contextType = InstrumentContext
  state = { hasError: false }
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  componentDidMount() {
    this.context.clearError()
    InstrumentService.getInstruments()
      .then(inst=>{ 
        this.context.setinstrumentList(inst)})
      .catch(this.context.setError);
      if(TokenService.hasAuthToken){
      //const token=TokenService.getAuthToken()
      TokenService.clearAuthToken();
      //console.log(token);
    }
  }
  render() {
    return (
      <div className="App">
        <main>
          {this.state.hasError && <p>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={Homepage}
            />
            <Route
              exact
              path={'/login'}
              component={LoginPage}
            />
            <Route
              exact
              path={'/register'}
              component={RegisterPage}
            />
            <Route
              exact
              path={`/instruments/:id`}
              component={props=><InstrumentPage {...props}/>}
            />
            <Route
              exact
              path={`/users/:id`}
              component={props=><UserPage {...props}/>}
            />
            <Route
              exact
              path={`/users/:id/instruments`}
              component={props=><UserWithInstrumentPage {...props}/>}
            /> 
            
          </Switch>
        </main>
      </div>
    );
  }
}
/**/
export default App;
