import React from "react";



export const RadioButtons = props => (
  <form action="#">
    <div className="container">
    <p>
      <label>
        <input name="group1" value="1" type="radio" checked />
        <span>Once a day</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" value="2" type="radio" />
        <span>Twice a day</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" value="3" name="group1" type="radio" />
        <span>Three times a day</span>
      </label>
    </p>
    </div>
  </form>





);
export default RadioButtons;


