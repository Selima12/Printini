import React from "react";
import Navbar from '../navbar/navbar'
import {Link} from "react-router-dom";



import "./log in.css";


import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
import "./log in.css";

const FormPage = () => {
  return (<>
  <div className='Top'>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'0 0 0 30%'}}>
  <Navbar/>
      
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard style={{marginTop : 150}}>
            <MDBCardBody>
              <MDBCardHeader  style={{color:'white' , background:'#388e3c'}}>
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Your email
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
              />

              <div className="text-center mt-4">
                <Link to="/specialities"><MDBBtn color="#11B53E" className="mb-3" type="submit">
                  Login
                </MDBBtn></Link>
              </div>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <Link to="/create" >Not a member? Sign Up</Link>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </div>
    </> );
};

export default FormPage;