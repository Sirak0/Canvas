import React from "react";
import "./Section4.scss";
import "./Section4.responsive.scss";
import Image1 from "../../Images/owl1.jpg";
import Image2 from "../../Images/owl2.jpg";
import Image3 from "../../Images/owl3.jpg";
import Image4 from "../../Images/owl4.jpg";
import {useEffect,useRef} from "react";
import {useDispatch} from "react-redux";

function Section4() {
      const intervalRef = useRef()
      const dispatch = useDispatch()
      useEffect(()=>{
       const button1 = document.querySelector("#button1");
       const button2 = document.querySelector("#button2");
       const sliderCont = document.querySelector(".slider-cont");
       const  screen= document.querySelector(".screen")
       const yourMobile = document.querySelector(".your-mobile")
       setTimeout(() => {

           window.addEventListener("scroll", () => {
               if (window.scrollY > 2000 && window.scrollY < 2400) {
                   
                   screen.style.left = "0px"
                 yourMobile.style.right = "0px"
                      }
           });
           
           
       }, 1900)
      
      
      
       intervalRef.current = setInterval(()=>{
       console.log(sliderCont.style.left)
        if(sliderCont.style.left === "0px"){
           sliderCont.style.left = "-33%"
           button2.style.backgroundColor="#5B5B5B"
           button1.style.backgroundColor="#869791"
           
       }else{
           sliderCont.style.left = "0px"
           button1.style.backgroundColor="#5B5B5B"
           button2.style.backgroundColor="#869791"
           
       }
       },2000)
      },[])
   function show(event){
     dispatch({
         type:"view",
         payload:event.target.src
     })
   }
   
    return (
        <section className="section4">
            <span className="angle2"></span>
            <span className="angle"></span>

            <div className="section4-content1">
                <h1 className="screen">Screen
                    <span> Shots </span>
                </h1>
                <p className="your-mobile">Display your mobile apps
                    awesome features with icon
                    lists and an image carousel
                    of each page. Lorem ipsum
                    dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut
                    laoreet dolore magna aliquam
                    erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud
                    exerci tation.
                </p>
            </div>
            <div className="section4-content2" >
                <div className="slider-cont">
                    <div className="slider-item">
                        <img src={Image1} className="slider-image" onClick={show} />
                        <i class="fas fa-camera fa-3x camera"></i>
                    </div>
                    <div className="slider-item">
                        <img src={Image2} className="slider-image" onClick={show}/>
                        <i class="fas fa-camera fa-3x camera"></i>
                    </div>
                    <div className="slider-item">
                        <img src={Image3} className="slider-image" onClick={show} />
                        <i class="fas fa-camera fa-3x camera"></i>
                    </div>
                    <div className="slider-item">
                        <img src={Image4} className="slider-image" onClick={show} />
                        <i class="fas fa-camera fa-3x camera"></i>
                    </div>
                    
                </div>

            </div>

            <div className="buttons-cont">
                <div className="slider-button" id="button1"></div>
                <div className="slider-button " id="button2"></div>
            </div>



        </section>
    )
}
export default Section4;