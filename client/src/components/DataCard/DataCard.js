import React, { Component } from "react";
import Table from "../../components/Table";
import "./DataCard.css";
import TableData from "../../components/TableData";
import DeleteButton from "../../components/DeleteButton";

export class DataCard extends Component {
  constructor(props) {
    super(props);
    console.log("props", props); //is empty string
    this.state = {
      medicines: this.props.medicines,
      
    };
  }


render() {
  return 
  <div>
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
          <td medicines={this.state.medicines}>hello</td>
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
            </div>
            
}
}
export default Table;