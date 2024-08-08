function App() {

  return (
    <>
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="coffees.html">
                    Coffees
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="login_bt">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="user_icon">
                          <i className="fa fa-user" aria-hidden="true" />
                        </span>
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-search" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </nav>
        </div>
        {/* banner section start */}
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="banner_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="banner_img">
                        <img src="images/banner-img.png" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">coffee</h1>
                        <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                        <p className="banner_text">
                          more-or-less normal distribution of letters, as opposed to
                          using{" "}
                        </p>
                        <div className="btn_main">
                          <div className="about_bt">
                            <a href="#">About Us</a>
                          </div>
                          <div className="callnow_bt active">
                            <a href="#">Call Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="banner_img">
                        <img src="images/banner-img.png" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">coffee</h1>
                        <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                        <p className="banner_text">
                          more-or-less normal distribution of letters, as opposed to
                          using{" "}
                        </p>
                        <div className="btn_main">
                          <div className="about_bt">
                            <a href="#">About Us</a>
                          </div>
                          <div className="callnow_bt active">
                            <a href="#">Call Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="banner_img">
                        <img src="images/banner-img.png" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">coffee</h1>
                        <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                        <p className="banner_text">
                          more-or-less normal distribution of letters, as opposed to
                          using{" "}
                        </p>
                        <div className="btn_main">
                          <div className="about_bt">
                            <a href="#">About Us</a>
                          </div>
                          <div className="callnow_bt active">
                            <a href="#">Call Now</a>
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
        {/* banner section end */}
      </div>
      {/* header section end */}
      {/* coffee section start */}
      <div className="coffee_section layout_padding">
        <div className="container">
          <div className="row">
            <h1 className="coffee_taital">OUR Coffee OFFER</h1>
            <div className="bulit_icon">
              <img src="images/bulit-icon.png" />
            </div>
          </div>
        </div>
        <div className="coffee_section_2">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-1.png" />
                      </div>
                      <h3 className="types_text">TYPES OF COFFEE</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-2.png" />
                      </div>
                      <h3 className="types_text">BEAN VARIETIES</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-3.png" />
                      </div>
                      <h3 className="types_text">COFFEE &amp; PASTRY</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-4.png" />
                      </div>
                      <h3 className="types_text">COFFEE TO GO</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-1.png" />
                      </div>
                      <h3 className="types_text">TYPES OF COFFEE</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-2.png" />
                      </div>
                      <h3 className="types_text">BEAN VARIETIES</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-3.png" />
                      </div>
                      <h3 className="types_text">COFFEE &amp; PASTRY</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-4.png" />
                      </div>
                      <h3 className="types_text">COFFEE TO GO</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-1.png" />
                      </div>
                      <h3 className="types_text">TYPES OF COFFEE</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-2.png" />
                      </div>
                      <h3 className="types_text">BEAN VARIETIES</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-3.png" />
                      </div>
                      <h3 className="types_text">COFFEE &amp; PASTRY</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="coffee_img">
                        <img src="images/img-4.png" />
                      </div>
                      <h3 className="types_text">COFFEE TO GO</h3>
                      <p className="looking_text">
                        looking at its layout. The point of
                      </p>
                      <div className="read_bt">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      {/* coffee section end */}
      {/* about section start */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="about_taital">About Our shop</h1>
              <div className="bulit_icon">
                <img src="images/bulit-icon.png" />
              </div>
            </div>
          </div>
          <div className="about_section_2 layout_padding">
            <div className="image_iman">
              <img src="images/about-img.png" className="about_img" />
            </div>
            <div className="about_taital_box">
              <h1 className="about_taital_1">Coffee distribution</h1>
              <p className=" about_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat veritatis laborum odio recusandae rerum nihil id mollitia eum ipsa quo!
              </p>
              <div className="readmore_btn">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
      {/* client section start */}
      <div className="client_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="about_taital">What syas customers</h1>
              <div className="bulit_icon">
                <img src="images/bulit-icon.png" />
              </div>
            </div>
          </div>
          <div className="client_section_2">
            <div className="client_taital_main">
              <div className="client_left">
                <div className="client_img">
                  <img src="images/client-img1.png" />
                </div>
              </div>
              <div className="client_right">
                <h3 className="moark_text">Joy Moark</h3>
                <p className="client_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, necessitatibus.
                </p>
              </div>
            </div>
            <div className="client_taital_main">
              <div className="client_left">
                <div className="client_img">
                  <img src="images/client-img2.png" />
                </div>
              </div>
              <div className="client_right">
                <h3 className="moark_text">Mihacal</h3>
                <p className="client_text">
                  now use Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their
                  infancynow use Lorem Ipsum as their default model text,{" "}
                </p>
              </div>
            </div>
            <div className="client_taital_main">
              <div className="client_left">
                <div className="client_img">
                  <img src="images/client-img3.png" />
                </div>
              </div>
              <div className="client_right">
                <h3 className="moark_text">Uliya den</h3>
                <p className="client_text">
                  now use Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their
                  infancynow use Lorem Ipsum as their default model text,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* client section end */}
      {/* blog section start */}
      <div className="blog_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="about_taital">Our Blog</h1>
              <div className="bulit_icon">
                <img src="images/bulit-icon.png" />
              </div>
            </div>
          </div>
          <div className="blog_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="blog_box">
                  <div className="blog_img">
                    <img src="images/blog-img1.png" />
                  </div>
                  <h4 className="date_text">05 April</h4>
                  <h4 className="prep_text">PREP TECHNIQUES Coffee</h4>
                  <p className="lorem_text">
                    distracted by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a
                    moredistracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a more
                  </p>
                </div>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="blog_box">
                  <div className="blog_img">
                    <img src="images/blog-img2.png" />
                  </div>
                  <h4 className="date_text">05 April</h4>
                  <h4 className="prep_text">PREP TECHNIQUES Coffee</h4>
                  <p className="lorem_text">
                    distracted by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a
                    moredistracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a more
                  </p>
                </div>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog section end */}
      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">Get In Touch</h1>
              <div className="bulit_icon">
                <img src="images/bulit-icon.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <div className="mail_section_1">
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Your Name"
                    name="Your Name"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Your Email"
                    name="Your Email"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Your Phone"
                    name="Your Phone"
                  />
                  <textarea
                    className="massage-bt"
                    placeholder="Massage"
                    rows={5}
                    id="comment"
                    name="Massage"
                    defaultValue={""}
                  />
                  <div className="send_bt">
                    <a href="#">SEND</a>
                  </div>
                </div>
              </div>
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width={250}
                    height={500}
                    frameBorder={0}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section end */}
      {/* footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="address_text">Address</h1>
              <p className="footer_text">
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use{" "}
              </p>
              <div className="location_text">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true" />
                      <span className="padding_left_10">+01 1234567890</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span className="padding_left_10">demo@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="form-group">
                <textarea
                  className="update_mail"
                  placeholder="Your Email"
                  rows={5}
                  id="comment"
                  name="Your Email"
                  defaultValue={""}
                />
                <div className="subscribe_bt">
                  <a href="#">
                    <img src="images/teligram-icon.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <p className="copyright_text">
                2020 All Rights Reserved. Design by{" "}
                <a href="https://html.design">Free Html Templates</a>
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="footer_social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright section end */}
      {/* Javascript files*/}
      {/* 
  <!-- sidebar */}
      --&gt;
    </>
  )
}

export default App
