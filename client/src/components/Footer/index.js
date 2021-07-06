import React from "react";
import './style.css';

function Footer() {
    return (
        <footer id="contact-info">
            <a href="mailto:bborumoore@gmail.com"><img src = "./assets/images/gmailIcon.png" alt = "email icon" class = "footer-icon" id = "email-svg" width = "64px" /></a>
            <img src = "./assets/images/phoneIcon.png" width = "64px" alt = "phone icon" id = "phone-svg" />
            <a href= "https://github.com/bborumoore" target="_blank" rel = "noreferrer"><img src = "./assets/images/githubIcon.png" class = "footer-icon" alt = "GitHub icon" id = "github-logo" width = "64px" margin = "0px 2px"/></a>
            <a href= "https://www.linkedin.com/in/brianbmoore/" target="_blank" rel = "noreferrer"><img src = "./assets/images/linkedinIcon.png" alt = "LinkedIn icon" class = "footer-icon" id = "linkedin-logo" width = "64px" /></a>
        </footer>
    );
}

export default Footer;