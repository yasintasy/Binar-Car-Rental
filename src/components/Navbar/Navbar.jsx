import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/logo.png"
// import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container ">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo} alt=""></img>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="staticBackdrop"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="sideBar offcanvas offcanvas-end"
          id="navbarNav"
          aria-labelledby="offcanvasLabel"
          data-bs-backdrop="static"
          tabindex="-1"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">
              BINAR CAR RENTAL
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul className="navbar-nav ms-md-0 ms-xl-auto ms-sm-0">
              <li className="nav-item ms-3">
                <a className="nav-link" href="#OurServices">
                  Our Service
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#WhyUs">
                  Why Us
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#Testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="#FAQ">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
