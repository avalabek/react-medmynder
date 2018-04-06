import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Profile from './pages/Profile';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
          
          <Route exact path="/" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          
          
      </div>
       </Router>
    );
  }
}

export default App;
