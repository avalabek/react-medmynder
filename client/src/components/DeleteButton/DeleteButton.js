import React from "react";
import "./DeleteButton.css";


const DeleteButton = props => (

  <a className="waves-effect waves-red btn-flat" id="delete"{...props}>✗</a>
 
);

export default DeleteButton;


