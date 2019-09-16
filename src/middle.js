import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", backgroundImage:'none', minHeight:'0px' }}>
        <MDBCardImage className="img-fluid" src={props.src} waves />
        <MDBCardBody style={{ backgroundImage:'none', minHeight:'0px' }}>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
           {props.text}
          </MDBCardText>
          <MDBBtn href="#">{props.buttone}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}



export default CardExample;