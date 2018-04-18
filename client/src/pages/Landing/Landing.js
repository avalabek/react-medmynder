import React, { Component } from "react";
import ImageBanner from "../../components/ImageBanner";
import SignIn from "../../components/SignIn";
import ImgCard from "../../components/ImgCard";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setUser: this.props.setUser
    };
  }
  render(){
    return(
      <div>
        <ImageBanner />
        <SignIn setUser={this.state.setUser}/>
        <br />
        <br />
        <ImgCard />
      </div>
    )
  }
}

export default Landing;
