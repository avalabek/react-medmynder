import React, { Component } from "react";
import API from "../../utils/API";
import ImageBanner from "../../components/ImageBanner";
import { Redirect } from "react-router-dom";

import { Input, FormBtn } from "../Form";
import swal from "sweetalert";
import Nav from "../../components/Nav";


import "./SignIn.css";



class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: "",
    password: "",
    loggedin:""
  };
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      })
        .then(patientID=> {
        console.log("this is the patient ID:", patientID)
        // console.log("first name?", this.state.fircstName) 
        this.props.setUser(patientID)
        this.setState({ loggedin: "true" });})
      .catch(err => swal("Error", "Username or Password Entered Incorrectly", "error"));
    }
  };
  

  render() {
    if (this.state.loggedin == "true") {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
     <Nav />
      <div className="container" >
      <ImageBanner />

      <br /> <br />
    
      <form >
      <div className="row" >

      <div className="col s3" />
      <div className="col s6" >
      <img 
        src={"../images/loginicon.png"} 
        alt="Medication"
        />

      <h5 className="header-center"> Log In </h5>

      <Input
      value={this.state.username}
      onChange={this.handleInputChange.bind(this)}
      name="username"
      placeholder="Username"
      />

      <Input
      value={this.state.password}
      onChange={this.handleInputChange.bind(this)}
      name="password"
      placeholder="Password"
      type="password"
      />

      <FormBtn onClick={this.handleFormSubmit}>
      Sign In
      </FormBtn>
      <br/><br/>
      <a class="google-btn"  href="/auth/google"> Sign in with Google+ </a>
      <br/> <br/> 

      <h5 className="header-center"> New User? Register Here </h5>
      <FormBtn>
      Register
      </FormBtn>

      </div>
      </div>


      </form>
     

      </div>   
      </div>
    );
  }
}

export default SignIn;
