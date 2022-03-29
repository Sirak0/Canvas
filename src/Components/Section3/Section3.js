import React from "react";
import "./Section3.scss";
import "./Section3.responsive.scss";
import Image1 from "../../Images/slide-bg.png";
import {useEffect} from "react"




function Section3() {
    useEffect(() => {

        const itWorks = document.querySelector(".how-it-works")
        const mobileApp = document.querySelector(".mobile-app")
        
        setTimeout(() => {

            window.addEventListener("scroll", () => {
                if (window.scrollY > 1000 && window.scrollY < 1600) {
                    itWorks.style.left = "0px"
                    mobileApp.style.right = "0px"
                        
                       }
            });
           
        }, 1900)
    }, [])
   
   
   
    return (
        <section className="section3">

            <span class="angle2"></span>
            <span class="angle"></span>

            <div className="section3-content">
  

                <div className="section3-content1">

                    <h1 className="how-it-works">How it
                        <span> works </span>
                    </h1>
                    <p className="mobile-app">Display your mobile apps
                        awesome features with
                        icon lists and an image
                        carousel of each page.
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing
                        elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation.
                    </p>
                </div>

                <div className="section3-contents">
                    <div className="section3-content2">
                        <div className="section3-content2-1">
                            <div className="content2-1-text">
                                <h2>
                                    Lorem ipsum

                                </h2>
                                <p>
                                    Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.
                                </p>
                            </div>
                            <div className="icon-apple">
                                <i class="fab fa-apple fa-2x appleicon"></i>
                            </div>
                        </div>

                        <div className="section3-content2-2">
                            <div className="content2-1-text">

                                <h2>
                                    Lorem ipsum

                                </h2>
                                <p>
                                    Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.
                                </p>
                            </div>
                            <div className="icon-rocket">
                                <i class="fas fa-rocket fa-2x rocket-icon"></i>
                            </div>

                        </div>
                        <div className="section3-content2-3">
                            <div className="content2-1-text">
                                <h2>
                                    Lorem ipsum
                                </h2>
                                <p>
                                    Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.
                                </p>
                            </div>
                            <div className="icon-video">
                                <i class="fas fa-film fa-2x video-icon"></i>
                            </div>
                        </div>

                    </div>

                    <div className=" section3-content3">
                        <img src={Image1} className="iphone-img" />
                    </div>
                    <div className=" section3-content4">
                        <div className="section3-content4-1">
                            <div className="icon-android"><i class="fab fa-android fa-2x android-icon"></i></div>
                            <div className="content4-1-text">
                                
                                <h2>
                                    Lorem ipsum
                                </h2>
                                <p>
                                    Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.
                                </p>
                            </div>
                            
                        </div>
                        <div className="section3-content4-2">
                            <div className="icon-css3"><i class="fab fa-css3 fa-2x css3-icon"></i></div>
                            <div className="content4-1-text">
                                <h2>
                                    Lorem ipsum
                                </h2>
                                <p>
                                    Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.
                                </p>
                            </div>
                            
                        </div>
                        <div className="section3-content4-3">
                            <div className="icon-us"><i class="fas fa-users fs-3x us-icon"></i></div>
                            <div className="content4-1-text">
                                <h2>
                                    Lorem ipsum
                                </h2>
                                <p>
                                    Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum.
                                </p>
                            </div>
                            
                        </div>

                    </div>









                </div>
            </div>
        </section>
    )
}
export default Section3;