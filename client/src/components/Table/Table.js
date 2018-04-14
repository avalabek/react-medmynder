import React, { Component } from "react";
import "./Table.css";
import DeleteButton from "../../components/DeleteButton";
import TableData from "../../components/TableData";

//question: this is both in profile page and here, so there is unnecessary duplication
//does that mean that it should only be in profile page, but how can the child(table)
// access the state from the user inputs.

class Table extends Component {
  constructor(props) {
    super(props);
    console.log("props", props); //is empty string
    this.state = {
      medicines: this.props.medicines,

    };
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     medicine: "",
  //     for: "",
  //     dosage: "",
  //     frequency: "",
  //     notes: ""

  //   };
  // }
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //commented out code at bottom of file may go here??

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     medicine: "",
  //     indication: "",
  //     dosage: "",
  //     frequency: "",
  //     notes: ""
  //   });
  //   alert("Form submitted.")
  // };

  render() {
    return <div>
        <br />
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Indication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Notes</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td medicines={this.state.medicines}>{this.state.medicines}</td>
              <td>blood pressure</td>
              <td>1</td>
              <td>twice</td>
              <td>blue</td>
              <DeleteButton />

            </tr>
            </tbody>
            {/* <tr>
              <TableData> {this.props.indication} </TableData>
              
            </tr> */}
          
            <tr>
              <TableData 
                medicines={this.props.medicines}
                value={this.props.dosage} 
                onChange={this.props.handleInputChange} 
               
              />
            </tr>
          
            {/* <DeleteButton
              // onClick={() => this.deleteMedicine(medicine._id)} 
              /> */}
<tbody>
            <tr>
              <td>Ciprofolxacin</td>
              <td>antibiotic</td>
              <td>strep throat</td>
              <td>three times</td>
              <td>upsets my stomach</td>
              {/* <DeleteButton
              // onClick={() => this.deleteMedicine(medicine._id)} 
              /> */}
            </tr>
          </tbody>
        </table>
      </div>;
  }
}
export default Table;
// does the below go here or in profile page component?
  // When the component mounts, load all meds 
  // componentDidMount() {
  //   this.loadMeds();
  // }

  // // Loads all meds and sets them to this.state.meds
  // loadMeds = () => {
  //   API.getMeds()
  //     .then(res =>
  //       this.setState({ 
  //   medicine: res.data, 
  //   for: "", 
  //   dosage: "", 
  //   frequency: "",
        // notes: ""
  //  })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a med from the database with a given id, then reloads books from the db
  // deleteMed = id => {
  //   API.deleteMed(id)
  //     .then(res => this.loadMeds())
  //     .catch(err => console.log(err));
  // };