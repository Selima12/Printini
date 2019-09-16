import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {Link} from "react-router-dom";

class ModalPage extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Register</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Congratulations</MDBModalHeader>
        <MDBModalBody>
          Your account have been successfully created , continue in order to discover our programs .
        </MDBModalBody>
        <MDBModalFooter>
          
        <Link to="/specialities"><MDBBtn color="primary">Continue</MDBBtn></Link>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;
