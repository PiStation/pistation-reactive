import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import ServerConnection  from './features/mqttServers/ServerConnection';
import ControlBoard from './features/dashboard/Dashboard';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Provider store={store}>
            <div>
            <ControlBoard />
            <ServerConnection />
            </div>
       
          </Provider>
      </div>
    );
  }
}

export default App;
