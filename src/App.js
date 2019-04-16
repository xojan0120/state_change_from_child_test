import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      time: null,
    }
  }

  counterAddHandler = (time) => {
    this.setState({
      counter: this.state.counter + 1,
      time: time,
    });
  }

  render() {
    const props = {
      counter: this.state.counter,
      time:    this.state.time,
      onClick: time => this.counterAddHandler(time),
    }
    return (
      <div className="App">
        <Child {...props} />
      </div>
    );
  }
}

export default App;
