import React, {Component} from 'react';
import Conference from './Conference';
import { Image, List } from 'semantic-ui-react';
import logo from './opi-logo.png';

class ConferenceList extends Component {

  render() {
    return (
      <div>
        <h3>Conferences</h3>
        <List animated verticalAlign='middle'>
          { this.props.store.getState().conferences.map( value => this.addConference(value)) }
        </List>
      </div>
    );
  }

  addConference(value) {
    return <List.Item>
      <Image avatar src={ logo } />
      <List.Content>
        <List.Header>
          <Conference
            key = { value.name }
            data = { value }/>
        </List.Header>
      </List.Content>
    </List.Item>
  }
}

export default ConferenceList;
