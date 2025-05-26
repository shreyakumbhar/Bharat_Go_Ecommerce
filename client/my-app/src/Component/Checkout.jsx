import React from "react";
import "../CSS/Home.css";
import Box from "@mui/material/Box";
import AddressModal from "./AddressModal";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { NavLink } from "react-router-dom";



const Checkout = () => {
  const { cartItems, grandTotal } = useContext(ProductContext);
  const [addressData, setAddressData] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    Zip_code: " ",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 600,
    bgcolor: "background.paper",

    p: 4,
  };

  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState("");

  const validateCardNumber = (number) => {
    const cleaned = number.replace(/\s+/g, ""); // remove spaces

    if (!/^\d+$/.test(cleaned)) {
      return "Card number must contain only numbers.";
    }

    if (cleaned.length !== 16) {
      return "Card number must be exactly 16 digits.";
    }

    return "";
  };

  const handleChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // remove non-digits
    setCardNumber(input);
    setError(validateCardNumber(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(addressData); // Save the data to display in the card
    setAddressData({
      name: "",
      address1: "",
      address2: "",
      city: "",
      Zip_code: " ",
    }); 
    setOpen(false);
  };

  console.log("addressData", addressData);

  return (
    <>

      <div className="container checkout my-4">
    
        <div className="row">
          <div className="col-7">
            <Accordion defaultExpanded>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <span style={{display:"flex",justifyContent:"space-between",width:"100%"}} >
                  <span style={{ fontSize: "20px", fontWeight: "600" }}>
                    <i class="bi bi-geo-alt"></i>
                    <label>Add delivery address</label>
                  </span>
                  <button  className="address" onClick={handleOpen}>
                    Add new address
                  </button>
                </span>
              </AccordionSummary>
              <AccordionDetails>
              
      {submittedData && (
        <div style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          maxWidth: "300px"
        }}>
          <h5>Address1</h5>
          <p> {submittedData.name}</p>
          <p> {submittedData.address1}</p>
          <p> {submittedData.address1}</p>
          <p> {submittedData.city}</p>
          <p> {submittedData.Zip_code}</p>
        </div>
      )}
              </AccordionDetails>
            </Accordion>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <AddressModal
                  handleClose={setOpen}
                  addressData={addressData}
                  setAddressData={setAddressData}
                  handleSubmit={handleSubmit}
                />
              </Box>
            </Modal>



            <Accordion >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
               <span style={{ fontSize: "20px", fontWeight: "600" }}>
                <i class="bi bi-archive"></i>
                <label>Payment Method</label>
              </span>
              </AccordionSummary>
              <AccordionDetails>

              <div
                className=" p-2"
                style={{ border: "1px solid #DFE2E1", borderRadius: "10px" }}
              >
                <input type="checkbox" />
                <label htmlFor="">Payment with Paypal</label>
                <div style={{ width: "90%" }}>
                  <p htmlFor="cardNumber">Card Number:</p>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={handleChange}
                    maxLength="16"
                    className="form-control"
                    placeholder="Enter 16-digit card number"
                  />
                  {error && <p className="text-red-500 ">{error}</p>}
                </div>
                <div className="row">
                  <div style={{ width: "40%" }}>
                    <p>Name on card</p>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div style={{ width: "30%" }}>
                    <p>Expiry Date</p>
                    <input
                      type="date"
                      placeholder="Expiry Date"
                      className="form-control"
                    />
                  </div>
                  <div style={{ width: "20%" }}>
                    <p>CVV</p>
                    <input
                      type="number"
                      placeholder="xxx"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div
                className=" p-2 my-2"
                style={{ border: "1px solid #DFE2E1", borderRadius: "10px" }}
              >
                <input type="checkbox" />
                <label htmlFor="">Cash on Delivery</label>
                <p>Pay with cash when your order is delivered.</p>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-white mx-2  px-4 fw-bold cancel ">
                  Prev
                </button>

                <button
                  className="btn btn-success px-4 fw-bold"
                  style={{ backgroundColor: "#0AAD0A" }}
                >
                  Place Order
                </button>
              </div>
              
      </AccordionDetails>
            </Accordion>

          
          </div>
          <div className="col-5">
            <div
              className="p-2"
              style={{ border: "1px solid #DFE2E1", borderRadius: "10px" }}
            >
              <h4 className="text-center fw-bold">Order Details</h4>
              <hr />

              {cartItems.map((val, index) => {
                return (
                  <div className="row">
                    <div className="col-3">
                      <img src={val.image} alt="" width={40} height={40} />
                    </div>
                    <div className="col-3">
                      <p>{val.title}</p>
                    </div>
                    <div className="col-3">
                      <p>{val.quantity}</p>
                    </div>
                    <div className="col-3">
                      {" "}
                      <h5 style={{ fontWeight: "bold", marginTop: "20px" }}>
                        <span>
                          <i class="bi bi-currency-dollar"></i>
                          {val.price}
                        </span>
                      </h5>
                    </div>
                    <hr />
                  </div>
                );
              })}
             

              <div className="d-flex justify-content-between fw-bold">
                <p>Grand Total</p>
                <h5>
                  <span>
                    <i class="bi bi-currency-dollar"></i>
                    {grandTotal}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

