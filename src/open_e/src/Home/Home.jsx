import React from 'react';
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.css";
import "./assets/css/blue.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/owl.transitions.css";
import "./assets/css/animate.min.css";
import "./assets/css/rateit.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/font-awesome.css";

export default function Home() {
  return(
    <>
    <body class="cnt-home">
        <header class="header-style-1">
          <div class="top-bar animate-dropdown">
          <div class="container">
          <div class="header-top-inner">
          <div class="cnt-account">
          <ul class="list-unstyled">
            <li><a href="#"><i class="icon fa fa-user"></i>My Account</a></li>
            <li><a href="#"><i class="icon fa fa-heart"></i>Wishlist</a></li>
            <li><a href="#"><i class="icon fa fa-shopping-cart"></i>My Cart</a></li>
            <li><a href="#"><i class="icon fa fa-check"></i>Checkout</a></li>
            <li><a href="#"><i class="icon fa fa-lock"></i>Login</a></li>
          </ul>
        </div>
        </div>
        </div>
        </div>
        </header>
    </body>
    </>
  );
}