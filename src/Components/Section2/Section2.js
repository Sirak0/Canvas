import React from "react";
import "./Section2.scss";
import "./Section2.responsive.scss";
import { useEffect } from "react";
import anime from 'animejs';
import { useState } from "react";
function Section2() {

    useEffect(() => {

        const welcome = document.querySelector(".welcome")
        const bootstrap = document.querySelector(".bootstrap")
        const nemo = document.querySelector(".nemo")
        setTimeout(() => {

            window.addEventListener("scroll", () => {
                if (window.scrollY > 400 && window.scrollY < 900) {
                    welcome.style.left = "0px"
                    bootstrap.style.right = "0px"
                    nemo.style.right = "0px"
                }       
                       
            });
        }, 1900)
    }, [])



    return (
        <section className="section2">
            <span className="angle2"></span>
            <span className="angle"></span>

            <div className="section2-content">


                <div className="section2-content1">

                    <h2 className="welcome">
                        <span className="hey">HEY THERE!</span> WELCOME TO OUR SITE
                    </h2>
                </div>
                <div className="section2-content2">
                    <h3 className="bootstrap">
                        Start Bootstrap has everything you need to get your
                    </h3>

                    <p className="nemo">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt.
                        Contrary to popular belief, Lorem Ipsum is not
                        simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making
                        it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in
                        Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum
                        passage, and going through the cites of the
                        word in classical literature, discovered the
                        undoubtable source. Lorem Ipsum comes from
                        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                        et Malorum" (The Extremes of Good and Evil) by
                        Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem
                        Ipsum, "Lorem ipsum dolor sit amet..", comes
                        from a line in section 1.10.32.<br></br><br></br>

                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit.<br></br><br></br>

                        Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est
                        laborum. Sed ut perspiciatis unde omnis iste natus
                        error sit<br></br><br></br>

                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit.
                    </p>

                </div>


            </div>
        </section>
    )
}
export default Section2;