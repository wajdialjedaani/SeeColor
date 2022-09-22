import React from 'react'
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import video from '../Videos/synthwave.mp4'

function MainSection() {
    // console.log('test main section');
    return (
    <div className='main-container'>
        
            <video src={video} type="video/mp4" autoPlay loop muted />
            <h1>HOW ACCESSIBLE IS YOUR COLOR?</h1>
            <p>Let's find out.</p>
            <div className='main-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    Get Started
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    The Project Guidelines <i className='far fa-play-circle' />
                </Button>
            
        </div>
    </div>
  );
}

export default MainSection;