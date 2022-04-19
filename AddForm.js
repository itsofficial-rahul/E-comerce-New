import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Component/Navbar";
import Payment from "./Payment";
import Razor from "./Razor";
import "./App.css";

export default function UserForm() {
  const [show, setshow] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productBuy.buyPrdoctDetail);
  const { id, title, price, qty } = product;
  console.log("addFrom me product ", title);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    city: "",
    address: "",
    pin: "",
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setshow(true);
    console.log(contactInfo);
    // setContactInfo({ name: "", city: "", address: "", pin: "" });
  };

  return (
    <div className="form-container">
      <Navbar></Navbar>
      <h1 className="lead">Shiping Address </h1>
      <form onSubmit={handleSubmit}>
        <div>
          {show ? (
            <div>
              <Payment
                price={qty * price}
                item={product}
                add={contactInfo}
              ></Payment>
              <Razor
                price={qty * price}
                item={product}
                add={contactInfo}
              ></Razor>
            </div>
          ) : (
            <div className="InputFrom">
              {" "}
              <div>
                <input
                  className="InputFromName"
                  required
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={contactInfo.name}
                />
              </div>
              <div>
                <input
                  className="InputFromCity"
                  required
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="city"
                  placeholder="city"
                  value={contactInfo.city}
                />
              </div>
              <div>
                <input
                  required
                  className="InputFromaddress"
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="address"
                  placeholder="address"
                  value={contactInfo.address}
                />
              </div>
              <div>
                <input
                  className="InputFromPin"
                  required
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="pin"
                  placeholder="pin Code"
                  maxLength={0 - 6}
                  value={contactInfo.pin}
                />
              </div>
              <div>
                <button className="btn">Submit Contact</button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
