import React from 'react'
import '../App.css';
// import { Button } from './Button';
import './Background.css';
import image from "https://www.salesforce.org/wp-content/uploads/2017/02/University-of-North-Texas-Campus.jpg";

function Background() {
    // console.log('test main section');
    return (
    <div className='background-container'>
            <image src={image} />
            <h1>What our project is about:</h1>
            <h2>The project guidelines</h2>
            
            
    </div>
    
  );
}

export default Background;
