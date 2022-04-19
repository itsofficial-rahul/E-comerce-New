import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export default function OrderHistory() {
  const state = useSelector((state) => state.orderdataReducer.cartArray);
  console.log(state);

  return (
    <div>
      <Navbar></Navbar>
      {state.map((item) => {
        const { title, qty, image, price, time, name, city, address, pin } =
          item;
        return (
          <>
            <div className=" d-flex justify-content-center mb-3 mt-3  pb-1 ">
              <div className="col-md-2 mt-2">
                <img src={image} width="180px" height="180px"></img>
              </div>
              <div className="col-md-4 mt-3 ">
                <h3 className="lead">{title}</h3>
                <p className="lead fw-bold">
                  {qty}X{price}=₹ {qty * price}
                </p>
                Purchasing date <h6>{time}</h6>
                <h5 className="lead">Name : {name} </h5>
                <h5 className="lead">City : {city} </h5>
                <h5 className="lead">Address :{address} </h5>
                <h5 className="lead">ZIP CODE : {pin} </h5>
                <h6 className="lead">Your Item is on the way</h6>
              </div>
              <hr className="mt-3"></hr>
            </div>
          </>
        );
      })}
    </div>
  );
}
