import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
      // <Router>
      <div className="App">
        <Nav />
          
        <Signup />
          
      </div>
      // </Router>
    );
  }
}

export default App;
