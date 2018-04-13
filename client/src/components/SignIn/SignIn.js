import React, { Component } from "react";
import API from "../../utils/API";

import { Input, FormBtn } from "../Form";

import "./SignIn.css";



<<<<<<< HEAD
class SignIn extends React.Component {
=======
class SignIn extends Component {
>>>>>>> 02853fe145073dc6848721677d67dc97393d42d2
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
  

<<<<<<< HEAD




=======
>>>>>>> 02853fe145073dc6848721677d67dc97393d42d2
  render() {
    return (
     
      <div className="container" >

<<<<<<< HEAD
        <br /> <br />
         <div className="card" >
            <div className="card-content" >
        <form >
          <div className="row" >
          
            <div className="col s4" />
              <div className="col s5" >
              <img src={"../images/loginicon.png"} />
         
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
              />
             
        
              
            
              <FormBtn
                
                onClick={this.handleFormSubmit}
              >
               Sign In
              </FormBtn>
          <br /> <br /> 

            <h5 className="header-center"> New User? Register Here </h5>
               <FormBtn
              >
            Register
              </FormBtn>




              </div>
              </div>
              

            </form>
            </div>
              </div>
          
            </div>


 

          
 

        

        
=======
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
>>>>>>> 02853fe145073dc6848721677d67dc97393d42d2
    );
  }
}

<<<<<<< HEAD
export default SignIn;
=======
export default SignIn;
>>>>>>> 02853fe145073dc6848721677d67dc97393d42d2
