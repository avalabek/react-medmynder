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


  render() {
    return (

    <div className = "col m6 s6">
           
          
             <ul>
                {this.props.medicines.map(meds => (
                  <li key={meds._id}>
                  
                      <strong>
                      
                        {meds.medicine} 
                      </strong>
                 
                
                  </li>
                ))}
              
              </ul>
           
             
         

      </div>
      );
}
}


export default Table;
