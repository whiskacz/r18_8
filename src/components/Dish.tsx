import React from 'react'
import { DataInterface } from '../interfaces/interfaces'

function Dish({ title, category, price, img, desc }: DataInterface) {
  return (
    <li className='dishContainer'>
        <img className='dishImage' src={img} alt={title} />
        <section className='dishTitleContainer'>
            <div className='dishTitle'>{title}</div>
            <div className='dishPrice'>{price}</div>
        </section>
        <div className='desc'>
            {desc}
        </div>
    </li>
  )
}

export default Dish