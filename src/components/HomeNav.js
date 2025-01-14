import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import "../styles/HomeNav.scss";
import icon from "../images/ate-gangs.png";
import { useNavigate } from "react-router-dom";

export default function HomeNavbar() {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  const getCartItemCountFromServer = () => {
    fetch('http://localhost/serverside/cart/getCartItemCount.php')
      .then(response => response.json())
      .then(data => {
        setCartItemCount(data.cartItemCount);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;
    setCartItemCount(itemCount || storedCartItems.length);
    
    getCartItemCountFromServer();
  }, []);

  const toggleDropdown = () => {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show");
  };

  const logout = () => {
    const confirmation = window.confirm("Are you sure you want to log out?");
    if (!confirmation) {
      return;
    } else {
      localStorage.removeItem("firstname");
      localStorage.removeItem("cartItems");
      localStorage.removeItem('cartItemCount');
      navigate("/");
    }
  };

  return (
    <>
      <nav className="home-navbar">
        <div className="home-image">
          <Link to="/Home">
            <img src={icon} alt="icon" />
          </Link>
        </div>
        <div className="home-navbar-nav">
          <div className="home-navbar-list">
            <div className="dropdown">
              <div className="home-navbar-item" onClick={toggleDropdown}>
                <FaRegUser className="fa-icon" />
                <h4>{localStorage.getItem("firstname")}</h4>
              </div>
              <div className="dropdown-content">

                <a href="/Profile">Profile</a>
  
                <a href="/Help">FAQ</a>
                <a href="#" className="logout-btn" onClick={logout}>
                  Logout
                </a>
              </div>
            </div>
          </div>
          
          <Link to="/Cart" className="home-nav-button">
            <FaShoppingBag className="fa-icon-1" />
            {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount} Item/s</span>}
          </Link>

          </div>
      </nav>
    </>
  );
}
