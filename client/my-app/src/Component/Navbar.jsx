import React from 'react';
import { NavLink } from 'react-router-dom';
import Badge from "@mui/material/Badge";
import { useContext } from 'react';
import { ProductContext } from './ProductContext';


const Navbar = () => {
       const { selectedId } = useContext(ProductContext);
    
      const cartItemCount = selectedId.length;
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink class="nav-link active"  style={{textDecoration:"none", color:"black",marginLeft:"20px"}} aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" style={{textDecoration:"none", color:"black",marginLeft:"20px"}} to="products">Products</NavLink>
        </li>
        <li class="nav-item">
     

           <Badge
                badgeContent={cartItemCount}
                color="primary"
                invisible={cartItemCount === 0}
              >
                    <NavLink class="nav-link" style={{textDecoration:"none", color:"black",marginLeft:"20px"}} to="cart">Cart</NavLink>
              </Badge>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
