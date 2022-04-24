import React from 'react';

export default function Home() {
  return(
    <>
<body className="cnt-home">

<header className="header-style-1"> 
  
  
  <div className="top-bar animate-dropdown">
    <div className="container">
      <div className="header-top-inner">
        <div className="cnt-account">
          <ul className="list-unstyled">
            <li><a href="#"><i className="icon fa fa-user"></i>My Account</a></li>
            <li><a href="#"><i className="icon fa fa-heart"></i>Wishlist</a></li>
            <li><a href="#"><i className="icon fa fa-shopping-cart"></i>My Cart</a></li>
            <li><a href="#"><i className="icon fa fa-check"></i>Checkout</a></li>
            <li><a href="#"><i className="icon fa fa-lock"></i>Login</a></li>
          </ul>
        </div>
        
        
        <div className="cnt-block">
          <ul className="list-unstyled list-inline">
            <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">USD</a></li>
                <li><a href="#">INR</a></li>
                <li><a href="#">GBP</a></li>
              </ul>
            </li>
            <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">English</a></li>
                <li><a href="#">French</a></li>
                <li><a href="#">German</a></li>
              </ul>
            </li>
          </ul>
          
        </div>
        
        <div className="clearfix"></div>
      </div>
       
    </div>
    
  </div>
   
  
  <div className="main-header">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-3 logo-holder"> 
          
          <div className="logo"> <a href="home.html"> <img src="assets/images/logo.png" alt="logo"/> </a> </div>
          
           </div>
        
        
        <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder"> 
          
          
          <div className="search-area">
            <form>
              <div className="control-group">
                <ul className="categories-filter animate-dropdown">
                  <li className="dropdown"> <a className="dropdown-toggle"  data-toggle="dropdown" href="category.html">Categories <b className="caret"></b></a>
                    <ul className="dropdown-menu" role="menu" >
                      <li className="menu-header">Computer</li>
                      <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Clothing</a></li>
                      <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Electronics</a></li>
                      <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Shoes</a></li>
                      <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Watches</a></li>
                    </ul>
                  </li>
                </ul>
                <input className="search-field" placeholder="Search here..." />
                <a className="search-button" href="#" ></a> </div>
            </form>
          </div>
          </div>
        
        
        <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row"> 
          
          
          <div className="dropdown dropdown-cart"> <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
            <div className="items-cart-inner">
              <div className="basket"> <i className="glyphicon glyphicon-shopping-cart"></i> </div>
              <div className="basket-item-count"><span className="count">2</span></div>
              <div className="total-price-basket"> <span className="lbl">cart -</span> <span className="total-price"> <span className="sign">$</span><span className="value">600.00</span> </span> </div>
            </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="cart-item product-summary">
                  <div className="row">
                    <div className="col-xs-4">
                      <div className="image"> <a href="detail.html"><img src="assets/images/cart.jpg" alt=""/></a> </div>
                    </div>
                    <div className="col-xs-7">
                      <h3 className="name"><a href="index.php?page-detail">Simple Product</a></h3>
                      <div className="price">$600.00</div>
                    </div>
                    <div className="col-xs-1 action"> <a href="#"><i className="fa fa-trash"></i></a> </div>
                  </div>
                </div>
                
                <div className="clearfix"></div>
                <hr>
                <div className="clearfix cart-total">
                  <div className="pull-right"> <span className="text">Sub Total :</span><span className='price'>$600.00</span> </div>
                  <div className="clearfix"></div>
                  <a href="checkout.html" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a> </div>
                 </hr>
                
              </li>
            </ul>
            
          </div>
      
          
          </div>
         
      </div>
      
      
    </div>
   
    
  </div>
  
  
  
  <div className="header-nav animate-dropdown">
    <div className="container">
      <div className="yamm navbar navbar-default" role="navigation">
        <div className="navbar-header">
       <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> 
       <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
        </div>
        <div className="nav-bg-className">
          <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
            <div className="nav-outer">
              <ul className="nav navbar-nav">
                <li className="active dropdown yamm-fw"> <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Home</a> </li>
                <li className="dropdown yamm mega-menu"> <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Clothing</a>
                  <ul className="dropdown-menu container">
                    <li>
                      <div className="yamm-content ">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 className="title">Men</h2>
                            <ul className="links">
                              <li><a href="#">Dresses</a></li>
                              <li><a href="#">Shoes </a></li>
                              <li><a href="#">Jackets</a></li>
                              <li><a href="#">Sunglasses</a></li>
                              <li><a href="#">Sport Wear</a></li>
                              <li><a href="#">Blazers</a></li>
                              <li><a href="#">Shirts</a></li>
                            </ul>
                          </div>
                          
                          
                          <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 className="title">Women</h2>
                            <ul className="links">
                              <li><a href="#">Handbags</a></li>
                              <li><a href="#">Jwellery</a></li>
                              <li><a href="#">Swimwear </a></li>
                              <li><a href="#">Tops</a></li>
                              <li><a href="#">Flats</a></li>
                              <li><a href="#">Shoes</a></li>
                              <li><a href="#">Winter Wear</a></li>
                            </ul>
                          </div>
                          
                          
                          <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 className="title">Boys</h2>
                            <ul className="links">
                              <li><a href="#">Toys & Games</a></li>
                              <li><a href="#">Jeans</a></li>
                              <li><a href="#">Shirts</a></li>
                              <li><a href="#">Shoes</a></li>
                              <li><a href="#">School Bags</a></li>
                              <li><a href="#">Lunch Box</a></li>
                              <li><a href="#">Footwear</a></li>
                            </ul>
                          </div>
                          
                          
                          <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                            <h2 className="title">Girls</h2>
                            <ul className="links">
                              <li><a href="#">Sandals </a></li>
                              <li><a href="#">Shorts</a></li>
                              <li><a href="#">Dresses</a></li>
                              <li><a href="#">Jwellery</a></li>
                              <li><a href="#">Bags</a></li>
                              <li><a href="#">Night Dress</a></li>
                              <li><a href="#">Swim Wear</a></li>
                            </ul>
                          </div>
                          
                          
                          <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img className="img-responsive" src="assets/images/banners/top-menu-banner.jpg" alt=""/> </div>
                           
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown mega-menu"> 
                <a href="category.html"  data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Electronics <span className="menu-label hot-menu hidden-xs">hot</span> </a>
                  <ul className="dropdown-menu container">
                    <li>
                      <div className="yamm-content">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 className="title">Laptops</h2>
                            <ul className="links">
                              <li><a href="#">Gaming</a></li>
                              <li><a href="#">Laptop Skins</a></li>
                              <li><a href="#">Apple</a></li>
                              <li><a href="#">Dell</a></li>
                              <li><a href="#">Lenovo</a></li>
                              <li><a href="#">Microsoft</a></li>
                              <li><a href="#">Asus</a></li>
                              <li><a href="#">Adapters</a></li>
                              <li><a href="#">Batteries</a></li>
                              <li><a href="#">Cooling Pads</a></li>
                            </ul>
                          </div>
                          
                          
                          <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 className="title">Desktops</h2>
                            <ul className="links">
                              <li><a href="#">Routers & Modems</a></li>
                              <li><a href="#">CPUs, Processors</a></li>
                              <li><a href="#">PC Gaming Store</a></li>
                              <li><a href="#">Graphics Cards</a></li>
                              <li><a href="#">Components</a></li>
                              <li><a href="#">Webcam</a></li>
                              <li><a href="#">Memory (RAM)</a></li>
                              <li><a href="#">Motherboards</a></li>
                              <li><a href="#">Keyboards</a></li>
                              <li><a href="#">Headphones</a></li>
                            </ul>
                          </div>
                          
                          
                          <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 className="title">Cameras</h2>
                            <ul className="links">
                              <li><a href="#">Accessories</a></li>
                              <li><a href="#">Binoculars</a></li>
                              <li><a href="#">Telescopes</a></li>
                              <li><a href="#">Camcorders</a></li>
                              <li><a href="#">Digital</a></li>
                              <li><a href="#">Film Cameras</a></li>
                              <li><a href="#">Flashes</a></li>
                              <li><a href="#">Lenses</a></li>
                              <li><a href="#">Surveillance</a></li>
                              <li><a href="#">Tripods</a></li>
                            </ul>
                          </div>
                          
                          <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                            <h2 className="title">Mobile Phones</h2>
                            <ul className="links">
                              <li><a href="#">Apple</a></li>
                              <li><a href="#">Samsung</a></li>
                              <li><a href="#">Lenovo</a></li>
                              <li><a href="#">Motorola</a></li>
                              <li><a href="#">LeEco</a></li>
                              <li><a href="#">Asus</a></li>
                              <li><a href="#">Acer</a></li>
                              <li><a href="#">Accessories</a></li>
                              <li><a href="#">Headphones</a></li>
                              <li><a href="#">Memory Cards</a></li>
                            </ul>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"> <a href="#"><img alt="" src="assets/images/banners/banner-side.png"/></a> </div>
                        </div>
                        
                      </div>
                       </li>
                  </ul>
                </li>
                <li className="dropdown hidden-sm"> <a href="category.html">Health & Beauty <span className="menu-label new-menu hidden-xs">new</span> </a> </li>
                <li className="dropdown hidden-sm"> <a href="category.html">Watches</a> </li>
                <li className="dropdown"> <a href="contact.html">Jewellery</a> </li>
                <li className="dropdown"> <a href="contact.html">Shoes</a> </li>
                <li className="dropdown"> <a href="contact.html">Kids & Girls</a> </li>
                <li className="dropdown"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</a>
                  <ul className="dropdown-menu pages">
                    <li>
                      <div className="yamm-content">
                        <div className="row">
                          <div className="col-xs-12 col-menu">
                            <ul className="links">
                              <li><a href="home.html">Home</a></li>
                              <li><a href="category.html">Category</a></li>
                              <li><a href="detail.html">Detail</a></li>
                              <li><a href="shopping-cart.html">Shopping Cart Summary</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="blog-details.html">Blog Detail</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="sign-in.html">Sign In</a></li>
                              <li><a href="my-wishlist.html">Wishlist</a></li>
                              <li><a href="terms-conditions.html">Terms and Condition</a></li>
                              <li><a href="track-orders.html">Track Orders</a></li>
                              <li><a href="product-comparison.html">Product-Comparison</a></li>
                              <li><a href="faq.html">FAQ</a></li>
                              <li><a href="404.html">404</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown  navbar-right special-menu"> <a href="#">Todays offer</a> </li>
              </ul>
              
              <div className="clearfix"></div>
            </div>
            
          </div>
           
          
        </div>
        
      </div>
      
    </div>
    
    
  </div>
  
 
  
</header>


<div className="body-content outer-top-xs" id="top-banner-and-menu">
  <div className="container">
    <div className="row"> 
      
      <div className="col-xs-12 col-sm-12 col-md-3 sidebar"> 
        
        
        <div className="side-menu animate-dropdown outer-bottom-xs">
          <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
          <nav className="yamm megamenu-horizontal">
            <ul className="nav">
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Clothing</a>
                <ul className="dropdown-menu mega-menu">
                  <li className="yamm-content">
                    <div className="row">
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Dresses</a></li>
                          <li><a href="#">Shoes </a></li>
                          <li><a href="#">Jackets</a></li>
                          <li><a href="#">Sunglasses</a></li>
                          <li><a href="#">Sport Wear</a></li>
                          <li><a href="#">Blazers</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shorts</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Handbags</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Swimwear </a></li>
                          <li><a href="#">Tops</a></li>
                          <li><a href="#">Flats</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">Winter Wear</a></li>
                          <li><a href="#">Night Suits</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Toys &amp; Games</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">School Bags</a></li>
                          <li><a href="#">Lunch Box</a></li>
                          <li><a href="#">Footwear</a></li>
                          <li><a href="#">Wipes</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Sandals </a></li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Dresses</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Night Dress</a></li>
                          <li><a href="#">Swim Wear</a></li>
                          <li><a href="#">Toys</a></li>
                        </ul>
                      </div>
                       
                    </div>
                    
                  </li>
                  
                </ul>
                 </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-laptop" aria-hidden="true"></i>Electronics</a> 
                
                <ul className="dropdown-menu mega-menu">
                  <li className="yamm-content">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-lg-4">
                        <ul>
                          <li><a href="#">Gaming</a></li>
                          <li><a href="#">Laptop Skins</a></li>
                          <li><a href="#">Apple</a></li>
                          <li><a href="#">Dell</a></li>
                          <li><a href="#">Lenovo</a></li>
                          <li><a href="#">Microsoft</a></li>
                          <li><a href="#">Asus</a></li>
                          <li><a href="#">Adapters</a></li>
                          <li><a href="#">Batteries</a></li>
                          <li><a href="#">Cooling Pads</a></li>
                        </ul>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-lg-4">
                        <ul>
                          <li><a href="#">Routers &amp; Modems</a></li>
                          <li><a href="#">CPUs, Processors</a></li>
                          <li><a href="#">PC Gaming Store</a></li>
                          <li><a href="#">Graphics Cards</a></li>
                          <li><a href="#">Components</a></li>
                          <li><a href="#">Webcam</a></li>
                          <li><a href="#">Memory (RAM)</a></li>
                          <li><a href="#">Motherboards</a></li>
                          <li><a href="#">Keyboards</a></li>
                          <li><a href="#">Headphones</a></li>
                        </ul>
                      </div>
                      <div className="dropdown-banner-holder"> <a href="#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                    </div>
                    
                  </li>
                  
                </ul>
                
                </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-paw" aria-hidden="true"></i>Shoes</a>
                <ul className="dropdown-menu mega-menu">
                  <li className="yamm-content">
                    <div className="row">
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Dresses</a></li>
                          <li><a href="#">Shoes </a></li>
                          <li><a href="#">Jackets</a></li>
                          <li><a href="#">Sunglasses</a></li>
                          <li><a href="#">Sport Wear</a></li>
                          <li><a href="#">Blazers</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shorts</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Handbags</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Swimwear </a></li>
                          <li><a href="#">Tops</a></li>
                          <li><a href="#">Flats</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">Winter Wear</a></li>
                          <li><a href="#">Night Suits</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Toys &amp; Games</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">School Bags</a></li>
                          <li><a href="#">Lunch Box</a></li>
                          <li><a href="#">Footwear</a></li>
                          <li><a href="#">Wipes</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Sandals </a></li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Dresses</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Night Dress</a></li>
                          <li><a href="#">Swim Wear</a></li>
                          <li><a href="#">Toys</a></li>
                        </ul>
                      </div>
                      
                    </div>
                     
                  </li>
                  
                </ul>
                </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-clock-o"></i>Watches</a>
                <ul className="dropdown-menu mega-menu">
                  <li className="yamm-content">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-lg-4">
                        <ul>
                          <li><a href="#">Gaming</a></li>
                          <li><a href="#">Laptop Skins</a></li>
                          <li><a href="#">Apple</a></li>
                          <li><a href="#">Dell</a></li>
                          <li><a href="#">Lenovo</a></li>
                          <li><a href="#">Microsoft</a></li>
                          <li><a href="#">Asus</a></li>
                          <li><a href="#">Adapters</a></li>
                          <li><a href="#">Batteries</a></li>
                          <li><a href="#">Cooling Pads</a></li>
                        </ul>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-lg-4">
                        <ul>
                          <li><a href="#">Routers &amp; Modems</a></li>
                          <li><a href="#">CPUs, Processors</a></li>
                          <li><a href="#">PC Gaming Store</a></li>
                          <li><a href="#">Graphics Cards</a></li>
                          <li><a href="#">Components</a></li>
                          <li><a href="#">Webcam</a></li>
                          <li><a href="#">Memory (RAM)</a></li>
                          <li><a href="#">Motherboards</a></li>
                          <li><a href="#">Keyboards</a></li>
                          <li><a href="#">Headphones</a></li>
                        </ul>
                      </div>
                      <div className="dropdown-banner-holder"> <a href="#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                    </div>
                    
                  </li>
                  
                </ul>
                </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-diamond"></i>Jewellery</a>
                <ul className="dropdown-menu mega-menu">
                  <li className="yamm-content">
                    <div className="row">
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Dresses</a></li>
                          <li><a href="#">Shoes </a></li>
                          <li><a href="#">Jackets</a></li>
                          <li><a href="#">Sunglasses</a></li>
                          <li><a href="#">Sport Wear</a></li>
                          <li><a href="#">Blazers</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shorts</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Handbags</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Swimwear </a></li>
                          <li><a href="#">Tops</a></li>
                          <li><a href="#">Flats</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">Winter Wear</a></li>
                          <li><a href="#">Night Suits</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Toys &amp; Games</a></li>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shoes</a></li>
                          <li><a href="#">School Bags</a></li>
                          <li><a href="#">Lunch Box</a></li>
                          <li><a href="#">Footwear</a></li>
                          <li><a href="#">Wipes</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-3">
                        <ul className="links list-unstyled">
                          <li><a href="#">Sandals </a></li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Dresses</a></li>
                          <li><a href="#">Jwellery</a></li>
                          <li><a href="#">Bags</a></li>
                          <li><a href="#">Night Dress</a></li>
                          <li><a href="#">Swim Wear</a></li>
                          <li><a href="#">Toys</a></li>
                        </ul>
                      </div>
                      
                    </div>
                    
                  </li>
                  
                </ul>
                </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-heartbeat"></i>Health and Beauty</a>
                <ul className="dropdown-menu mega-menu">
                  <li className="yamm-content">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-lg-4">
                        <ul>
                          <li><a href="#">Gaming</a></li>
                          <li><a href="#">Laptop Skins</a></li>
                          <li><a href="#">Apple</a></li>
                          <li><a href="#">Dell</a></li>
                          <li><a href="#">Lenovo</a></li>
                          <li><a href="#">Microsoft</a></li>
                          <li><a href="#">Asus</a></li>
                          <li><a href="#">Adapters</a></li>
                          <li><a href="#">Batteries</a></li>
                          <li><a href="#">Cooling Pads</a></li>
                        </ul>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-lg-4">
                        <ul>
                          <li><a href="#">Routers &amp; Modems</a></li>
                          <li><a href="#">CPUs, Processors</a></li>
                          <li><a href="#">PC Gaming Store</a></li>
                          <li><a href="#">Graphics Cards</a></li>
                          <li><a href="#">Components</a></li>
                          <li><a href="#">Webcam</a></li>
                          <li><a href="#">Memory (RAM)</a></li>
                          <li><a href="#">Motherboards</a></li>
                          <li><a href="#">Keyboards</a></li>
                          <li><a href="#">Headphones</a></li>
                        </ul>
                      </div>
                      <div className="dropdown-banner-holder"> <a href="#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                    </div>
                    
                  </li>
                  
                </ul>
                 </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-paper-plane"></i>Kids and Babies</a> 
                 </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-futbol-o"></i>Sports</a> 
                
                
                 </li>
              
              
              <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-envira"></i>Home and Garden</a> 
              </li>
              
              
            </ul>
            
          </nav>
          
        </div>
         
        
        
        
        <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
          <h3 className="section-title">hot deals</h3>
          <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
            <div className="item">
              <div className="products">
                <div className="hot-deal-wrapper">
                  <div className="image"> <img src="assets/images/hot-deals/p25.jpg" alt=""/> </div>
                  <div className="sale-offer-tag"><span>49%<br></br>
                    off</span></div>
                  <div className="timing-wrapper">
                    <div className="box-wrapper">
                      <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                    </div>
                    <div className="box-wrapper hidden-md">
                      <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                
                
                <div className="product-info text-left m-t-20">
                  <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                  <div className="rating rateit-small"></div>
                  <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                  
                  
                </div>
                
                
                <div className="cart clearfix animate-effect">
                  <div className="action">
                    <div className="add-cart-button btn-group">
                      <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                      <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="item">
              <div className="products">
                <div className="hot-deal-wrapper">
                  <div className="image"> <img src="assets/images/hot-deals/p5.jpg" alt=""/> </div>
                  <div className="sale-offer-tag"><span>35%<br></br>
                    off</span></div>
                  <div className="timing-wrapper">
                    <div className="box-wrapper">
                      <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                    </div>
                    <div className="box-wrapper hidden-md">
                      <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                
                
                <div className="product-info text-left m-t-20">
                  <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                  <div className="rating rateit-small"></div>
                  <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                  
                  
                </div>
                
                
                <div className="cart clearfix animate-effect">
                  <div className="action">
                    <div className="add-cart-button btn-group">
                      <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                      <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="item">
              <div className="products">
                <div className="hot-deal-wrapper">
                  <div className="image"> <img src="assets/images/hot-deals/p10.jpg" alt=""/> </div>
                  <div className="sale-offer-tag"><span>35%<br></br>
                    off</span></div>
                  <div className="timing-wrapper">
                    <div className="box-wrapper">
                      <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                    </div>
                    <div className="box-wrapper">
                      <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                    </div>
                    <div className="box-wrapper hidden-md">
                      <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                    </div>
                  </div>
                </div>
                
                
                <div className="product-info text-left m-t-20">
                  <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                  <div className="rating rateit-small"></div>
                  <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                  
                  
                </div>
                
                
                <div className="cart clearfix animate-effect">
                  <div className="action">
                    <div className="add-cart-button btn-group">
                      <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                      <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
        
        
        
        
        <div className="sidebar-widget outer-bottom-small wow fadeInUp">
          <h3 className="section-title">Special Offer</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p30.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                          
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p29.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                          
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            
                            
                          </div>
                        </div>
                        
                      </div>
                       
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p28.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                          
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                        
                      </div>
                       
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p27.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                          
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            
                            
                          </div>
                        </div>
                        
                      </div>
                       
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p26.jpg" alt=""/> </a> </div>
                             
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            
                            
                          </div>
                        </div>
                         
                      </div>
                       
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p25.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                          
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p24.jpg"  alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p23.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p22.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
         

        <div className="sidebar-widget product-tag wow fadeInUp">
          <h3 className="section-title">Product tags</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> <a className="item active" title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone" href="category.html">Smartphone</a> <a className="item" title="Furniture" href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker" href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a className="item" title="Rose" href="category.html">Rose</a> </div>
            
          </div>
           
        </div>
         

        
        <div className="sidebar-widget outer-bottom-small wow fadeInUp">
          <h3 className="section-title">Special Deals</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p28.jpg"  alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p15.jpg"  alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p26.jpg"  alt="image"/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p18.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p17.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p16.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products special-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p15.jpg" alt="images"/>
                              <div className="zoom-overlay"></div>
                              </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p14.jpg"  alt=""/>
                              <div className="zoom-overlay"></div>
                              </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p13.jpg" alt="image"/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Shirt</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
         

        <div className="sidebar-widget newsletter wow fadeInUp outer-bottom-small">
          <h3 className="section-title">Newsletters</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <p>Sign Up for Our Newsletter!</p>
            <form>
              <div className="form-group">
                <label className="sr-only" for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter"/>
              </div>
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
           
        </div>
         

        <div className="sidebar-widget  wow fadeInUp outer-top-vs ">
          <div id="advertisement" className="advertisement">
            <div className="item">
              <div className="avatar"><img src="assets/images/testimonials/member1.png" alt="Image"/></div>
              <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
              <div className="clients_author">John Doe <span>Abc Company</span> </div>
              
            </div>
            
            
            <div className="item">
              <div className="avatar"><img src="assets/images/testimonials/member3.png" alt="Image"/></div>
              <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
              <div className="clients_author">Stephen Doe <span>Xperia Designs</span> </div>
            </div>
            
            
            <div className="item">
              <div className="avatar"><img src="assets/images/testimonials/member2.png" alt="Image"/></div>
              <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
              <div className="clients_author">Saraha Smith <span>Datsun &amp; Co</span> </div>
              
            </div>
            
            
          </div>
           
        </div>
        
        
        
        <div className="home-banner"> <img src="assets/images/banners/LHS-banner.jpg" alt="Image"/> </div>
      </div>
 
      

      <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 

        
        <div id="hero">
          <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
            <div className="item" style="background-image: url(assets/images/sliders/01.jpg);">
              <div className="container-fluid">
                <div className="caption bg-color vertical-center text-left">
                  <div className="slider-header fadeInDown-1">Top Brands</div>
                  <div className="big-text fadeInDown-1"> New Collections </div>
                  <div className="excerpt fadeInDown-2 hidden-xs"> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> </div>
                  <div className="button-holder fadeInDown-3"> <a href="index.php?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                </div>
                
              </div>
              
            </div>
            
            
            <div className="item" style="background-image: url(assets/images/sliders/02.jpg);">
              <div className="container-fluid">
                <div className="caption bg-color vertical-center text-left">
                  <div className="slider-header fadeInDown-1">Spring 2016</div>
                  <div className="big-text fadeInDown-1"> Women <span className="highlight">Fashion</span> </div>
                  <div className="excerpt fadeInDown-2 hidden-xs"> <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span> </div>
                  <div className="button-holder fadeInDown-3"> <a href="index.php?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                </div>
                
              </div>
              
            </div>
            
            
          </div>
           
        </div>
        

        <div className="info-boxes wow fadeInUp">
          <div className="info-boxes-inner">
            <div className="row">
              <div className="col-md-6 col-sm-4 col-lg-4">
                <div className="info-box">
                  <div className="row">
                    <div className="col-xs-12">
                      <h4 className="info-box-heading green">money back</h4>
                    </div>
                  </div>
                  <h6 className="text">30 Days Money Back Guarantee</h6>
                </div>
              </div>
              
              
              <div className="hidden-md col-sm-4 col-lg-4">
                <div className="info-box">
                  <div className="row">
                    <div className="col-xs-12">
                      <h4 className="info-box-heading green">free shipping</h4>
                    </div>
                  </div>
                  <h6 className="text">Shipping on orders over $99</h6>
                </div>
              </div>
              
              
              <div className="col-md-6 col-sm-4 col-lg-4">
                <div className="info-box">
                  <div className="row">
                    <div className="col-xs-12">
                      <h4 className="info-box-heading green">Special Sale</h4>
                    </div>
                  </div>
                  <h6 className="text">Extra $5 off on all items </h6>
                </div>
              </div>
               
            </div>
            
          </div>
          
          
        </div>
        
        <div id="product-tabs-slider" className="scroll-tabs outer-top-vs wow fadeInUp">
          <div className="more-info-tab clearfix ">
            <h3 className="new-product-title pull-left">New Products</h3>
            <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
              <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
              <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
              <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
              <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
            </ul>
             
          </div>
          <div className="tab-content outer-top-xs">
            <div className="tab-pane in active" id="all">
              <div className="product-slider">
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="4">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p1.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p2.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p4.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p3.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p30.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p29.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                 
              </div>
              
            </div>
            
            
            <div className="tab-pane" id="smartphone">
              <div className="product-slider">
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p5.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p6.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p7.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p8.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p9.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p10.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                 
              </div>
              
            </div>
            
            
            <div className="tab-pane" id="laptop">
              <div className="product-slider">
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p11.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p12.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p13.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img src="assets/images/products/p14.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p15.jpg" alt="image"/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img src="assets/images/products/p16.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Apple Iphone 5s 32GB</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                 
              </div>
              
            </div>
            
            
            <div className="tab-pane" id="apple">
              <div className="product-slider">
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img src="assets/images/products/p18.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p18.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p17.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p16.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p13.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag new"><span>new</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                  
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img  src="assets/images/products/p14.jpg" alt=""/></a> </div>
                          
                          
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        
                        
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Samsung Galaxy S4</a></h3>
                          <div className="rating rateit-small"></div>
                          <div className="description"></div>
                          <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                           
                          
                        </div>
                        
                        <div className="cart clearfix animate-effect">
                          <div className="action">
                            <ul className="list-unstyled">
                              <li className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                              </li>
                              <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                              <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                 
              </div>
              
            </div>
             
            
          </div>
          
        </div>

        <div className="wide-banners wow fadeInUp outer-bottom-xs">
          <div className="row">
            <div className="col-md-7 col-sm-7">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner1.jpg" alt=""/> </div>
              </div>
              
            </div>
            
            <div className="col-md-5 col-sm-5">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner2.jpg" alt=""/> </div>
              </div>
              
            </div>
             
          </div>
          
        </div>
        
        

        <section className="section featured-product wow fadeInUp">
          <h3 className="section-title">Featured products</h3>
          <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p5.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p6.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag new"><span>new</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/blank.gif" data-echo="assets/images/products/p7.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p8.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p9.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag new"><span>new</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p10.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
          </div>
           
        </section>

        <div className="wide-banners wow fadeInUp outer-bottom-xs">
          <div className="row">
            <div className="col-md-12">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner.jpg" alt=""/> </div>
                <div className="strip strip-text">
                  <div className="strip-inner">
                    <h2 className="text-right">New Mens Fashion<br></br>
                      <span className="shopping-needs">Save up to 40% off</span></h2>
                  </div>
                </div>
                <div className="new-label">
                  <div className="text">NEW</div>
                </div>
                
              </div>
              
            </div>
             
            
          </div>
          
        </div>
        
 
        
        <div className="best-deal wow fadeInUp outer-bottom-xs">
          <h3 className="section-title">Best seller</h3>
          <div className="sidebar-widget-body outer-top-xs">
            <div className="owl-carousel best-seller custom-carousel owl-theme outer-top-xs">
              <div className="item">
                <div className="products best-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p20.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p21.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products best-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p22.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p23.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products best-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p24.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p25.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="products best-product">
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p26.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                  <div className="product">
                    <div className="product-micro">
                      <div className="row product-micro-row">
                        <div className="col col-xs-5">
                          <div className="product-image">
                            <div className="image"> <a href="#"> <img src="assets/images/products/p27.jpg" alt=""/> </a> </div>
                            
                            
                          </div>
                           
                        </div>
                        
                        <div className="col2 col-xs-7">
                          <div className="product-info">
                            <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> </div>
                             
                            
                          </div>
                        </div>
                         
                      </div>
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
         

        <section className="section latest-blog outer-bottom-vs wow fadeInUp">
          <h3 className="section-title">latest form blog</h3>
          <div className="blog-slider-container outer-top-xs">
            <div className="owl-carousel blog-slider custom-carousel">
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/post1.jpg" alt=""/></a> </div>
                  </div>
                  
                  
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Voluptatem accusantium doloremque laudantium</a></h3>
                    <span className="info">By Jone Doe &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <a href="#" className="lnk btn btn-primary">Read more</a> </div>
                  
                  
                </div>
                
              </div>
              
              
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/post2.jpg" alt=""/></a> </div>
                  </div>
                  
                  
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <a href="#" className="lnk btn btn-primary">Read more</a> </div>
                  
                  
                </div>
                
              </div>
              
              
              
              
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/post1.jpg" alt=""/></a> </div>
                  </div>
                  
                  
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <a href="#" className="lnk btn btn-primary">Read more</a> </div>
                  
                  
                </div>
                
              </div>
              
              
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/post2.jpg" alt=""/></a> </div>
                  </div>
                  
                  
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <a href="#" className="lnk btn btn-primary">Read more</a> </div>
                  
                  
                </div>
                
              </div>
              
              
              <div className="item">
                <div className="blog-post">
                  <div className="blog-post-image">
                    <div className="image"> <a href="blog.html"><img src="assets/images/blog-post/post1.jpg" alt=""/></a> </div>
                  </div>
                  
                  
                  <div className="blog-post-info text-left">
                    <h3 className="name"><a href="#">Dolorem eum fugiat quo voluptas nulla pariatur</a></h3>
                    <span className="info">By Saraha Smith &nbsp;|&nbsp; 21 March 2016 </span>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                    <a href="#" className="lnk btn btn-primary">Read more</a> </div>
                  
                  
                </div>
                
              </div>
              
              
            </div>
             
          </div>
           
        </section>

        <section className="section wow fadeInUp new-arriavls">
          <h3 className="section-title">New Arrivals</h3>
          <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p19.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag new"><span>new</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p28.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag new"><span>new</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p30.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p1.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p2.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> <a href="detail.html"><img  src="assets/images/products/p3.jpg" alt=""/></a> </div>
                    
                    
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                     
                    
                  </div>
                  
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            
          </div>
           
        </section>

        
      </div>

    </div>
    

    <div id="brands-carousel" className="logo-slider wow fadeInUp">
      <div className="logo-slider-inner">
        <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
          <div className="item m-t-15"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item m-t-10"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/> </a> </div>
          
          
          <div className="item"> <a href="#" className="image"> <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/> </a> </div>
           
        </div>
         
      </div>
       
      
    </div>

  </div>
 
</div>


<footer id="footer" className="footer color-bg">
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Contact Us</h4>
          </div>

          <div className="module-body">
            <ul className="toggle-footer" style="">
              <li className="media">
                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                <div className="media-body">
                  <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                </div>
              </li>
              <li className="media">
                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse"></i> </span> </div>
                <div className="media-body">
                  <p>+(888) 123-4567<br></br>
                    +(888) 456-7890</p>
                </div>
              </li>
              <li className="media">
                <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse"></i> </span> </div>
                <div className="media-body"> <span><a href="#">flipmart@themesground.com</a></span> </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Customer Service</h4>
          </div>
          
          
          <div className="module-body">
            <ul className='list-unstyled'>
              <li className="first"><a href="#" title="Contact us">My Account</a></li>
              <li><a href="#" title="About us">Order History</a></li>
              <li><a href="#" title="faq">FAQ</a></li>
              <li><a href="#" title="Popular Searches">Specials</a></li>
              <li className="last"><a href="#" title="Where is my order?">Help Center</a></li>
            </ul>
          </div>
          
        </div>
        
        
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Corporation</h4>
          </div>
          
          
          <div className="module-body">
            <ul className='list-unstyled'>
              <li className="first"><a title="Your Account" href="#">About us</a></li>
              <li><a title="Information" href="#">Customer Service</a></li>
              <li><a title="Addresses" href="#">Company</a></li>
              <li><a title="Addresses" href="#">Investor Relations</a></li>
              <li className="last"><a title="Orders History" href="#">Advanced Search</a></li>
            </ul>
          </div>
          
        </div>
        
        
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Why Choose Us</h4>
          </div>
          
          
          <div className="module-body">
            <ul className='list-unstyled'>
              <li className="first"><a href="#" title="About us">Shopping Guide</a></li>
              <li><a href="#" title="Blog">Blog</a></li>
              <li><a href="#" title="Company">Company</a></li>
              <li><a href="#" title="Investor Relations">Investor Relations</a></li>
              <li className=" last"><a href="contact-us.html" title="Suppliers">Contact Us</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-bar">
    <div className="container">
      <div className="col-xs-12 col-sm-6 no-padding social">
        <ul className="link">
          <li className="fb pull-left"><a target="_blank" rel="nofollow" href="#" title="Facebook"></a></li>
          <li className="tw pull-left"><a target="_blank" rel="nofollow" href="#" title="Twitter"></a></li>
          <li className="googleplus pull-left"><a target="_blank" rel="nofollow" href="#" title="GooglePlus"></a></li>
          <li className="rss pull-left"><a target="_blank" rel="nofollow" href="#" title="RSS"></a></li>
          <li className="pintrest pull-left"><a target="_blank" rel="nofollow" href="#" title="PInterest"></a></li>
          <li className="linkedin pull-left"><a target="_blank" rel="nofollow" href="#" title="Linkedin"></a></li>
          <li className="youtube pull-left"><a target="_blank" rel="nofollow" href="#" title="Youtube"></a></li>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-6 no-padding">
        <div className="clearfix payment-methods">
          <ul>
            <li><img src="assets/images/payments/1.png" alt=""/></li>
            <li><img src="assets/images/payments/2.png" alt=""/></li>
            <li><img src="assets/images/payments/3.png" alt=""/></li>
            <li><img src="assets/images/payments/4.png" alt=""/></li>
            <li><img src="assets/images/payments/5.png" alt=""/></li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</footer>


<script src="assets/js/jquery-1.11.1.min.js"></script> 
<script src="assets/js/bootstrap.min.js"></script> 
<script src="assets/js/bootstrap-hover-dropdown.min.js"></script> 
<script src="assets/js/owl.carousel.min.js"></script> 
<script src="assets/js/echo.min.js"></script> 
<script src="assets/js/jquery.easing-1.3.min.js"></script> 
<script src="assets/js/bootstrap-slider.min.js"></script> 
<script src="assets/js/jquery.rateit.min.js"></script> 
<script type="text/javascript" src="assets/js/lightbox.min.js"></script> 
<script src="assets/js/bootstrap-select.min.js"></script> 
<script src="assets/js/wow.min.js"></script> 
<script src="assets/js/scripts.js"></script>
</body>

</>
  );
}