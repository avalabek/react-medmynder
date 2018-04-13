import React from "react";

export const FormBtn = props => (
  <button 
  {...props} 
  className="waves-effect waves-light btn"
  type="submit"
  name="action"
  style={{ fontFamily: "IBM Plex Sans" }} 
  message="message" >
    {props.children}
  </button>
);
