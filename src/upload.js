import React, { Component } from 'react';

import Navbar from './navbar/navbar';
import "./upload.css";

class SubmitComponent extends Component{
    constructor(props){
    super(props);
        this.state= {
            Image:''
        }
    }
      

    
    onChange(e){
        let files =e.tagert.files;
        let reader =new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=>{
            console.warn("img data" ,e.target.result)
        }


    }
    render(){
        return(
            <div className="Load">
           <Navbar/>
           <br/><br/><br/>
            <div onSubmit={this.onFormSubmit}>
                <h1> We rise by lifting others</h1>

                <br/><br/><br/>
                <h2>Download your file to help other students</h2>
                <br/><br/><br/>
                <input type="file" name="file" onChange={(e)=>this.onChange(e)} />
            </div>
            </div>
        )
    }
}
export default SubmitComponent;

