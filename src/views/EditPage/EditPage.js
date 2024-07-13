import React, { useEffect } from "react";
import "./EditPage.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function EditPage() {

  const {id} = useParams()

  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [review, setReview] = useState("");
  const [description, setDercription] = useState("");

  const updateShoes = async () => {


    const response = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/shoes/${id}`,
      {
        brand: brand,
        price: price,
        color: color,
        image: image,
        gender: gender,
        review: review,
        description: description,
      })

           toast.success(response.data.message)
  }




    const loadShoes= async (id)=>{

      if(!id){
        return
      }

    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/shoes/${id}`)

    const {brand,
      price,
      color,
      image,
      gender,
      review,
      description} = response.data.data


      setBrand(brand)
      setPrice(price)
      setColor(color)
      setImage(image)
      setGender(gender)
      setReview(review)
      setDercription(description)
  
  }




  useEffect(()=>{
    loadShoes(id)
  },[id])



  return (
    <div>
      <div>
        <h1>Update Shoes Here</h1>

        <form className="input-container">
          <input
            type="text"
            placeholder="Add Brand Here"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="input-brand"
          />

          <input
            type="text"
            placeholder="Add Price Here"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-brand"
          />

          <input
            type="text"
            placeholder="Add Color Here"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="input-brand"
          />

          <img className="url-image" src={image} alt="url-image" />

          <input
            type="text"
            placeholder="Add Image Here"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="input-brand"
          />

          <input
            type="text"
            placeholder="Add Gender Here"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-brand"
          />

          <input
            type="text"
            placeholder="Add Review Here"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="input-brand"
          />

          <input
            type="text"
            placeholder="Add Description Here"
            value={description}
            onChange={(e) => setDercription(e.target.value)}
            className="input-brand"
          />

          <button className="add-btn" onClick={updateShoes} type="button">
            Update
          </button>
        </form>
        <Toaster />

        <Link to="/">
          <img
            className="home-img"
            src="https://cdn-icons-png.flaticon.com/128/9385/9385212.png"
            alt="home-img"
          />
        </Link>

        <Toaster/>
      </div>
    </div>
  );
}

export default EditPage;
