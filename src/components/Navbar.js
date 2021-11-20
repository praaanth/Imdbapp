import React from 'react'
import "../styles/navbar.css";

export default function Navbar({ inputValue,setInputValue ,search}) {
  return (
    <div className="navbar">
     <span className="Heading">MOVIE DB</span> 
     <input 
     onChange={(e)=> {
         setInputValue(e.target.value);
     }}

     onKeyDown={search}
     placeholder="search..." 

     />
    </div>
  )
}
