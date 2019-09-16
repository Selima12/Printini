import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4" style={{backgroundColor:'black'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" style ={{color:'#3C833C',fontSize:'30px'}}>
            
            <p>
              Here you can find our contact
            </p>
          </MDBCol>
          <MDBCol md="6" style ={{color:'white',fontSize:'20px'}} >
            <h5 className="title">Printini</h5>
            <ul>
              <p>Phone Number : 77-777-777</p>
              <p>Email : <a>Printini@gmail.com</a></p>
              <p>Facebook : <a>Printini</a></p>
              <p> Instagram :<a> We Are Printini</a></p>

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
