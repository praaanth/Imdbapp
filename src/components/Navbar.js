import React from 'react'
import "../styles/navbar.css";

export default function Navbar({ inputValue,setInputValue }) {
  return (
    <div className="navbar">
     <span className="Heading">MOVIE DB</span> 
     <input 
     onChange={(e)=> {
         console.log(e.target.value);
     }}
     placeholder="search..." 

     />
    </div>
  )
}