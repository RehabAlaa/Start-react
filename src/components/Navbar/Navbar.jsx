import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navbarChange, setNavbarchange] = useState(false);
  const changeNavbarScroll = () => {
    if (window.scrollY >= 80) {
      setNavbarchange(true);
    } else {
      setNavbarchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarScroll);

  return (
    <>
      <nav
        className={
          navbarChange
            ? "navbar navbar-expand-lg navbar-dark py-2 px-0 position-fixed top-0 start-0 end-0"
            : "navbar navbar-expand-lg navbar-dark py-4 position-fixed top-0 start-0 end-0 px-5"
        }
      >
        <div className="container">
          <Link
            className={
              navbarChange
                ? "navbar-brand fw-bolder fa-lg"
                : "navbar-brand fw-bolder fa-xl"
            }
            to=""
          >
            START REACT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
