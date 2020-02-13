import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../../Routes/HomePage/HomePage'
import './App.css';

class App extends Component {
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
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
