import React from "react";
<<<<<<< HEAD

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
=======
import { Link } from "react-router-dom";

export const FormBtn = props => (
  <div>
    <Link to="/signup">
      <button
        {...props}
        className="waves-effect waves-light btn"
        type="submit"
        name="action"
        style={{ fontFamily: "IBM Plex Sans" }}
        message="message"
      >
        {props.children}
      </button>
    </Link>
  </div>
>>>>>>> 02853fe145073dc6848721677d67dc97393d42d2
);
