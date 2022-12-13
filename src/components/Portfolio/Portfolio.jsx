import React, { useEffect, useState } from "react";
import cabin from "./cabin.png";
import cake from "./cake.png";
import circus from "./circus.png";
import game from "./game.png";
import safe from "./safe.png";
import submarine from "./submarine.png";
export default function Portfolio() {
  // useEffect(() => {
  //   openWindow();
  // }, []);
  // function openWindow() {
  //   let imgs = Array.from(document.querySelectorAll(".card-img-top"));

  //   imgs.map((img) => {
  //     console.log("ffff " + img);

  //     img.addEventListener("click", function (e) {
  //       let x = e.target;
  //       let imgSrc = x.getAttribute("src");
  //       document
  //         .querySelector(".lightbox-container")
  //         .classList.remove("d-none");
  //       document.querySelector(".lightbox-container").classList.add("d-flex");
  //       // document.querySelector(".lightbox").innerHTML = `<img src=${imgSrc}/>`;
  //     });
  //   });
  // }

  const [imgs, setImgs] = useState([
    { id: 0, value: cabin, title: "LOG CABIN" },
    { id: 1, value: cake, title: "TASTY CAKE" },
    { id: 2, value: circus, title: "CIRCUS TENT" },
    { id: 3, value: game, title: "CONTROLLER" },
    { id: 4, value: safe, title: "LOCKED SAFE" },
    { id: 5, value: submarine, title: "SUBMARINE" },
  ]);

  // function popUp() {
  //   imgs.map((img) =>
  //     document.querySelector(".lightboxImg").setAttribute("src", `${img.value}`)
  //   );
  //   document.querySelector(".lightbox-container").classList.remove("d-none");
  //   document.querySelector(".lightbox-container").classList.add("d-flex");
  // }

  // imgs.map(
  //   (img) =>
  //     (img.onclick = function (e) {
  //       let x = e.target;
  //       let imgSrc = x.getAttribute("src");
  //       document
  //         .querySelector(".lightbox-container")
  //         .classList.remove("d-none");
  //       document.querySelector(".lightbox-container").classList.add("d-flex");
  //       // document.querySelector(".lightbox").innerHTML = `<img src=${imgSrc}/>`;
  //     })
  // );
  // let setSliderData = {};
  const [sliderData, setSliderData] = useState(imgs[0]);
  // useEffect(() => {
  //   document.body.addEventListener("click", function () {
  //     document.querySelector(".lightbox-container").classList.remove("d-flex");
  //     document.querySelector(".lightbox-container").classList.add("d-none");
  //   });
  // },[sliderData])
  function handleClick(i) {
    console.log(i);
    setSliderData(imgs[i]);
    document.querySelector(".lightbox-container").classList.remove("d-none");
    document.querySelector(".lightbox-container").classList.add("d-flex");
  }
  function closePopup() {
    document.querySelector(".lightbox-container").classList.remove("d-flex");
    document.querySelector(".lightbox-container").classList.add("d-none");
  }
  //.addEventListener("click", closePopup);
  // function closeBody() {
  //   document.body.onClick = function () {
  //     document.querySelector(".lightbox-container").classList.remove("d-flex");
  //     document.querySelector(".lightbox-container").classList.add("d-none");
  //   };
  // }
  // console.log(imgs[0].value);
  return (
    <>
      <section className="portfolio  text-center m-5 p-5 text-white d-flex justify-content-center align-items-center ">
        <div className="container w-100">
          <div className="row justify-content-center align-items-center">
            <h1 className="fw-bolder">PORTFOLIO</h1>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="star"> </div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star"> </div>
            </div>
            <div className="row g-3">
              {imgs.map((img, index) => (
                <>
                  <div className="col-lg-4 col-md-6 card-box" key={index}>
                    <div className="card">
                      <img
                        src={img.value}
                        className="w-100 card-img-top"
                        alt={img.title}
                      />
                      <div
                        key={img.id}
                        onClick={() => handleClick(index)}
                        className="card-body position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*lightbox*/}

      <div className="lightbox-container d-none justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0 w-100 h-100">
        <div className="lightbox bg-light w-75 h-75 text-center position-relative">
          <div className="position-absolute top-0 end-0">
            <i
              className="fa-solid fa-xmark pe-3 fa-xl fw-bolder"
              id="close"
              onClick={closePopup}
            ></i>
          </div>
          <h2 className="text-center pt-5 ">LOCKED SAFE</h2>
          <div className="d-flex portfolio justify-content-center align-items-center">
            <div className="star"> </div>
            <div>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="star"> </div>
          </div>
          <img src={sliderData.value} className="w-25 lightboxImg" alt="" />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
            inventore quisquam velit asperiores, vitae? Reprehenderit soluta,
            eos quod consequuntur itaque. Nam.
          </p>
          <button className="btn btn-send" onClick={closePopup}>
            <i className="fa-solid fa-xmark pe-3 text-white" id="close"></i>
            Close Window
          </button>
        </div>
      </div>
    </>
  );
}
