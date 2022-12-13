import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" text-center">
        <div className="container-fluid text-white">
          <div className="row box p-5">
            <div className="col-md-4 mb-5">
              <h4>LOCATION</h4>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
            <div className="col-md-4 mb-5">
              <h4 className="text-center">AROUND THE WEB</h4>
              <div className="social d-flex justify-content-center">
                <div className="icons rounded-circle m-1  d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icons rounded-circle m-1  d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="icons rounded-circle m-1  d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>

                <div className="icons rounded-circle m-1  d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-dribbble"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h4>ABOUT FREELANCER</h4>
              <p className="m-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </p>
            </div>
          </div>
          <div className="row copy justify-content-center align-items-center">
            <div className="col-md-12 m-3">
              <p className="m-0">Copyright © Your Website 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
