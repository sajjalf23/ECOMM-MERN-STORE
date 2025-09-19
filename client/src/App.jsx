import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Login from "./Pages/Login";
import Placeorder from "./Pages/Placeorder";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Order from "./Pages/Order";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Searchbar from "./Components/Searchbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Searchbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/placeorder" element={<Placeorder />} />
      </Routes>

      <Footer />

      {/* Toast container should be outside your main layout */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;

