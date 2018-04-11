import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import API from './utils/API.js';


class App extends Component {
  state = {
    patientID: API.ptID
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
          
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/profile" render={(props) => <Profile {...props} patientId = {this.state.patientID} />} />
          <Route exact path="/" component={Landing} />
          {/* pass props to routes (patient id somehow) from Signup to Profile */}
          {/*store patient id in state(fxn */ }
      </div>
       </Router>
    );
  }
}

export default App;
