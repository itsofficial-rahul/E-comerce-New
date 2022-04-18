import StripeCheckout from "react-stripe-checkout";
import React from "react";
import { useDispatch } from "react-redux";
import { cartDataDelete, OrderDataACtion } from "./redux/action.js";

function Payment({ price, item }) {
  const dispatch = useDispatch();
  function handleToken(token, addresses) {
    if (token) {
      dispatch(cartDataDelete(item));
      dispatch(OrderDataACtion(item, addresses));
    }
    console.log(token, addresses);
  }
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51Ko4bKSBftn7azzBqpUT5ZaeS5odtaKlWNvspX6Sz6ZqOy67dAxm7gwd4NSlZdozMoUqZnHICJssoxAM6Ywue7JX00oK6HDKje"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={price}
        name="rahul"
        item={item}
      ></StripeCheckout>
    </div>
  );
}

export default Payment;
