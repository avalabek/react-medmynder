import React, { Component } from "react";
import API from "../../utils/API";
import ImageBanner from "../../components/ImageBanner";

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

  // When the form is submitted, use the API.login method
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      })
        .then(patientID => {
          console.log("this is the patient ID:", patientID);
          this.props.setUser(patientID);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card " id="signincard" className="text-align center">
          <div className="card-content" className="text-align center">
            <div className="col m6 s6">
              <form className="responsive-table">
                <div className="row">
                  <div className="col s1" />
                  <div className="col s10">
                    {" "}
                    <br />
                    <img
                      src={require("../../images/loginicon2.png")}
                      alt={""}
                      id="icon"
                    />
                    <h5 className="header-center" id="login">
                      {" "}
                      - Log In -{" "}
                    </h5>
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
                      label="Password"
                    />
                    <FormBtn onClick={this.handleFormSubmit}>Sign In</FormBtn>
                    <h5 className="header-center" id="login">
                      {" "}
                      New User? Register Here{" "}
                    </h5>
                    <FormBtn>Register</FormBtn>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
