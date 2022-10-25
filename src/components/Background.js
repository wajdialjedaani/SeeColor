import React from 'react'
import '../App.css';
// import { Button } from './Button';
import './Background.css';

function Background() {
    // console.log('test main section');
    return (
    <div className='background-container'>
            <h1>What our project is about:</h1>
            <p>The goal of this project is to provide a solution to an issue with media such as posters, images, and graphics being inaccessible to colour blind people. A team member’s parent and friend are color blind and we were inspired by the demonstrated project on poster accessibility. We decided to improve upon it, providing a quick solution to checking the color blind accessibility to graphics, posters, and other media. </p>
            <p>This is our implementation of a web application where all can upload an image and our application will scan it and report how accessible the image is for different types of color-blindess, based on user testing. Our application will give the image a rating for Monochromacy and the three variations of Dichromacy. It will also explain how to improve the ratings for each, and link to background information on colour blindness. </p>
            
            
    </div>
    
  );
}

export default Background;
