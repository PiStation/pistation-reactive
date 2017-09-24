import * as React from 'react';
import './App.css';
import StyledStateControlWidget from './features/dashboard/ControlWidget';
import { Provider } from 'react-redux';
import { store } from './Store';

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
          <StyledStateControlWidget enabled={false}/>
          </Provider>
      </div>
    );
  }
}

export default App;
