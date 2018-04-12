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
    patientID: ""
  }

  setUser = id => {
    this.setState({
      patientID: id
    });
    console.log("patientID passed in from Signup", this.state.patientID);
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
          
          <Route exact path="/signup" render={(props) => <Signup {...props} setUser={this.setUser}/>} /> 
          <Route exact path="/profile" render={(props) => <Profile {...props} patientID = {this.state.patientID}/>} />
          <Route exact path="/" component={Landing} />
      </div>
       </Router>
    );
  }
}

export default App;
