
const Contact = () => {
  return (
    <>
  <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
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
              <li><a href="/listing">Listing</a></li>
              <li><a href="#" className="active">Contact Us</a></li> 
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
            <h6>Keep in touch with us</h6>
            <h2>Feel free to send us a message about your business needs</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="contact-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-6">
                <div id="map">
                  <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="650px"></iframe>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <form id="contact" action="" method="get">
                  <div className="row">
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="surname" name="surname" id="surname" placeholder="Surname" autoComplete="on" required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <ul>
                        <li><input type="checkbox" name="option1" value="cars"/><span>Cars</span></li>
                        <li><input type="checkbox" name="option2" value="aparmtents"/><span>Apartments</span></li>
                        <li><input type="checkbox" name="option3" value="shopping"/><span>Shopping</span></li>
                        <li><input type="checkbox" name="option4" value="food"/><span>Food &amp; Life</span></li>
                        <li><input type="checkbox" name="option5" value="traveling"/><span>Traveling</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" typeof="text" className="form-control" id="message" placeholder="Message" required></textarea>  
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane"></i> Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
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
              <img src="assets/images/black-logo.png" alt="Plot Listing Template"/>
            </div>
            <p>If you consider that <a rel="nofollow" href="https://templatemo.com/tm-564-plot-listing" target="_parent">Plot Listing template</a> is useful for your website, please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.</p>
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
            <br/>
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

export default Contact