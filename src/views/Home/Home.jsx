import React, { useState, useEffect } from 'react'
import "./Home.css"
import ShoesCard from '../../components/ShoesCard/ShoesCard'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import AddShoesPage from '../AddShoesPage/AddShoesPage'


function Home() {

  const [shoes, setShoes] = useState([])

  const shoesArray = async ()=>{

    toast.loading("Shoes Page Loading.......")

    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/shoes`)

    toast.dismiss()

    toast.success("Shoes Loded Successfully")

    setShoes(response.data.data)

  }

 useEffect(()=>{

  shoesArray()

  }, [])
  


  return (
    <>
      <div>

        <h1>Shoes</h1>

        <div className='main-container'>
          {
            shoes.map((shoes, i) => {

              const {
                _id,
                brand,
                price,
                color,
                image,
                gender,
                review,
                description
              } = shoes

              return(
                <ShoesCard 
                key={i}
                _id={_id}
                brand={brand}
                price={price}
                color={color}
                image={image}
                gender={gender}
                review={review}
                description={description}/>
              )
            })
          }
        </div>

        <Link to="/add">
        <img className='add-img' src="https://cdn-icons-png.flaticon.com/128/8191/8191584.png" alt="add-img" /></Link>

      </div>
      <Toaster/>
    </>
  )
}

export default Home