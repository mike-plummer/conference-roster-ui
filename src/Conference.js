import React, {Component} from 'react';

class Conference extends Component {

  render() {
    return (
      <div>
        <p>{ this.props.data.name }</p>
      </div>
    );
  }
}

export default Conference;
