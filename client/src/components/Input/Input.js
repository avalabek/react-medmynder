import React from "react";

export const Input = props => (
<div className="input-field col l8">
  <input id="phone" type="text" className="validate" autofocus {...props} />
  <label for="phone" >Testing</label>
</div>
);
export default Input;