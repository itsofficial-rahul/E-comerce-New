import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useUserAuth } from "../UserAuthContext";
function Navbar() {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shedow-sm ">
        <div className="container">
          <h3 className="navbar-brand fw-bold fs-4">
            Shopify hellow, {user && user.email}
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/Allproduct">
                  All Products
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/cart" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart({state.length}
                )
              </NavLink>
              <NavLink to="/oders" className="btn btn-outline-dark  ms-2">
                My Orders
              </NavLink>
              <button
                className="btn btn-outline-dark m-2"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
