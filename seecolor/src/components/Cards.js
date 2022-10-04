import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Here is placeholder text for the usual official legal-ese stuff that you normally see at the bottom of websites:
            blah blah blah
        </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;