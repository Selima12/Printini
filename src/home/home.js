import React from "react";

import {Link} from "react-router-dom";
import FooterPage from '../aboutus';

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
import "./home.css";
import CardExample from '../middle';

const universities=[
  {
    src:'/stydy.jpg',
    title:'Best Scholarships',
    text:'Here you can find the best scholarships',
    buttone:'Click here'

  },
  {
    src:'/scholarship.jpg',
    title:'Newest courses',
    text:'You can find the newest courses in here',
    buttone:'Click here'

  },
  {
    src:'/job offer.jpg',
    title:'Job Offers',
    text:'Find your future job or your part time job here .',
    buttone:'Click here'

  }
]
class AppPage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        
          <div>
          <MDBNavbar
              color="black"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer style={{paddingLeft: '10%'}}>
                <MDBNavbarBrand>
                  <strong className="black-text">Printini</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/" style={{color:'black'}}>Home</MDBNavLink>
                    </MDBNavItem>
                 
                    <MDBNavItem>
                      <MDBNavLink to="/specialities" style={{color:'black'}}>Specialities</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0" s>
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        <MDBView className="view2">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5" style={{color:'#265701'}}>
                      Save your time & money .
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4" style={{color:'black'}}>
                      Printini is a smart and connected platform that will help students
                      to access to whatever they need for their success , such as documents,
                      courses and exams .<br/>
                      We help you through your journey to success.
                      
                    </h6>
                    <Link to="/login"><MDBBtn color="black">Log in</MDBBtn></Link>
                    <Link to="/create"><MDBBtn outline color="grey">
                      Create an account 
                    </MDBBtn></Link>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                   
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        
        <br/> <br/> <br/> 
          <div style={{display:'flex'}}>{universities.map(element=><CardExample buttone={element.buttone}src={element.src} title={element.title} text={element.text}/>)}</div>
          <br/> <br/>
          <FooterPage/>
        
      
      
    </div>
    );
  }
}

export default AppPage;