





import React, { Component } from "react";
 import "./ImgCard.css"
 



export default class ImgCard extends Component {

	render() {
    return (

    	<div class="row" id="imgcardrow">

	    	<h1 id="features"> - Features - </h1>
				    
				    <div class="col s4">
				      <div class="card" id="imgcard">
				        
				        <div class="card-image">
				         <img src={require("../../images/desktop.jpg")} alt={""} class="image"/>
	          				
						</div>

						<div class="card-content">
				          <p>Desktop-Based Interface</p>
				        </div>
				       
				       </div>
				     </div>

			       


			        <div class="col s4">
			      		<div class="card" id="imgcard">
			        
			        		<div class="card-image">
			        		 <img src={require("../../images/alarm2.jpg")} alt={""} class="image"/>
          				
						</div>

						<div class="card-content">
				          <p>Users can create, view, update, delete, and schedule SMS reminders for their 
				          prescriptions and medical appointments</p>
			        	</div>
			        
				       </div>
				    </div>



			        <div class="col s4">
			      <div class="card" id="imgcard">
			        
			        <div class="card-image">
			         <img src={require("../../images/notes2.jpg")} alt={""} class="image"/>
          				
					</div>

					<div class="card-content">
			          <p>I am a very simple card. I am good at containing small bits of information.
			          I am convenient because I require little markup to use effectively.</p>
			        </div>
			        </div>
			      </div>




			     




		</div>








   );
}
}