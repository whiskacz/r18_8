import React from 'react';
import breakfast from '../icons/breakfast.png';
import lunch from '../icons/lunch.png';
import shake from '../icons/shake.jpg'

function Title() {
  return (
    <section className='headContainer'>
        <div className='headTitle'>Title</div>
        <div className='headImages'>
            <img src={breakfast} alt="breakfast" />
            <img src={lunch} alt="lunch" />
            <img src={shake} alt="shake" />
        </div>
    </section>
    
  )
}

export default Title