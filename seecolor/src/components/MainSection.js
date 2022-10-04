import React from 'react'
import '../App.css';
import { Button } from './Button';
import { GetStartedButton } from './GetStartedButton';
import './MainSection.css';
import image from '../videos/synthwave.gif'

function MainSection() {
    // console.log('test main section');
    return (
    <div className='main-container'>
            <img src={image} alt="synthwave background"/>
            <h1>HOW ACCESSIBLE IS YOUR COLOR?</h1>
            <p>Let's find out.</p>
            
            <div className='main-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    The Project Guidelines <i className='far' />
                </Button>
            </div>
            <div className='get-started'>
                <GetStartedButton
                    className='btn-center' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    align-items='center'
                    justify-content='center'>
                    Get Started <br></br>
                </GetStartedButton>
            </div>
    </div>
    
  );
}

export default MainSection;