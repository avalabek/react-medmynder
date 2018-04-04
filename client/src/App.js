import React, { Component } from 'react';

import './App.css';
import Signup from './pages/Signup';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Signup />
          
      </div>
    );
  }
}

export default App;
