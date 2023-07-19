import React from "react";
import Product from "../product/Product";
import products from "./products.json";

export default function Products() {
  return (
    <>
      <h1 className="text-center">Product List From a JSON File</h1>
      <hr />

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product myproduct={product}></Product>
          ))}
        </div>
      </div>
    </>
  );
}
