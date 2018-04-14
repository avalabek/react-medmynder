import React from "react";
import "./Signup.css";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
// import InlineInput from "../../components/InlineInput";
// import Jumbotron from "../../components/Jumbotron";
// import Profile from "../../pages/Profile";
import API from "../../utils/API"


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      gender:"",
      email: "",
      password: ""
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ //assigning form input to state variables
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
       event.preventDefault();
      //  document.getElementById("form").reset();
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      dateOfBirth: "",
      gender:"",
      email: "",
      password: ""
    });
;
       
      alert("Form submitted.")
      API.saveUser({
        first: this.state.firstName,
        last: this.state.lastName,
        phone: this.state.phone,
        dob: this.state.dateOfBirth,
        gender: this.state.gender,
        email: this.state.email,
        password: this.state.password
      })
      //what do we want to do here? prob redirect
      // user to the profile page? how to write
      // res redirect in es6 also need to clear page
      .then(patientID=> {
        console.log("this is the patient ID:", patientID)
        this.props.setUser(patientID)})
      .catch(err => console.log(err));
  //   
   };

  render() {
    return (
      <div className="container">
      <form>
        
        <br /> 
        <div className="row">
          <div className="col s3" />

          <div className="col s9">
                        
            <Input
              value={this.state.firstName}
              onChange={this.handleInputChange}
              name="firstName"
              label="First name"
            />
            <Input
              value={this.state.lastName}
              onChange={this.handleInputChange}
              name="lastName"
              label="Last name"
            />         
            <Input
              value={this.state.phone}
              onChange={this.handleInputChange}
              name="phone"
              label="Phone"
              />
                    
            <Input
              value={this.state.dateOfBirth}
              onChange={this.handleInputChange}
              name="dateOfBirth"
              label="Date of birth"
            />
            <Input 
              value={this.state.gender}
              onChange={this.handleInputChange}
              name="gender"
              label="Gender"
            />  
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              label="Email"
              type="email"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              label="Password"
              /> 
                 
           
          
          </div>
        </div>
        <SubmitButton
        onClick={this.handleFormSubmit} 
        message="Register"
        />
        
     </form>   
     </div>
    );
  }
}
export default Signup;
