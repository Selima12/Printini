import React from "react";
import Image from "./image.jpg"

import {Link} from "react-router-dom";
import Navbar from './navbar/navbar'
import { BrowserRouter as Router } from "react-router-dom";
import SearchPage from './component/searchbar';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import CardExample from "./middle"
import { isSwitchCase } from "@babel/types";

const data= [
    {
        
        src:"/ihec.jpg",
        text:'IHEC',
        desc:'Institut Des Hautes etudes commerciales de Carthage',
        buttone:<Link color='white' to='/ihec'>See more courses</Link>
    },
    {
        src:'',
        text:'IHET',
        desc:'Institut Des Hautes etudes de tourisme ',
        buttone:<Link color='white' to='/ihet'>See more courses</Link>
    },
    {
        src:'',
        text:'INSAT',
        desc:"Institut national des sciences appliquées et de technologie",
        buttone:<Link color='white' to='/insat'>See more courses</Link>
    },
    {
        src:'',
        text:'FMT',
        desc:'Faculté de médecine de Tunis',
        buttone:<Link color='white' to='/fmt'>See more courses</Link>
    },
    {
        src:'',
        text:'ENAU',
        desc:"École nationale d'architecture et d'urbanisme",
        buttone:<Link color='white' to='/enau'>See more courses</Link>
    },
    {
        src:'',
        text:'IPEST',
        desc:"Institut préparatoire aux études scientifiques et techniques",
        buttone:<Link color='white' to='/ipest'>See more courses</Link>
    }
  
]

class Speciality extends React.Component {
    state={
        search:''
    }
    onHandleChange(e){
        this.setState({
            search:e.target.value
        })
    }
    render(){
            return(
        <div className="Ibra" > 
            <Navbar />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
<SearchPage value={this.state.search} onChange={(event)=>{this.onHandleChange(event)}}/>
<div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
     {data
        .filter(e=>(this.state.search==="")?e:this.state.search.toLocaleLowerCase()===e.text.toLocaleLowerCase())
        .map(e=><CardExample buttone={e.buttone} title={e.text} text={e.desc}/>)} 
</div>


        </div>
        
    )

    }
   
}
 export default Speciality;