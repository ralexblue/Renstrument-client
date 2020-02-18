import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../../Routes/HomePage/HomePage'
import LoginPage from '../../Routes/Login Page/LoginPage'
import RegisterPage from '../../Routes/Register Page/RegisterPage'
import InstrumentPage from '../../Routes/InstrumentPage/InstrumentPage'
import UserPage from '../../Routes/UserPage/UserPage'
import UserWithInstrumentPage from '../../Routes/UserWithInstrumentPage/UserWithInstrumentPage'
import InstrumentContext from '../../context/InstrumentContext'
import './App.css';

class App extends Component {
  static contextType = InstrumentContext
  state = { hasError: false }
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
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
