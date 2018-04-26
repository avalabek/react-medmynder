import React from "react";
// import Label from "../Label";

export const Input = props => (
  <div className="input-field col m12">
    <input   autoFocus {...props} 
      />
    <label htmlFor={props.htmlFor}>{props.label}</label>
    
  </div>
);
export default Input;
