const Listing = () => {
  return (
    <>

  <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <a href="index.html" className="logo">
            </a>
            <ul className="nav">
              <li><a href="/home">Home</a></li>
              <li><a href="category.html">Category</a></li>
              <li><a href="#" className="active">Listing</a></li>
              <li><a href="/contact">Contact Us</a></li> 
              <li><div className="main-white-button"><a href="#"><i className="fa fa-plus"></i> Add Your Listing</a></div></li> 
            </ul>        
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <div className="page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="top-text header-text">
            <h6>Check Out Our Listings</h6>
            <h2>Item listings of Different Categories</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="listing-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="naccs">
            <div className="grid">
              <div className="row">
                <div className="col-lg-3">
                  <div className="menu">
                    <div className="first-thumb active">
                      <div className="thumb">
                        <span className="icon"><img src="assets/images/search-icon-01.png" alt=""/></span>
                        Apartments
                      </div>
                    </div>
                    <div>
                      <div className="thumb">                 
                        <span className="icon"><img src="assets/images/search-icon-02.png" alt=""/></span>
                        Food &amp; Life
                      </div>
                    </div>
                    <div>
                      <div className="thumb">                 
                        <span className="icon"><img src="assets/images/search-icon-03.png" alt=""/></span>
                        Cars
                      </div>
                    </div>
                    <div className="last-thumb">
                      <div className="thumb">                 
                        <span className="icon"><img src="assets/images/search-icon-04.png" alt=""/></span>
                        Traveling
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-lg-9">
                  <ul className="nacc">
                    <li className="active">
                      <div>
                        <div className="col-lg-12">
                          <div className="owl-carousel owl-listing">
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-01.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Sunshine Paradise Apartment</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $600 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-02.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Best one in this category</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $800 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Amazing Dj Party House</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $950 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-01.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Sunshine Villa Condo</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $450 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-02.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Gaming Studio Units</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $550 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Amazing Dj Party House</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $650 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-01.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Third Page Apartment</h4></a>
                                      <h6>by: Real Estate Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $600 to $950 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-02.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>New Gaming Townhouse</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $840 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Amazing Party Villa</h4></a>
                                      <h6>by: Real ESTATE Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $950 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li>
                      <div>
                        <div className="col-lg-12">
                          <div className="owl-carousel owl-listing">
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-04.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Food First page</h4></a>
                                      <h6>by: Food Delivery</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $600 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-05.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Food Item 2</h4></a>
                                      <h6>by: Food Delivery</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $540 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Food Item 3</h4></a>
                                      <h6>by: Food Delivery</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $720 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-05.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>FOOD Second Page</h4></a>
                                      <h6>by: Food Delivery</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $420 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-04.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Best Food Item 5</h4></a>
                                      <h6>by: Food Delivery</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $450 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Amazing Food Item 6</h4></a>
                                      <h6>by: Food Delivery</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $500 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li>
                      <div>
                        <div className="col-lg-12">
                          <div className="owl-carousel owl-listing">
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-05.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Third Category First Page</h4></a>
                                      <h6>by: Sale Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $750 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-04.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Car Item 2</h4></a>
                                      <h6>by: Sale Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $880 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Car Item 3</h4></a>
                                      <h6>by: Sale Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $770 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-01.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Third Category Second Page</h4></a>
                                      <h6>by: Sale Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $660 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-02.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Car Item 5</h4></a>
                                      <h6>by: Sale Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $550 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-06.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Car Item 6</h4></a>
                                      <h6>by: Sale Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $440 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li>
                      <div>
                        <div className="col-lg-12">
                          <div className="owl-carousel owl-listing">
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-06.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Traveling Item 1</h4></a>
                                      <h6>by: Travel Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $400 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-04.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Traveling Item 2</h4></a>
                                      <h6>by: Travel Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $500 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Traveling Item 3</h4></a>
                                      <h6>by: Travel Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $342 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt=""/> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-05.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>4th Category 2nd Page</h4></a>
                                      <h6>by: Travel Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt=""/></div> $268 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt="" /> 2 Bedrooms<br/><img src="assets/images/listing-icon-03.png" alt=""/> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-06.jpg" alt="" /></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Traveling Item 5</h4></a>
                                      <h6>by: Travel Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt="" /></div> $145 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt="" /> 2 Bedrooms<br /><img src="assets/images/listing-icon-03.png" alt="" /> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-03.jpg" alt=""/></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>Traveling Item 6</h4></a>
                                      <h6>by: Travel Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt="" /></div> $240 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt="" /> 2 Bedrooms<br /><img src="assets/images/listing-icon-03.png" alt="" /> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="item">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="listing-item">
                                    <div className="left-image">
                                      <a href="#"><img src="assets/images/listing-06.jpg" alt="" /></a>
                                      <div className="hover-content">
                                        <div className="main-white-button">
                                          <a href="contact.html"><i className="fa fa-eye"></i> Contact Now</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="right-content align-self-center">
                                      <a href="#"><h4>4th Category 3rd Page</h4></a>
                                      <h6>by: Travel Agent</h6>
                                      <span className="price"><div className="icon"><img src="assets/images/listing-icon-01.png" alt="" /></div> $360 / month included tax</span>
                                      <span className="details">Details: <em>860 sq ft</em></span>
                                      <span className="info"><img src="assets/images/listing-icon-02.png" alt="" /> 2 Bedrooms<br /><img src="assets/images/listing-icon-03.png" alt="" /> 3 Bathrooms</span>
                                    </div>
                                  </div>
                                </div>
                                
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  
                    
                  </ul>
                  
                </div>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="about">
            <div className="logo">
              <img src="assets/images/black-logo.png" alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adicingi elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="helpful-links">
            <h4>Helpful Links</h4>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><a href="#">Categories</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Listing</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Awards</a></li>
                  <li><a href="#">Useful Sites</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-us">
            <h4>Contact Us</h4>
            <p>27th Street of New Town, Digital Villa</p>
            <div className="row">
              <div className="col-lg-6">
                <a href="#">010-020-0340</a>
              </div>
              <div className="col-lg-6">
                <a href="#">090-080-0760</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="sub-footer">
            <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.
            <br />
			Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/animation.js"></script>
  <script src="assets/js/imagesloaded.js"></script>
  <script src="assets/js/custom.js"></script>

    </>
    
  )
}

export default Listing