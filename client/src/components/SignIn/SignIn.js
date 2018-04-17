import React, { Component } from "react";
import API from "../../utils/API";

import { FormBtn } from "../Form";
import Input from "../../components/Input";
import "./SignIn.css";



class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: "",
    password: ""
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
      API.saveBook({
        username: this.state.username,
        password: this.state.password
      })
        .then()
        .catch(err => console.log(err));
    }
  };
  

  render() {
    return (
      
        <div className="container">
        <div className="row">
        <br /> <br /> 
        <div className="col m3"></div>
        <div className="col m9">
          <div className="card">
            <div className="card-content">
              <h4>Welcome.</h4>
              <form>
              <h5 className="header-center"> Log In </h5>

              {/* <Input
                value={this.state.username}
                onChange={this.handleInputChange.bind(this)}
                name="username"
                placeholder="Username"
              /> */}

              <Input
                value={this.state.username}
                onChange={this.handleInputChange.bind(this)}
                name="username"
                label="Username"
              />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange.bind(this)}
                    name="password"
                    label="Password" />

              <FormBtn onClick={this.handleFormSubmit} id="formBtn">
                Sign In
      </FormBtn>
              <br /><br />
              <a class="google-btn" href="/auth/google"> Sign in with Google+ </a>
              <br /> <br />

              <h5 className="header-center"> New User? Register Here </h5>
              <FormBtn>
                Register
      </FormBtn>
      </form>
<br /> <br /><br />

          </div>
        </div>
      </div>
      </div>
      </div>
      
      
    );


      
    
  }
}

export default SignIn;
