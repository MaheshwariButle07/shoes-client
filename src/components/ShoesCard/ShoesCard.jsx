import React from 'react'
import "./ShoesCard.css"

function ShoesCard({ _id, brand, price, color, image, gender, review, description }) {
  return (
    <div className='shoes-container'>
      <img className='shoes-img' src={image} alt="shoes-img" />
      <h2 className='brand'>{brand}</h2>
      
      <div className='info-container'>
      <div className='p-c-container'>
        <p className='price'>Price: {price}</p>
        <p className='color'>Color: {color}</p>
      </div>

      <div className='p-c-container'>
        <p className='price'>Gender: {gender}</p>
        <p className='color'>Review: {review}</p>
      </div>
      </div>

      <p>{description}</p>

    </div>
  )
}

export default ShoesCard