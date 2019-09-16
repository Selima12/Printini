import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Navbar from "./navbar/navbar";
import {Link} from "react-router-dom";
import ModalPage from './modal'
import "./create.css";


const CreatePage = () => {
  return (
    <div className="Top">
    <MDBContainer>
      <MDBRow>
        
        <MDBCol md="6">
          <center>
            <Navbar/>

            <br/><br/><br/> <br/> <br/><br/>

            
            <div>
              
          <form>
              

            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                icon="user"
                label="Your name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                icon="envelope"
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                
                icon="exclamation-triangle"

                label="Confirm your email"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                
                icon="lock"
                label="Your password"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
            <ModalPage />
            </div>
            
          </form>
          
          
</div>
</center>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default CreatePage;