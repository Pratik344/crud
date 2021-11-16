import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Services/Action/addToCartAction";
import { useState } from "react";
export default function NavBar() {
  const state = useSelector((state) => state.profileName);
  const cart = useSelector((cart)=>cart.addToCart)  
  console.log('cart: ', cart);
  
  console.log("state: ", state);

  const logout = () => {
    localStorage.clear();
    console.log(localStorage);
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light navbar-fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productList">
                  Product List
                </Link>
              </li>

              
            </ul>
            <form className="d-flex">
              <Link className="navbar-brand" to="/Profile">
                {state.profileData}
              </Link>
              <Link to="/cart">
              <div>
                <div className="add-to-cart">
                  <span className="cart-count">{cart.length}</span>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                </div>
              </div>
              </Link>
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={logout}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
