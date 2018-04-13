import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from '../../components/Nav';
import Jumbotron from '../../components/Jumbotron';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Col from "../../components/Col";
import Card from "../../components/Card";
import Row from "../../components/Row";
import "./Profile.css";
import DataCard from "../../components/DataCard";
import Table from "../../components/Table";
import RadioButtons from "../../components/RadioButtons";
import API from "../../utils/API";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("props", props) //is empty string
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
      .then(res =>
        this.setState({ medicines: res.data.medicines, medicine: "", indication: "", dosage: "", frequency: "", instructions: "", notes: "" })
      )
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
        console.log("Profile savemed then", res);
        this.loadUserMeds();
    })
      .catch(err => console.log(err));
    
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            {/* <div className="col m12"> */}
            <Card 
            handleInputChange = {this.handleInputChange} {...this.state}>
              
            </Card>
            <SubmitButton
              onClick={this.handleFormSubmit}
            />
            
            <DataCard />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Profile;