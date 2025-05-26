import React from 'react';
// import "../CSS/Modal.css";


const AddressModal = (props) => {


  const dataHandler = (e) => {
  

    console.log(e.target.value)
    console.log(e.target.name)
    const { name, value } = e.target
    props.setAddressData({ ...props.addressData, [name]: value })


  }

  console.log(props.addressData);



  return (
    <div className='p-2'>
      <div className='d-flex justify-content-between'>
 <h5 style={{fontWeight:"bold"}}>New Shipping Address</h5>

 <i class="bi bi-x-lg"  onClick={()=>{props.handleClose(false)}}></i>

      </div>
      <p>Add new shipping address for your order delivery.</p>
      <form action="" onSubmit={props.handleSubmit}>
        <input type="text" className="form-control"  placeholder='First Name' id='name' name='name'  onChange={(e) => dataHandler(e)} />

        <input type="text"  className="form-control" placeholder='Address Line 1' id='address1' name='address1' onChange={(e) => dataHandler(e)}/>
        <input type="text" className="form-control" placeholder='Address Line 2'  id='address2' name='address2' onChange={(e) => dataHandler(e)}/>
        <input type="text"  className="form-control" placeholder='City' id='city' name='city' onChange={(e) => dataHandler(e)}/>
        <input type="Number"  className="form-control" placeholder='Zip Code' id='Zip_code' name='Zip_code' onChange={(e) => dataHandler(e)}/>

        <div className="d-flex justify-content-end">
              <button className='btn btn-white mx-2  px-4 fw-bold cancel ' >Cancel</button>
        
              <button className='btn btn-success px-4 fw-bold' style={{backgroundColor:"#0AAD0A"}}>Save Address</button>
      


            </div>


      </form>
    </div>
  )
}

export default AddressModal
