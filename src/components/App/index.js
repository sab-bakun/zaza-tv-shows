import React, { Component } from 'react';

import Film from './../Film';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Film />
        </header>
      </div>
    );
  }
}

export default App;
