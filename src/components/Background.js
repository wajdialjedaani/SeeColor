import React from 'react'
import '../App.css';
// import { Button } from './Button';
import './Background.css';
import image from '../images/img-1.jpg';

function Background() {
    // console.log('test main section');
    return (
    <div className='background-container'>
            <image src="https://www.salesforce.org/wp-content/uploads/2017/02/University-of-North-Texas-Campus.jpg" />
            <h1>What our project is about:</h1>
            <h2>The project guidelines</h2>
            
            
    </div>
    
  );
}

export default Background;
