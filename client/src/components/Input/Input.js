import React from "react";
// import Label from "../Label";

export const Input = props => (
  <div className="input-field col m12">
    <input 
      id="phone" 
      type="text" 
      className="validate" autofocus {...props} />
    <label for="phone">{props.label}</label>
    
  </div>
);
export default Input;
