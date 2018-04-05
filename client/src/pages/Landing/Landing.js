import React, { Component } from 'react';

import Books from '../../pages/Books';
import Signup from '../../pages/Signup';
import Nav from '../../components/Nav';
import Input from '../../components/Input';


class Landing extends Component {
  render() {
    return (
      
        <div>
          <Nav />
         <Input />
         <Input />

        </div>
      
    );
  }
}
export default Landing;