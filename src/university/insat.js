import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead ,MDBBtn} from 'mdbreact';
import Navbar from '../navbar/navbar';
import { Link } from "react-router-dom";

const INSATComponent = ()=>{
    return(<div>
        
        <Navbar/>
        <br/><br/><br/><br/><br/>
        <h2>Welcome to INSAT , here you can find all the courses on the table,<br/>
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
          <td>Algebre</td>
          <td><a href='https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'>download PDF</a></td>
          <td>10 Dt</td>
          <td>Algebre</td>
          <td>5 Dt</td>
        </tr>
        <tr>
          <td>First</td>
          <td>Chimie</td>
          <td><a href='https://www.emse.fr/~moutte/istp/Chimi_Istp_Speech1.pdf'>download PDF</a></td>
          <td>10 Dt</td>
          <td>Chimie</td>
          <td>5 Dt</td>
        </tr>
        <tr>
          <td>Second</td>
          <td>Mecanique</td>
          <td><a href='http://app-1496136094.000webhostapp.com/docs/mecanique_generale.pdf'>download PDF</a></td>
          <td>10 Dt </td>
          <td>Chimie generale</td>
          <td>5 Dt</td>
        </tr>
        <tr>
          <td>Second</td>
          <td>Electrique</td>
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
export default INSATComponent