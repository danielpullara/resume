import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render() {
    return (
      <div className="App">

          {/* <!-- ======= Header ======= --> */}
          <header id="header">
            <div className="d-flex flex-column">

              <div className="profile">
                <img src={require("../src/img/profile/profile-img.jpg")} alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Daniel Pullara</a></h1>
                <div className="social-links mt-3 text-center">
                 
                  <a href="https://www.instagram.com/danpullara/" className="instagram"><i className="bx bxl-instagram"></i></a>
                 
                  <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                 
                  <a href="https://github.com/danielpullara" className="github"><i className="bx bxl-github"></i></a>
                </div>
              </div>

              <nav className="nav-menu">
                <ul>
                  <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                  <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                  <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                  <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                  <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>

                </ul>
              </nav>
              {/* <-- .nav-menu --> */}
              <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

            </div>
          </header>
          {/* <!-- End Header --> */}

          {/* <!-- ======= Hero Section ======= --> */}
          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
              <h1>Daniel Pullara</h1>
              <p>I'm a Web Developer<span className="typed" data-typed-items=" Web Developer, Commercial Drone Pilot, Photographer"></span></p>
            </div>
          </section>
          {/* <-- End Hero --> */}

          <main id="main">

            {/* <!-- ======= About Section ======= --> */}
            <section id="about" className="about">
              <div className="container">

                <div className="section-title">
                  <h2>About</h2>
                  <p>As a Full Stack web-developer I create responsive layout through a variety of computer languages, such as HTML or JavaScript.</p>
                </div>

                <div className="row">
                  <div className="col-lg-4" data-aos="fade-right">
                    <img src={require("./img/profile/profile-img.jpg")} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>UI/UX Designer &amp; Web Developer.</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> September 8th 1992</li>
                          <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> dronesinhawaii.com</li>
                          <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +1(415)-351-8738</li>
                          <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Honolulu, USA</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 28</li>
                          <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> info@dronesinhawaii.com</li>
                          <li><i className="icofont-rounded-right"></i> <strong>Desired Position</strong> Full-Time Junior Developer</li>
                        </ul>
                      </div>
                    </div>
                    <p>
                    Former account-executive seeking new challenges to develop clean functional code for Tech Company.  I want to surround myself with programmers and professionals who want to excel and evolve.
            </p>
                  </div>
                </div>

              </div>
            </section>
            {/* <!-- End About Section --> */}

            {/* <!-- ======= Facts Section ======= --> */}
            <section id="facts" className="facts">
              <div className="container">

                <div className="section-title">
                  <h2>Facts</h2>
                </div>

                <div className="row no-gutters">

                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                    <div className="count-box">
                      <i className="icofont-worker"></i>
                      <span data-toggle="counter-up">+2K</span>
                      <p><strong>Hours</strong> Professional Coding Exp.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="count-box">
                      <i className="icofont-code-alt"></i>
                      <span data-toggle="counter-up">3</span>
                      <p><strong>Languages</strong> HTML/CSS/JS</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div className="count-box">
                      <i className="icofont-clock-time"></i>
                      <span data-toggle="counter-up">+2.5</span>
                      <p><strong>Years</strong> In Corperate Tech Industry</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                    <div className="count-box">
                      <i className="icofont-document-folder"></i>
                      <span data-toggle="counter-up">4</span>
                      <p><strong>Projects </strong>Individual & Collaborative </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- End Facts Section --> */}

            {/* <!-- ======= Skills Section ======= --> */}
            <section id="skills" className="skills section-bg">
              <div className="container">

                <div className="section-title">
                  <h2>Skills</h2>
                  <p> Commercial UAS pilot experienced working with the following: Visual Studio, Terminal, Github, Netlify, Zoom, iMovie, Premier Pro, OAuth, API Configuration, FileZilla, Discord, React, DJI GO 4 </p>
                </div>

                <div className="row skills-content">

                  <div className="col-lg-6" data-aos="fade-up">

                    <div className="progress">
                      <span className="skill">HTML<i className="val">50%</i></span>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width:'50%'}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">CSS<i className="val">40%</i></span>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width:'40%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">Javascript & React JS <i className="val">40%</i></span>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width:'40%'}}role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                    <div className="progress">
                      <span className="skill">Teamwork<i className="val">50%</i></span>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width:'50%'}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">Presentation skills<i className="val">50%</i></span>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width:'50%'}}  role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">Adaptability<i className="val">55%</i></span>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar" style={{width:'55%'}}  role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </section>
            {/* <!-- End Skills Section --> */}

            {/* <!-- ======= Resume Section ======= --> */}
            <section id="resume" className="resume">
              <div className="container">

                <div className="section-title">
                  <h2>Resume</h2>
                  <p></p>
                </div>

                <div className="row">
                  <div className="col-lg-6" data-aos="fade-up">
                    <h3 className="resume-title">Quincy Solano</h3>
                    <div className="resume-item pb-0">
                      <h4>Reference (Former Manager & Mentor)</h4>
                      <p><em>Quincy, was my former supervisor. As the Marketing Manger he was someone that helped develope my own work priciples.  </em></p>
                      <ul>
                        <li>Honolulu, HI</li>
                        <li>+1(808)-381-2552</li>
                        <li>quincy@cleverwolfdigital.com</li>
                      </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                      <h4>CoderSchool | HCMC, Vietnam</h4>
                      <h5>Feb 2020 - May 2020</h5>
                      <p><em>
                      CoderSchool, A three-month full-stack web development bootcamp where I learned how to code and progrm. Not only did I learn how to program (using ReactJS and Python-Flask) but I also learned a lot about version control, server deployment, project management, teamwork, etc.</em></p>
                    </div>
                    <div className="resume-item">
                      <h4>Western Connecticut State University &amp; Legal Studies</h4>
                      <h5>2010-2014</h5>
                      <p><em>School of Business and Law Administration</em></p>
                      <p> Western Connecticut State University is recognized as a premier public university. As an alumni of the Justice and Law Administration (JLA) I was prepared for a variety of career choices in law, public service, social systems and private enterprises.</p>
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                      <h4>Yelp! | Account Exectutive</h4>
                      <h5>2016-2017</h5>
                      <p><em>San Francisco, CA</em></p>
                      <ul>
                        <li>As a susidiary of Yelp! EAT24 was an online Food Orderiing Marketplace. As an Account Executive, my role was to contact small business restaurants and convince them to accept orders through the platform.</li>
                        <li>Time Management and Accountability were skills developed.</li>
                        <li>60-80 Phone Calls a day through 4 time zones. Connections and relationships where Key</li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>IfOnly | Account Executive </h4>
                      <h5>2017 - 2018</h5>
                      <p><em>San Francisco, CA</em></p>
                      <ul>
                        <li>Developed numerous marketing programs to offer unique experiences through the form of tours, classes, and tastings. </li>
                        <li> My role was to find restaurants, vinyards, and content creators. willing to provide a special time for clients. </li>
                        <li>Consulted with clients on the most appropriate approach and design of their online offering.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>
            {/* <!-- End Resume Section --> */}

            {/* <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" className="portfolio section-bg">
              <div className="container">

                <div className="section-title">
                  <h2>Portfolio</h2>
                  <p></p>
                </div>

                <div className="row" data-aos="fade-up">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">All</li>
                      <li data-filter=".filter-app">App</li>
                      {/* <li data-filter=".filter-card">Card</li> */}
                      <li data-filter=".filter-web">Web</li>
                    </ul>
                  </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                  <div className="col-lg-6 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-1.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        {/* <a href="https://quirky-torvalds-1b13a2.netlify.com" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a> */}
                        <a href="https://quirky-torvalds-1b13a2.netlify.com" title="More Details"><i className="bx bx-plus"></i></a>
                        <a href="https://github.com/danielpullara/movieapp-react" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-2.jpg")}className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        {/* <a href="https://laughing-knuth-1c9dae.netlify.com" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a> */}
                        <a href="https://laughing-knuth-1c9dae.netlify.com" title="More Details"><i className="bx bx-plus"></i></a>

                        <a href="https://github.com/danielpullara/Javascript-Game" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-3.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-4.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        <a href="../src/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-5.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-6.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-7.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-8.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img src={require("../src/img/portfolio/portfolio-9.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div> */}

                </div>

              </div>
            </section>
            {/* <!-- End Portfolio Section --> */}

            

           

            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact">
              <div className="container">

                <div className="section-title">
                  <h2>Contact</h2>
                  <p></p>
                </div>

                <div className="row" data-aos="fade-in">

                  <div className="col-12" >
                    <div className="info" >
                      <div className="address">                       
                        <h4>Location:</h4>
                        <p>3516B Waialea Avenue,Honolulu Hi 96816</p>
                      </div>

                      <div className="email">
                        <h4>Email:</h4>
                        <p>info@dronesinhawaii.com</p>
                      </div>

                      <div className="phone">
                        <h4>Call:</h4>
                        <p>+1 (415)-351-8738</p>
                       
                      </div>

                      <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14870.75343893158!2d-157.80932543210866!3d21.283800084398194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d7ba6e1087d%3A0x4ce6b470bc1f7d38!2s3516%20Waialae%20Ave%2C%20Honolulu%2C%20HI%2096816%2C%20USA!5e0!3m2!1sen!2s!4v1586079418044!5m2!1sen!2s" frameBorder="0" style={{ border: '0', width: '100%', height: '290px' }} allowFullScreen></iFrame>
                    </div>

                  </div>

                  

                </div>

              </div>
            </section>
            {/* <!-- End Contact Section --> */}

          </main>
          {/* <!-- End #main --> */}

          {/* <!-- ======= Footer ======= --> */}
          <footer id="footer">
            <div className="container">
              <div className="copyright">
                &copy; Copyright <strong><span>iPortfolio</span></strong>
              </div>
              <div className="credits">
                {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer>
          {/* <!-- End  Footer --> */}

          <a href="index.html" className="back-to-top"><i className="icofont-simple-up"></i></a>

      </div>
    )
  };
}

export default App;
