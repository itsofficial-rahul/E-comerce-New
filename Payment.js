import StripeCheckout from "react-stripe-checkout";
import React from "react";

import { useDispatch } from "react-redux";
import { cartDataDelete, OrderDataACtion } from "./redux/action.js";
import { useNavigate } from "react-router-dom";

function Payment({ price, item, add }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleToken(token, addresses) {
    if (token) {
      dispatch(cartDataDelete(item));
      dispatch(OrderDataACtion(item, add));
      navigate("/oders");
    }
    console.log(token, addresses);
  }
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51Ko4bKSBftn7azzBqpUT5ZaeS5odtaKlWNvspX6Sz6ZqOy67dAxm7gwd4NSlZdozMoUqZnHICJssoxAM6Ywue7JX00oK6HDKje"
        token={handleToken}
        amount={price}
        name="rahul"
        item={item}
        add={add}
      ></StripeCheckout>
    </div>
  );
}

export default Payment;
