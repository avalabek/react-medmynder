import React from "react";
// import Label from "../Label";

export const Input = props => (
<div className="input-field col l8">
  <input id="phone" type="text" className="validate" autofocus {...props} />
  <label for="phone" >{props.name}</label>
</div>
);
export default Input;