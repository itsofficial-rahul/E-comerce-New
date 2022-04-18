import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { addCart } from "./redux/action.js";

function Products() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const url = `https://fakestoreapi.com/products/${id}`;
  const fetchApi = async () => {
    const data = await fetch(url);
    const data1 = await data.json();
    console.log(data1);
    setproduct(data1);
    setloading(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400}></Skeleton>
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300}></Skeleton>

          <Skeleton height={50} width={75}></Skeleton>
        </div>
      </>
    );
  };
  const ShowData = () => {
    console.log(product);
    return (
      <>
        <div className="col-md-6  ">
          <img
            src={product.image}
            width="400px"
            height="400px"
            alt={product.title}
          ></img>
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bold ">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">₹ {product.price}</h3>
          <p className="lead"> {product.description}</p>
          <button
            className="btn btn-primary  "
            onClick={() => addProduct(product)}
          >
            Add To Cart
          </button>

          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="container py-5 ">
        <div className="row py-3">
          {loading ? <Loading></Loading> : <ShowData />}
        </div>
      </div>
    </div>
  );
}

export default Products;
