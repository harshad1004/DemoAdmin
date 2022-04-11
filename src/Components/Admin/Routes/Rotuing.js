import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../SignUp";
import About from "../About";
import Dashboard from "../Dashboard";
import Sidebar from "../Sidebar";
import Slider from "../Slider";
import Gallery from "../Gallery";
import Contact from "../Contact";
import Navbar from "../Navbar";
import ResetPassword from "../ResetPassword";
import AddSlider from "../AddSlider";
import AddAbout from "../AddAbout";
import AddGallery from "../AddGallery";

const Rotuing = () => {
  return (
    <Routes>
      <Route path="/signup" exact element={<SignUp />}></Route>
      <Route path="/reset" exact element={<ResetPassword />}></Route>
      <Route path="/" exact element={<Dashboard />}></Route>
      <Route path="/contact" exact element={<Contact />}></Route>

      <Route path="/slider" exact element={<Slider />}></Route>
      <Route path="/addslider" element={<AddSlider />}></Route>

      <Route path="/about" exact element={<About />}></Route>
      <Route path="/addabout" exact element={<AddAbout />}></Route>

      <Route path="/gallery" exact element={<Gallery />}></Route>
      <Route path="/addgallery" exact element={<AddGallery />}></Route>

      {/* <Route path="/sidebar" exact element={<Sidebar />}></Route> */}
      <Route path="/navbar" exact element={<Navbar />}></Route>
    </Routes>
  );
};

export default Rotuing;
