import React from "react";

export default function About() {
  return (
    <>
      <header className="text-center text-white d-flex justify-content-center align-items-center">
        <div className="container-fluid w-100 ">
          <div className="row justify-content-center align-items-center">
            <h1 className="fw-bolder">ABOUT</h1>
            <div className="d-flex justify-content-center align-items-center">
              <div className="star"> </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star"> </div>
            </div>
            <div className="row text-start w-75 mx-auto">
              <div className="offset-lg-2 col-lg-4 my-lg-0 my-md-3">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-lg-4 ">
                <p>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>


        
      </header>
    </>
  );
}
