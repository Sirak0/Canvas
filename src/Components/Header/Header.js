import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../Images/logo.png";
import { useEffect } from "react";
import "./Header.responsive.scss";



function Header() {


    useEffect(() => {
        const header = document.querySelector("header");
        const headerContent = document.querySelector(".header-content");



        const aboutItem = document.querySelector(".about");
        const howItem = document.querySelector(".how");
        const screenshotsItem = document.querySelector(".screenshots");
        const priceItem = document.querySelector(".price");
        const contactsItem = document.querySelector(".contacts");
        const logoBan = document.querySelector(".logo-div");
        const listDiv = document.querySelector(".list-div");
        const menuResponsive = document.querySelector(".menu-responsive");


        menuResponsive.addEventListener("click", () => {


            if (listDiv.style.display === "block") {
                listDiv.style.display = "none";
            } else {
                listDiv.style.display = "block";
            }

        })
        if (window.innerWidth >= 800) {
            logoBan.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            })



            aboutItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 610,
                    behavior: "smooth"
                })
            })
            howItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 1380,
                    behavior: "smooth"
                })
            })
            screenshotsItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 2360,
                    behavior: "smooth"
                })
            })
            contactsItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 3410,
                    behavior: "smooth"
                })
            })
        } else if (window.innerWidth < 900 && window.innerWidth > 500) {
            logoBan.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            })



            aboutItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 770,
                    behavior: "smooth"
                })
            })
            howItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 1830,
                    behavior: "smooth"
                })
            })
            screenshotsItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 4230,
                    behavior: "smooth"
                })
            })
            contactsItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 5100,
                    behavior: "smooth"
                })
            })
        } else if (window.innerWidth < 500) {
            logoBan.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            })



            aboutItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 770,
                    behavior: "smooth"
                })
            })
            howItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 2600,
                    behavior: "smooth"
                })
            })
            screenshotsItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 4990,
                    behavior: "smooth"
                })
            })
            contactsItem.addEventListener("click", () => {
                window.scrollTo({
                    top: 5900,
                    behavior: "smooth"
                })
            })
        }



        const listItems = document.querySelectorAll(".list-item")
        listItems.forEach((elem, index, all) => {
            elem.addEventListener("click", () => {
                listItems.forEach((elem, index, all) => {
                    elem.setAttribute("id", "")
                })
                elem.setAttribute("id", "active")
            })
        })

        if (window.innerWidth < 830) {
            headerContent.style = "height:80%;"
            header.style = "height: 65px;background-color: #333333;"
            listDiv.style = "background-color:#333333;"
            menuResponsive.style = "background-color:none;"
        }

        window.addEventListener("scroll", () => {
            let scrollY = window.scrollY;
            console.log(window.scrollY)
            if (window.innerWidth > 830 && scrollY > 10) {
                headerContent.style = "height:80%;"
                header.style = "height: 65px;background-color: #333333;"
                listDiv.style = "background-color:#333333;"
                menuResponsive.style = "background-color:none;"
            } else if (window.innerWidth > 830 && scrollY < 10) {
                headerContent.style = ""
                header.style = ""
                listDiv.style = ""
                menuResponsive.style = ""


            } else {
                headerContent.style = "height:80%;"
                header.style = "height: 65px;background-color: #333333;"
                listDiv.style = "background-color:#333333;"
                menuResponsive.style = "background-color:none;"
            }

        })
    }, [])




    return (
        <header>
            <div className="header-content">
                <div className="logo-div">
                    <img src={Logo} alt="Canvas" className="logo" />
                </div>
                <div className="list-div">
                    <ul className="list">
                        <li className="list-item about" >About</li>
                        <li className="list-item how">How it works</li>
                        <li className="list-item screenshots">Screenshots</li>
                        <li className="list-item contacts">Contacts</li>
                    </ul>
                </div>
                <div className="menu-responsive">
                    <i className="fas fa-bars menu-icon"></i>
                </div>
            </div>
        </header>
    )
}

export default Header;