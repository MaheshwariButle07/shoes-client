import { Link } from "react-router-dom"
import React from 'react'
import "./ShoesCard.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function ShoesCard({ _id, brand, price, color, image, gender, review, description, LoadShoes }) {

  const deleteShoes = async (shoesId)=>{
     
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/shoes/${shoesId}`)

    toast.success(response.data.message)

    LoadShoes()
  }

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

      <div className='btn-container'>

        <Link to={`/edit/${_id}`}>
        <button className='btn'>Edit</button>
        </Link>


        <button className='btn' onClick={()=>{deleteShoes(_id)}}>Delete</button>
      </div>
     <Toaster/>
    </div>
  )
}

export default ShoesCard