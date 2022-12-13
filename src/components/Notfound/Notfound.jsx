import React from "react";

export default function Notfound() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-start align-items-center">
        <div className="row ">
          <div className="col-md-12">
            <h1 className="fw-bolder mb-5">Page Not Found 404</h1>
            <p className="lead mb-2">
              The requested URL was not found on this server.
            </p>
            <p>
              Additionally, a 404 Not Found error was encountered while trying
              to use an ErrorDocument to handle the request.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
