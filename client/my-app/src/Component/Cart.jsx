
import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";

const Cart = (props) => {
  const [productsData, setProductsData] = useState([]);

 const { setCartItems ,setGrandTotal,setSelectedId} = useContext(ProductContext);
    const { selectedId } = useContext(ProductContext);


useEffect(() => {
  if (selectedId.length > 0) {
    Promise.all(
      selectedId.map((id) =>
        fetch(`http://localhost:5000/api/getprodudctsDetails/${id}`).then((res) => res.json())
      )
    )
      .then((responses) => {
        const products = responses.map(res => res.data[0]); // adjust if needed
        setProductsData(products);
      })
      .catch((err) => console.error("Error fetching cart products:", err));
  }
}, [selectedId]);

const [quantities, setQuantities] = useState({});

const increment = (id) => {
  setQuantities(prev => ({
    ...prev,
    [id]: (prev[id] || 0) + 1
  }));
};

const decrement = (id) => {
  setQuantities(prev => ({
    ...prev,
    [id]: Math.max((prev[id] || 0) - 1, 0)
  }));
};
  const handleProceedToCheckout = () => {
  const updatedCart = productsData.map(val => {
    const quantity = quantities[val.id] || 1;
    const totalPrice = quantity * val.price;

    return {
      ...val,
      quantity,
      totalPrice
    };
  });

  const total = updatedCart.reduce((sum, item) => sum + item.totalPrice, 0);
  setCartItems(updatedCart);
  setGrandTotal(total);
};


  const removeFromCart = (id) => {
  // Remove ID from selectedId
  setSelectedId(prev => prev.filter(item => item !== id));

  // Remove from quantities
  setQuantities(prev => {
    const updated = { ...prev };
    delete updated[id];
    return updated;
  });

  // Remove from productsData
  setProductsData(prev => prev.filter(product => product.id !== id));

};

  return (
    <>
      <div className="container">
        <div className="d-flex  justify-content-between p-4">
          <h5>Shop Cart</h5>
          <i class="bi bi-x-lg"></i>
        </div>
        <hr />
        <div className="p-4">
          <div
            className="d-flex p-2 "
            style={{ backgroundColor: "#F8D6D6", borderRadius: "10px" }}
          >
            You’ve got FREE delivery. Start{" "}
            <span style={{ fontWeight: "bold" }}> checkout now!</span>
          </div>

       {productsData.length!==0?productsData.map((val,index)=>
    {
          const quantity = quantities[val.id] || 1;
  const totalPrice = quantity * val.price;
        return(
            <div className="container p-2">
                <div className="row">
           <div className="col-3">
           <img src={val.image} alt=""  height={70} width={70}/>
           </div>
            <div className="col-3">
              <h6>{val.name}</h6>
              <p></p>
              <span>
            
                <i class="bi bi-trash3" style={{ color: "#198754" }}   onClick={() => removeFromCart(val.id)} ></i>Remove
              </span>
            </div>
            <div className="col-3">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-light"
                style={{ border: "1px solid #EBEFEE" }}
                // eslint-disable-next-line no-unused-expressions
                onClick={() => increment(val.id)}
              >
                +
              </button>
              <button
                type="button"
                class="btn btn-light disabled"
                style={{ border: "1px solid #EBEFEE" }}
              >
                {quantities[val.id] || 1}
              </button>
              <button
                type="button"
                class="btn btn-light"
                style={{ border: "1px solid #EBEFEE" }}
            onClick={() => decrement(val.id)}
              >
                -
              </button>
            </div>
            </div>
      <div className="col-3">
      <h4 style={{ fontWeight: "bold", marginTop: "20px" }}>      
        <span><i class="bi bi-currency-dollar"></i>{totalPrice}</span></h4>

      </div>
            </div>
            <hr />
          </div>
          
          
        )
    }):<h4 className="text-center text-danger"> Nothing in Cart</h4>}

<div className="d-flex justify-content-between my-4">
<NavLink
                  type="button"
                  class="btn btn-dark  mx-2 d-flex text-light justify-content-around"
                 to='/'
                  style={{
            
                    backgroundColor: "#099309",
                    border: "none",
                    cursor: "pointer",
                    textDecoration:"none",
                    color:"white",
                    borderRadius:"10px",
                    padding:"10px"
                  }}
                >
                Continue Shopping
                </NavLink>
                <NavLink
                
                to={"checkout"}
                onClick={handleProceedToCheckout}         
                         style={{
          
                    backgroundColor: "black",
                    border: "none",
                    cursor: "pointer",
                    textDecoration:"none",
                    color:"white",
                    borderRadius:"10px",
                    padding:"10px"
                  }}
                >
                Procced To Checkout
                </NavLink>
</div>
            
        </div>
      </div>
    </>
  );
};
export default Cart;
