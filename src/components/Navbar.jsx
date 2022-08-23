import React from "react";
// import { span } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container d-flex">
        <span
          class="navbar-brand position-relative text-decoration-none"
          to="/"
        >
          <i class="fa-solid fa-champagne-glasses"></i>
          DA` DONS
        </span>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon menu-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item p-2">
              <span class="nav-link" to="contact-us">
                Home
              </span>
            </li>
            <li class="nav-item p-2">
              <span class="nav-link" to="contact-us">
                About Us
              </span>
            </li>
            <li class="nav-item p-2">
              <span class="nav-link" to="contact-us">
                Menu
              </span>
            </li>
            <li class="nav-item p-2">
              <span class="nav-link" to="contact-us">
                Blog
              </span>
            </li>
            <li class="nav-item p-2">
              <span class="nav-link" to="contact-us">
                Contact Us
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
