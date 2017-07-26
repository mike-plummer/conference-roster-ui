import React, {Component} from 'react';
import ConferenceList from './ConferenceList';
import { ActionTypes } from './reducer';

import logo from './opi-logo.png';
import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.store.dispatch({
      type: ActionTypes.UPDATE_CONFERENCES,
      payload: [{
          name: 'MidwestJS'
        }, {
          name: 'KCDC'
        }]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="opi-logo" alt="logo"/>
          <h2>OPI Conference Roster</h2>
        </div>
        <div className="App-content">
          <ConferenceList store={this.props.store}/>
        </div>
      </div>
    );
  }
}

export default App;
