import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserForm from "../AddForm.js";
import Payment from "../Payment.js";
import Razor from "../Razor.js";
import { addCart, BuyProduct, delCart } from "../redux/action.js";
import Navbar from "./Navbar.js";

function Cart() {
  // <Payment price={qty * price} item={item}></Payment>
  // <Razor price={qty * price} item={item}></Razor>
  const dispatch = useDispatch();
  const product = useSelector((state) => state.handleCart);

  function handleBtn(items) {
    dispatch(addCart(items));
  }
  function handledeletBtn(items) {
    dispatch(delCart(items));
  }

  return (
    <div>
      <Navbar></Navbar>

      {product.length == 0 ? (
        <h1>Your Cart is empty</h1>
      ) : (
        product.map((item) => {
          const { id, image, qty, title, price } = item;
          return (
            <>
              <div className="row">
                <div className="col-md-4 ">
                  <img src={image} width="180px" height="180px"></img>
                </div>
                <div className="col-md-4">
                  <h3>{title}</h3>
                  <p className="lead fw-bold">
                    {qty}X{price}=₹ {qty * price}
                  </p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handledeletBtn(item)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark ml-2"
                    onClick={() => handleBtn(item)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                  <NavLink
                    onClick={() => dispatch(BuyProduct(item))}
                    to="/Adressform"
                    className="btn btn-outline-dark  ms-2"
                  >
                    Buy
                  </NavLink>
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
}

export default Cart;
