import React, { Component } from 'react';

import './App.css';
import Link from './Link.react';
import CheckboxWithLabel from './CheckboxWithLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Link/>
       <CheckboxWithLabel labelOn="On" labelOff="Off"/>
      </div>
    );
  }
}

export default App;
