import React from 'react';
import breakfast from '../icons/breakfast.png';
import lunch from '../icons/lunch.png';
import shake from '../icons/shake.jpg';
import { ExternalFuncion } from '../interfaces/interfaces';


const Title: React.FC<ExternalFuncion> = ( {breakfastHandle, lunchHandle, shakeHandle}) =>  {
  return (
    <section className='headContainer'>
        <div className='headTitle'>Title</div>
        <div className='headImages'>
            <img onClick={breakfastHandle} src={breakfast} alt="breakfast" />
            <img onClick={lunchHandle} src={lunch} alt="lunch" />
            <img onClick={shakeHandle} src={shake} alt="shakes" />
        </div>
    </section>
    
  )
}

export default Title