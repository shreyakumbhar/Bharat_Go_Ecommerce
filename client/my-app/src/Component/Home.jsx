import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [product, setproduct] = useState([]);

  const FetchProducts = async () => {
    const result = await axios.get(`http://localhost:5000/api/getproducts`);
    console.log(result.data);

    setproduct(result.data.data);
  };
  console.log("products", product);
  const randomFive = product.sort(() => 0.5 - Math.random()).slice(0, 5);

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div className="container my-4">


            <section>
            <div className="container">
              <div
                id="myCarousel"
                class="carousel slide p-rea"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div class="carousel-inner">
                  <div
                    class="carousel-item active"
                    style={{ position: "relative" }}
                  >
                    <img
                      src="Images/image.png"
                      class="d-block w-100"
                      alt="First Image"
                    />
                   
                  </div>
                  <div class="carousel-item">
                    <img
                      src="Images/image1.png"
                      class="d-block w-100"
                      alt="Second Image"
                    />
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
      <h3> Popular Products</h3>
      <div className="row">
        {randomFive.map((item, index) => {
          return (
            <div className="col-3 my-4">
              <div
                class="card"
                style={{ width: "18rem", height: "400px", padding: "20px" }}
              >
                <img
                  src={item.image}
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={100}
                />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.price}</p>
                  <NavLink
                    to={`productDetails/${item.id}`}
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    class="btn btn-primary"
                  >
                    Show details
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}

       


      </div>

        <NavLink
                    to={"products"}
                    style={{
                      backgroundColor: "green",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "white",
                      borderRadius: "10px",
                      padding: "10px",
                      width:"130px"
                    }}
                    class="btn btn-primary"
                  >
                    More Products
                  </NavLink>
    </div>
  );
};

export default Home;
