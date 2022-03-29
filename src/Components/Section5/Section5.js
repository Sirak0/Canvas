import React from "react";
import "./Section5.scss";
import "./Section5.responsive.scss";


function Section5() {



    return (
        <section className="section5">
            <div className="section5-content1">

                <h1>Contact
                    <span> Us </span>
                </h1>
                <p>Display your mobile apps awesome
                    features with icon lists and an
                    image carousel of each page.
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi
                    enim ad minim veniam, quis nostrud exerci tation.
                </p>

            </div>
            <div className="section5-content2">
                <div className="form-div">
                    <form>
                        <input type="text" placeholder="Name"></input>
                        <input type="email" placeholder="E-mail" ></input>
                        <input type="text" placeholder="Message"></input>
                        <button className="send">Send Message</button>
                    </form>
                </div>


                <div className="google-map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2s!4v1644334802271!5m2!1sru!2s"  allowfullscreen="" loading="lazy"></iframe></div>
                <div className="footer-contacts">
                    <h3>California, United States</h3>
                    <div>
                        <p>785, Firs Avenue, place Mall,
                            <br />
                            Tel: 01 234-56786
                            <br />
                            Mobile: 01 234-56786
                            <br />
                            E-mail:
                            <a href="mailto:info@templatestock.com">info@templatestock.com</a>
                        </p>
                        <a href="#">Get directions on the map →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section5;