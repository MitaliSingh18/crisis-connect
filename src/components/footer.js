import React from 'react';
import logo from "../trials/pics/logobw (1).png";
import logo2 from "../trials/pics/favicon_io2/apple-touch-icon.png";
import "./footer.css";

function footer() {
  return (
    <div className="footer">
        
  <section class="footer">
    <div class="container">
      <div class="col-wrapper">
        <div class="col-1">
          <div class="logo"><b>CRISIS CONNECT</b></div>

        </div>
        <div class="col-1">
          <ul>
            <li><a class="header" href="">More info</a></li>
            <li><a href="">About Crisis Connect</a></li>
            <li><a href="">Terms and Condition</a></li>
            <li><a href="">Frequently asked Questions</a></li>
          </ul>
        </div>
        <div class="col-1">
          <ul>
            <li><a class="header" href="">Contact Us</a></li>
            <li><a href="">nancysoni004@gmail.com</a></li>
            <li><a href="">dhruv.gupta1873@gmail.com</a></li>
            <li><a href="">itskushagra.fcb@gmail.com</a></li>
          </ul>
        </div>
        <div class="col-1">
          <ul>
            <li><a class="header" href="">Key Highlights</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Upcoming Events</a></li>
            <li><a href="">Feedbacks</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="social-media">
    <div class="container">
      <div class="social-wrapper">
        <div class="copyright">Copyright &copy; Tech Mavericks</div>
        <div class="icons"><i class="fa fa-facebook"></i><i class="fa fa-twitter"></i></div>
        {/* <div class="slug"><span>Made with Love By</span><img src={logo} alt="hello"/></div> */}
      </div>
    </div>
  </section>
    </div>

  );
}

export default footer;
