import React from "react";
import "./ImageBanner.css";

const ImageBanner = ({ children }) => (

	<div className="section no-pad-bot" id="index-banner">
	    <div className="container" id="banner">
	      <h1 className="logo"> MedMynder  <img src={require("../../images/cell .png")} alt={""} id="cellicon"/> </h1> 
	    </div>
	</div>
 );


export default ImageBanner;
