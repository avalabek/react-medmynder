import React, { Component } from "react";
import "./Table.css";
import DeleteButton from "../../components/DeleteButton";
import TableData from "../../components/TableData";
import API from "../../utils/API";
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
  //  loadUserMeds = () => {
  //    API.getUser(this.props.patientID)
  //      .then(res => {
  //        console.log("res.data.medicines", res.data.medicines);
  //        this.setState({
  //          medicines: res.data.medicines,
  //          medicine: "",
  //          indication: "",
  //          dosage: "",
  //          frequency: "",
  //          instructions: "",
  //          notes: ""
  //        });
  //      })
  //      .catch(err => console.log(err));
  //  };

   
   deleteMed = id => {
     alert("delete button hit");
     API.deleteMed(id)
       .then(res => this.props.loadUserMeds())
      // .then(window.location.reload())
       .catch(err => console.log(err))
   };

  render() {
    // if (this.meds.frequency == 1) {
    //   var freq = "Once A Day"
    // }
    // else if (this.meds.frequency == 2) {
    //   var freq = "Twice A Day"
    // }
    // else if {this.meds.frequency == 3} {
    //   var freq = "Three Times A Day"
    // }
    return (
      
      <div className="col m6 s6">
   <div className="card"> 
   <div className="card-content">  
            <br /><br /><br /><br /><br /><br />
      <table className="responsive-table centered">      
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
             
                {this.props.medicines.map(meds => (
                  <tr key={meds._id}>
                  
                      <strong>
                      
                        <td> {meds.medicine}</td>
                        <td>{meds.indication}</td>
                        <td>{meds.dosage}</td>
                        <td>{meds.frequency}</td>
                        <td>{meds.notes}</td>
                      <DeleteButton onClick={() => this.deleteMed(meds._id)} /> 
                      </strong>
                 
                
                  </tr>
                ))}
              
              
           </tbody>
             
         
      </table>
      </div>
      </div>
      </div>
      );
}
}


export default Table;
