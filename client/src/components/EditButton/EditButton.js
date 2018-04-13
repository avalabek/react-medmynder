import React from "react";

export const EditButton = props => (
  

  <button
    {...props}
    className="waves-effect waves-light btn-large"
    type="submit"
    name="action"
    style={{ fontFamily: "IBM Plex Sans" }}
    message="message"
    
  >
    Edit<i className="material-icons right">edit</i>
    {props.children}
  </button>
);



export default EditButton;
