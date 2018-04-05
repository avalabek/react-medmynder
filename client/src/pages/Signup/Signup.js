import React from "react";
import "./Signup.css";
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      dateOfBirth: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <br /> <br />
        <div className="row">
          <div className="col s3" />

          <div className="col s9">
            <div className="input-field col s4">
              <input id="first_name" type="text" className="validate" autofocus/>
              <label for="first_name">First name</label>
            </div>

            <div className="input-field col s4">
              <input id="first_name" type="text" className="validate" autofocus />
              <label for="first_name">Last name</label>
            </div>

            <div className="input-field col l8">
              <input id="phone" type="text" className="validate" autofocus/>
              <label for="phone">Phone</label>
            </div>
<Input />
            

                <div className="input-field col l8">
                  <input id="dateOfBirth" type="text" className="validate" />
                  <label for="dateOfBirth">Date of birth</label>
                </div>

                <div className="row">
                  <div className="col s12">
                    <div className="input-field inline col s4">
                      <input
                        id="email_inline"
                        type="email"
                        className="validate"
                      />
                      <label for="email_inline">Email</label>
                      <span
                        className="helper-text"
                        data-error="Please enter a valid email."
                        data-success="valid"
                      >
                        Use your email to login next time
                      </span>
                    </div>
                    <div className="input-field inline col s4">
                      <input
                        id="password_inline"
                        type="text"
                        className="validate"
                      />
                      <label for="password_inline">Choose a password</label>
                      <span
                        className="helper-text"
                        data-error="wrong"
                        data-success="valid"
                      >
                        Pick an easy password!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SubmitButton />
            {/* <a className="waves-effect waves-light btn submit">Submit</a> */}
          </div>
        
      
    );
  }
}
export default Signup;
