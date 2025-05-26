import React from 'react';

import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Products = () => {

      const [product, setproduct] = useState([]);


  const FetchProducts = async () => {
    const result = await axios.get(`http://localhost:5000/api/getproducts`);
    console.log(result.data);

    setproduct(result.data.data);
  };


  useEffect(() => {
    FetchProducts();
  }, []);

  return (
  <div className='container my-4'>
         <div className='row'>
{product.map((item,index)=>
{
    return(
     
   
        <div className='col-3 my-4 p-4'>
            <div class="card" style={{width: "18rem",height:"400px",padding:"20px"}}>
  <img src={item.image} class="card-img-top" alt="..." height={200} width={100}/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.price}</p>
  <NavLink to={`products/productDetails/${item.id}`}    style={{
          
                    backgroundColor: "black",
                    border: "none",
                    cursor: "pointer",
                    textDecoration:"none",
                    color:"white",
                    borderRadius:"10px",
                    padding:"10px"
                  }} class="btn btn-primary">Show details</NavLink>
  </div>
</div>
        </div>


    )
})}

    </div>
        </div>   
  )
}

export default Products
