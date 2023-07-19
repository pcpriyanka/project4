import React, { Suspense } from "react";
import Comments from "../comments/Comments";
import Crud from "../crud/Crud";
import Demo from "../demo/Demo";
import Greet from "../greet/Greet";
import Products from "../products/Products";
import Users from "../users/Users";
import Home from "../home/Home";
import AboutUs from "../aboutus/AboutUs";
import NotFound from "../notfound/NotFound";
import "./center.css";
import { Route, Routes } from "react-router";
import ProductDetails from "../productdetails/ProductDetails";
// const AboutUs = React.lazy(() => import("../aboutus/AboutUs"));

export default function Center(props) {
  return (
    <div className="center">
      {/* <Comments/> */}
      {/* <Users /> */}
      {/* <Demo /> */}
      {/* <Products /> */}
      {/* <Crud /> */}
      {/* <Greet name={"sanjay"} msg={"good morning"}></Greet>
      <Greet name={"asutosh"} msg={"good evening"}></Greet>
      <Greet name={"dhiraj"}></Greet> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
