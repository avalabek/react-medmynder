import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Books from './pages/Books'

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="App">
        <Nav />
          {/* <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Books} /> */}
        <Signup />
          
      </div>
      // </Router>
    );
  }
}

export default App;
