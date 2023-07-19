import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, createSearchParams } from "react-router-dom";

export default function Product(props) {
  const { title, description, type, price } = props.myproduct;
  const navigate = useNavigate();
  const navigateHandler = (title, price) => {
    navigate({
      pathname: "/productdetails",
      search: `?${createSearchParams({
        title: title,
        price: price,
      })}`,
    });
  };
  return (
    <div className="col-sm-4" key={title}>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{type}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{props.a}</p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => {
              props.a = 15;
            }}
          >
            BUY NOW
          </a>{" "}
          &nbsp;
          <button className="btn btn-secondary">
            <Link to={`/productdetails/${type}`}> View Details</Link>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              navigateHandler(title, price);
            }}
          >
            query param
          </button>
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  myproduct: PropTypes.object,
  a: PropTypes.number,
  flag: PropTypes.bool,
  children: PropTypes.element,
};
