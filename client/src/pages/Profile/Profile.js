import React, { Component } from "react";

import SubmitButton from '../../components/SubmitButton';
// import Col from "../../components/Col";
import Card from "../../components/Card";
// import Row from "../../components/Row";
import "./Profile.css";
import DataCard from "../../components/DataCard";
import Nav from '../../components/Nav';
import EditButton from "../../components/EditButton";
import API from "../../utils/API";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("props", props); //is empty string
    this.state = {
      medicines: [],
      medicine: "",
      indication: "",
      dosage: "",
      frequency: "",
      instructions: "",
      notes: ""
    };
  }

  componentDidMount() {
    this.loadUserMeds();
  }

  loadUserMeds = () => {
    API.getUser(this.props.patientID)
      .then(res => {
        console.log("res.data.medicines", res.data.medicines);
        this.setState({
          medicines: res.data.medicines,
          medicine: "",
          indication: "",
          dosage: "",
          frequency: "",
          instructions: "",
          notes: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Form submitted.");
    console.log("handleFormSubmit function called");
    console.log("patient id", this.props.patientID); //isn't being passed from App.js
    API.saveMed({
      medicine: this.state.medicine,
      indication: this.state.indication,
      dosage: this.state.dosage,
      frequency: this.state.frequency,
      instructions: this.state.instructions,
      notes: this.state.notes,
      patient: this.props.patientID
    })
      .then(res => {
        console.log("handleFormsubmit->API.saveMed->then", res);
        this.loadUserMeds();
        // this.getMed({patient: this.props.patientID});
      })
      .catch(err => console.log(err));
  };

  deleteMed = id => {
    API.deleteMed(id)
    .then(res => this.loadUserMeds())
    .catch(err => console.log(err))
  };
// () => this.deleteMedicine(medicine._id)
  render() {
    return (
      <div>
     
        <br />
        <div className="container">
          <div className="row">
            
            <Card handleInputChange={this.handleInputChange} {...this.state} />
            

            <DataCard medicines={this.state.medicines} />
            </div>
          <div className="container">
          {/* <div className="col m6"> */}
            <SubmitButton onClick={this.handleFormSubmit} />
            <br /> <br /> <br /> 
        </div>
      </div>
      </div>
    );
  }
}

export default Profile;