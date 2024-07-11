import React, { useState } from "react";
import "./AddShoesPage.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function AddShoesPage() {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [review, setReview] = useState("");
  const [description, setDercription] = useState("");

  const addShoes = async ()=>{

    if(!brand || !price || !color || !image || !gender || !review || !description){
      toast.error("Please add all data")
    }

    toast.loading("New Shoes Adding.........")
     
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/shoes`,{
      brand:brand,
      price:price,
      color:color,
      image:image,
      gender:gender,
      review:review,
      description:description
    })

    toast.dismiss()
    toast.success(response.data.message)

    setBrand("")
    setPrice("")
    setColor("")
    setImage("")
    setGender("")
    setReview("")
    setDercription("")

  }

  return (
    <div>
      <h1>Add Shoes Here</h1>

      <form className="input-container">
        <input
          type="text"
          placeholder="Add Brand Here"
          value={brand}
          onChange={(e)=>setBrand(e.target.value)}
          className="input-brand"
        />

        <input
          type="text"
          placeholder="Add Price Here"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          className="input-brand"
        />

        <input
          type="text"
          placeholder="Add Color Here"
          value={color}
          onChange={(e)=>setColor(e.target.value)}
          className="input-brand"
        />

        <input
          type="text"
          placeholder="Add Brand Here"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          className="input-brand"
        />

        <input
          type="text"
          placeholder="Add Gender Here"
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
          className="input-brand"
        />

        <input
          type="text"
          placeholder="Add Review Here"
          value={review}
          onChange={(e)=>setReview(e.target.value)}
          className="input-brand"
        />

        <input
          type="text"
          placeholder="Add Description Here"
          value={description}
          onChange={(e)=>setDercription(e.target.value)}
          className="input-brand"
        />

        <button className="add-btn" onClick={addShoes} type="button">ADD</button>
      </form>
      <Toaster/>
    </div>
  );
}

export default AddShoesPage;
