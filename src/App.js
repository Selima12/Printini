import React from 'react';
import {BrowserRouter ,Route}from 'react-router-dom';
import AppPage from './home/home';
import FormPage from './log in/login';
import Speciality from './specialities';
import SubmitComponent from './upload';
import  CreatePage from './create';
import ModalPage from "./modal.js";
import IHECComponent from "./university/ihec";
import INSATComponent from "./university/insat";


import './App.css';

function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
     
<Route path='/' exact component={AppPage}/>
<Route path='/login'  component={FormPage}/>
<Route path='/specialities'  component={Speciality}/>
<Route path='/ihec'  component={IHECComponent}/>
<Route path='/insat'  component={INSATComponent}/>

<Route path='/upload'  component={SubmitComponent}/>
<Route path='/create'  component={CreatePage}/>
<Route path='/modal'  component={ModalPage}/>

    </BrowserRouter>



    
    </div>
  );
}

export default App;
