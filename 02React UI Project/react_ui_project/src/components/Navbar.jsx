import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RiFilter3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    
    <>
      <div class="nav_bar">
      
      <div class="logo">React UI</div>
      <div class="search">
        <div class="left"><IoSearch/>Search here...</div>
        <div class="filter"><RiFilter3Line />Filters</div>
      </div>

      <div class="seller">Become a Seller</div>
      
      </div>
      
     </>
  )
}

export default Navbar
