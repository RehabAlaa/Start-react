import React from "react";
// import "./../../images/avatar-380-456332.webp";
import avatar from "./avataaars.svg";
export default function Home() {
  return (
    <>
      <header className="text-center text-white d-flex justify-content-center align-items-center">
        <div className="container-fluid w-100 ">
          <div className="row justify-content-center align-items-center">
            <img src={avatar} className="w-25" alt="home logo" />
            <h1 className="fw-bolder">START REACT</h1>
            <div className="d-flex justify-content-center align-items-center">
              <div className="star"> </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star"> </div>
            </div>
            <p className="fw-light m-0">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
