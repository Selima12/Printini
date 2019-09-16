import React from 'react';
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead ,MDBBtn} from 'mdbreact';
import Navbar from '../navbar/navbar';

const IHECComponent = ()=>{
    return(<div>
        <Navbar/>
        <br/><br/><br/>
        
        <h2>Welcome to IHEC-Carthage , here you can find all the courses on the table,<br/>
            you can also help others students by uploading soe other courses.
        </h2>
        <br/><br/><br/>
        <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>semester</th>
          <th>courses</th>
          <th>PDF</th>
          <th>Price</th>
          <th>Exams</th>
          <th>Price</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>First</td>
          <td>Finance</td>
          <td><a href='http://www.iep-strasbourg.fr/fileadmin/upload/IEP/ETUDIER_A_L_IEP/Le_Diplome/2eme_annee/Plan_du_cours_de_finance_internationale.pdf'>download PDF</a></td>
          <td>10 Dt</td>
          <td>Finance</td>
          <td>5 Dt</td>
        </tr>
        <tr>
          <td>First</td>
          <td>Marketing</td>
          <td><a href='http://fsjes.usmba.ac.ma/cours/benchekroun/Intro-generale-marketing.pdf'>download PDF</a></td>
          <td>10 Dt</td>
          <td>Marketing</td>
          <td>5 Dt</td>
        </tr>
        <tr>
          <td>Second</td>
          <td>Management</td>
          <td><a href='https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'>download PDF</a></td>
          <td>10 Dt </td>
          <td>Management</td>
          <td>5 Dt</td>
        </tr>
        <tr>
          <td>Second</td>
          <td>Entrepreneuriat</td>
          <td><a href='https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'>download PDF</a></td>
          <td>10 Dt </td>
          <td>Entrepreneuriat</td>
          <td>5 Dt</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    <br/><br/><br/>
    <Link to="/upload"><MDBBtn color="deep-orange">Upload a file </MDBBtn></Link>


    </div>)
   


}
export default IHECComponent