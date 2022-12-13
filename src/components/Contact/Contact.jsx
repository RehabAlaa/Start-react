import React, { useState } from "react";

export default function Contact() {
  // const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  // const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  // const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  // const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState(false);
  function nameHandler(e) {
    let userName = e.target.value;
    let regularName = /^[a-z]{4,8}$/;
    if (regularName.test(userName) === true) {
      setNameErr(false);
      return true;
    } else {
      setNameErr(true);
      return false;
    }
  }
  function emailHandler(e) {
    let userEmail = e.target.value;
    let regularEmail = /^[a-z]+\@(gmail|yahoo|hotmail)(\.com)$/;
    if (regularEmail.test(userEmail) === true) {
      setEmailErr(false);
      return true;
    } else {
      setEmailErr(true);
      return false;
    }
  }

  function phoneHandler(e) {
    let userPhone = e.target.value;
    let regularPhone = /^01[0-1-2-5][0-9]{8}$/;
    if (regularPhone.test(userPhone) === true) {
      setPhoneErr(false);
      return true;
    } else {
      setPhoneErr(true);
      return false;
    }
  }
  function messageHandler(e) {
    let userMessage = e.target.value;
    let regularMessage = /^[a-z]{3,}$/;
    if (regularMessage.test(userMessage) === true) {
      setMessageErr(false);
      return true;
    } else {
      setMessageErr(true);
      return false;
    }
  }
  function submitHandler() {
    if (
      nameHandler() === true &&
      emailHandler() === true &&
      phoneHandler() === true &&
      messageHandler() === true
    ) {
      alert("you are submited");
    } else {
      alert("you are faild to submit");
    }
  }
  return (
    <>
      <section className="contact text-center mt-5 pt-5 d-flex justify-content-center align-items-center ">
        <div className="container w-100 ">
          <div className="row justify-content-center align-items-center">
            <h1 className="fw-bolder">CONTACT ME</h1>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="star"> </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star"> </div>
            </div>
            <div className="row w-75  justify-content-center align-items-center mx-auto">
              <div className="col-md-9 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-100 pb-4"
                  onChange={nameHandler}
                />
                {nameErr ? (
                  <span className="text-danger">invalid Name</span>
                ) : null}
              </div>
              <div className="col-md-9 mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-100  pb-4"
                  onChange={emailHandler}
                />
                {emailErr ? (
                  <span className="text-danger">invalid Email</span>
                ) : null}
              </div>
              <div className="col-md-9 mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-100  pb-4"
                  onChange={phoneHandler}
                />
                {phoneErr ? (
                  <span className="text-danger">invalid Phone</span>
                ) : null}
              </div>
              <div className="col-md-9 mb-4">
                <textarea
                  cols="10"
                  rows="5"
                  className="w-100  pb-4"
                  placeholder="Message"
                  onChange={messageHandler}
                ></textarea>
                {messageErr ? (
                  <span className="text-danger">invalid Message</span>
                ) : null}
              </div>
              <div className="col-md-9 mb-4 text-start">
                <button className="btn btn-send btn-xl" onClick={submitHandler}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
