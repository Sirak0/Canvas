import React from "react";
import "./Section1.scss";
import Image from "../../Images/phones.png";
import "./Section1.responsive.scss";
import Image1 from "../../Images/bg_slilder-1.jpg";
import { useEffect } from "react";
import anime from "animejs";

function Section1() {
  useEffect(() => {
    const phoneImage = document.querySelector(".phone-image");
    const title = document.querySelector("h1");
    const forSmartphone = document.querySelector(".for-smartphone");
    const smartphoneDescription = document.querySelector(
      ".smartphone-description"
    );
    const downloadButton = document.querySelector(".download");
    setTimeout(() => {
      if (window.scrollY >= 0 && window.scrollY < 450) {
        anime({
          targets: "h1",
          fontSize: "38px",
        });
        anime({
          targets: ".for-smartphone",
          fontSize: "20px",
        });
        anime({
          targets: ".smartphone-description",
          fontSize: "18px",
        });
        anime({
          targets: ".download",
          width: "235px",
          height: "60px",
        });
        phoneImage.style.left = "0px";
      }
      console.log(window.scrollY);
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0 && window.scrollY < 440) {
          anime({
            targets: "h1",
            fontSize: "38px",
          });
          anime({
            targets: ".for-smartphone",
            fontSize: "20px",
          });
          anime({
            targets: ".smartphone-description",
            fontSize: "18px",
          });
          anime({
            targets: ".download",
            width: "235px",
            height: "60px",
          });
          phoneImage.style.left = "0px";
        }
      });
    }, 1500);
  }, []);
  return (
    <section className="section1">
      <img className="bg-image" src={Image1} alt="back-img" />
      <div className="section1-content">
        <div className="section1-content1">
          <h1>FRIENDLY TEMPLATE FOR YOUR APP</h1>
          <h2 className="for-smartphone">FOR YOUR SMARTPHONE</h2>
          <p className="smartphone-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We ensure
            sit amet, consectetur adipiscing elit
          </p>

          <button className="download">
            {" "}
            <p className="button-p">Free Download </p>
            <div className="download-icon-div">
              <i className="fas fa-cloud-download-alt download-icon"></i>
            </div>
          </button>
        </div>

        <div className="section1-content2">
          <img src={Image} alt="Smartphones" className="phone-image" />{" "}
        </div>
      </div>
    </section>
  );
}
export default Section1;
