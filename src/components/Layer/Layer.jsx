import React from "react";

export default function Layer() {
  let { id, value, title } = this.props.images;
  return (
      <>
          {console.log(value)}
      <div className="col-lg-4 col-md-6">
        <div className="card">
          <img src={value} className="w-100 card-img-top" alt="" />
          <div className="card-body  position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </>
  );
}
