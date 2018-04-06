import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from '../../components/Nav';
import Jumbotron from '../../components/Jumbotron';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      medicine: "",
      for: "",
      dosage: "",
      frequency: "",
      notes: ""
        
    };
  }
  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  

  // When the component mounts, load all meds 
  // componentDidMount() {
  //   this.loadMeds();
  // }

  // // Loads all meds and sets them to this.state.meds
  // loadMeds = () => {
  //   API.getMeds()
  //     .then(res =>
  //       this.setState({ 
  //   medicine: res.data, 
  //   for: "", 
  //   dosage: "", 
  //   frequency: "",
        // notes: ""
  //  })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a med from the database with a given id, then reloads books from the db
  // deleteMed = id => {
  //   API.deleteMed(id)
  //     .then(res => this.loadMeds())
  //     .catch(err => console.log(err));
  // };

  

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   
  //     API.saveMed({
  //       medicine: this.state.medicine,
  //       for: this.state.for,
  //       dosage: this.state.synopsis,
  //      frequency: this.state.frequency,
  //      notes: this.state.notes
  //     })
  //       .then(res => this.loadMeds())
  //       .catch(err => console.log(err));
  //   }
  // };
  // Replace the code below the code above once backend up
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      medicine: "",
      for: "",
      dosage: "",
      frequency: "",
      notes: ""
    });
  }

  render() {
    return (
      <div>
      
      <Jumbotron />
      <Input />
      <Input />
      <Input />
      <Input />
      <SubmitButton />
      </div>
      // <Container fluid>
      //   <Row>
      //     <Col size="md-6">
      //       <Jumbotron>
      //         <h1>What Books Should I Read?</h1>
      //       </Jumbotron>
      //       <form>
      //         <Input
      //           value={this.state.title}
      //           onChange={this.handleInputChange}
      //           name="title"
      //           placeholder="Title (required)"
      //         />
      //         <Input
      //           value={this.state.author}
      //           onChange={this.handleInputChange}
      //           name="author"
      //           placeholder="Author (required)"
      //         />
      //         <TextArea
      //           value={this.state.synopsis}
      //           onChange={this.handleInputChange}
      //           name="synopsis"
      //           placeholder="Synopsis (Optional)"
      //         />
      //         <FormBtn
      //           disabled={!(this.state.author && this.state.title)}
      //           onClick={this.handleFormSubmit}
      //         >
      //           Submit Book
      //         </FormBtn>
      //       </form>
      //     </Col>
      //     <Col size="md-6 sm-12">
      //       <Jumbotron>
      //         <h1>Books On My List</h1>
      //       </Jumbotron>
      //       {this.state.books.length ? (
      //         <List>
      //           {this.state.books.map(book => {
      //             return (
      //               <ListItem key={book._id}>
      //                 <a href={"/books/" + book._id}>
      //                   <strong>
      //                     {book.title} by {book.author}
      //                   </strong>
      //                 </a>
      //                 <DeleteBtn onClick={() => this.deleteBook(book._id)} />
      //               </ListItem>
      //             );
      //           })}
      //         </List>
      //       ) : (
      //         <h3>No Results to Display</h3>
      //       )}
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default Profile;
