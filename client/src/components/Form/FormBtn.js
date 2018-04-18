import React from "react";
import { Link } from "react-router-dom";

export const FormBtn = props => (
  <div>
    <Link to="/signup">
      <button
        {...props}
        className="waves-teal btn"
        type="submit"
        name="action"
        style={{ fontFamily: "IBM Plex Sans" }}
        message="message"
      >
        {props.children}
      </button>
    </Link>
  </div>
);
