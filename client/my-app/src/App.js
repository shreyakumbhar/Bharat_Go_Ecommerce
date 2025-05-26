import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './Component/Home';
import Cart from './Component/Cart';
import Products from './Component/Products';
import ProductDetails from './Component/ProductDetails';
import Checkout from './Component/Checkout';
import Navbar from './Component/Navbar';
import { ProductProvider } from './Component/ProductContext';

function App() {
  return (
    <div >
          <ProductProvider >
      <Router>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
  <Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
    <Route path="/products/productDetails/:id" element={<ProductDetails/>}></Route>

  <Route path="/cart/checkout" element={<Checkout/>}></Route>

  

 

</Routes>
</Router>
    </ProductProvider>  
    </div>
  );
}

export default App;
