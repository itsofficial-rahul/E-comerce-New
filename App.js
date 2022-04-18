import "./App.css";

import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Product from "./Product";
import Products from "./Products";
import Cart from "./Component/Cart";
import OrderHistory from "./Component/OrderHistory";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "./Signup";
import { UserAuthContextProvider } from "./UserAuthContext";

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                {" "}
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/Allproduct"
            element={
              <ProtectedRoute>
                <Product></Product>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/products/:id"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart></Cart>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/oders"
            element={
              <ProtectedRoute>
                <OrderHistory></OrderHistory>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
