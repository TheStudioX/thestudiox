
import portfolio1 from './img/portfolio/portfolio-1.jpg';
import portfolio2 from './img/portfolio/portfolio-2.jpg';
import portfolio3 from './img/portfolio/portfolio-3.jpg';
import portfolio4 from './img/portfolio/portfolio-4.jpg';
import portfolio5 from './img/portfolio/portfolio-5.jpg';
import portfolio6 from './img/portfolio/portfolio-6.jpg';
import portfolio7 from './img/portfolio/portfolio-7.jpg';
import portfolio8 from './img/portfolio/portfolio-8.jpg';
import portfolio9 from './img/portfolio/portfolio-9.jpg';
import about from './img/about.jpg';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap-icons/bootstrap-icons.css';
import './vendor/boxicons/css/boxicons.min.css';
import './vendor/glightbox/css/glightbox.min.css';
import './vendor/swiper/swiper-bundle.min.css';
import './js/main.js';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [scrollY, setScrollY] = useState(0);
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  function logit() {
    setScrollY(window.pageYOffset);

    let selectHeader = select('#header')
    if (selectHeader) {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <body>
      <header id="header" className="fixed-top header-transparent">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">The StudioX</a></h1>


          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container position-relative">
          <h1>Welcome to The StudioX</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <img src={about} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h3>Voluptatem dignissimos provident quasi</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <i className="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                  <div className="col-md-6">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris nisi</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="counts" className="counts section-bg">
          <div className="container">

            <div className="row counters">

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hard Workers</p>
              </div>

            </div>

          </div>
        </section>

        <section id="services" className="services">
          <div className="container">

            <div className="section-title">
              <h2>Services</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4><a href="">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-orange ">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4><a href="">Sed Perspiciatis</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4><a href="">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-yellow">
                  <div className="icon">
                    <i className="bx bx-layer"></i>
                  </div>
                  <h4><a href="">Nemo Enim</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-red">
                  <div className="icon">
                    <i className="bx bx-slideshow"></i>
                  </div>
                  <h4><a href="">Dele Cardo</a></h4>
                  <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4><a href="">Divera Don</a></h4>
                  <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="portfolio" class="portfolio">
          <div class="container">

            <div class="section-title">
              <h2>Portfolio</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div class="row portfolio-container">

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={portfolio1} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src={portfolio2} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={portfolio3} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src={portfolio4} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src={portfolio5} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={portfolio6} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src={portfolio7} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src={portfolio8} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src={portfolio9} class="img-fluid" alt=""/>
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="cta" className="cta">
          <div className="container">

            <div className="text-center">
              <h3>Call To Action</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="cta-btn" href="#">Call To Action</a>
            </div>

          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row">

              <div className="col-lg-6">

                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <i className="bx bx-map"></i>
                      <h3>Our Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com<br/>contact@example.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-phone-call"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>The StudioX</h3>
                <p>
                  A108 Adam Street <br/>
                  New York, NY 535022<br/>
                  United States <br/><br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>The StudioX</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
