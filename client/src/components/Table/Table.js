import React, { Component } from "react";

//question: this is both in profile page and here, so there is unnecessary duplication
//does that mean that it should only be in profile page, but how can the child(table)
// access the state from the user inputs.

class Table extends Component {
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
    return (

      <table>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>For</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Notes</th>
          </tr>
        </thead>

  <tbody>
    <tr>
      <td>STATE here</td>
      <td>Eclair</td>
      <td>$0.87</td>
            <td>$0.87</td>
            <td>$0.87</td>
    </tr>
    <tr>
      <td>Alan</td>
      <td>Jellybean</td>
      <td>$3.76</td>
            <td>$0.87</td>
            <td>$0.87</td>
    </tr>
    <tr>
      <td>Jonathan</td>
      <td>Lollipop</td>
      <td>$7.00</td>
            <td>$0.87</td>
            <td>$0.87</td>
    </tr>
  </tbody>
</table>
    )
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

