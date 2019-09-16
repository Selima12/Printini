import React from "react";
import { MDBCol } from "mdbreact";
import './searchbar.css'

const SearchPage = (props) => {
  return (
   <center>
    <MDBCol md="6" className="Ibra">
      <div  className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" value={props.value}  onChange={props.onChange} type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
    </center>
  );
}

export default SearchPage;