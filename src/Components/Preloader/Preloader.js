import React from "react";
import "./Preloader.scss";
import { useEffect } from "react";
function Preloader() {

  useEffect(() => {
    window.addEventListener("load", () => {
      let preloaderCont = document.querySelector(".preloader-cont")

      setTimeout(() => {
        preloaderCont.style.display = "none"
      }, 1500)

    })
  }, [])


  return (
    <div className="preloader-cont">
      <div className="loader"></div>
    </div>
  )
}
export default Preloader;