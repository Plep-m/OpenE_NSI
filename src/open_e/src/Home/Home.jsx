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
    <body className="cnt-home">
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
            
            
            <div class="cnt-block">
              <ul class="list-unstyled list-inline">
                <li class="dropdown dropdown-small"> <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span class="value">USD </span><b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">USD</a></li>
                    <li><a href="#">INR</a></li>
                    <li><a href="#">GBP</a></li>
                  </ul>
                </li>
                <li class="dropdown dropdown-small"> <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span class="value">English </span><b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">English</a></li>
                    <li><a href="#">French</a></li>
                    <li><a href="#">German</a></li>
                  </ul>
                </li>
              </ul>
              
            </div>
            
            <div class="clearfix"></div>
          </div>
          
        </div>
        
      </div>
    </header>
  </body>
</>
  );
}