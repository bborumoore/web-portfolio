import React from "react";
import './style.css';
import EmailIcn from "../../assets/images/gmailIcon.png";
import PhoneIcn from "../../assets/images/phoneIcon.png";
import GitHubIcn from "../../assets/images/githubIcon.png";
import LinkedInIcn from "../../assets/images/linkedinIcon.png";

// Basic footer intended for entire site.  Goal is to have contact information easily available, with universal icons rather than text
function Footer() {
    return (
        <footer id="contact-info">
            <a href="mailto:bborumoore@gmail.com"><img src = {EmailIcn} alt = "email icon" class = "footer-icon" id = "email-svg" width = "64px" /></a>
            <img src = {PhoneIcn} width = "64px" alt = "phone icon" id = "phone-svg" />
            <a href= "https://github.com/bborumoore" target="_blank" rel = "noreferrer"><img src = {GitHubIcn} class = "footer-icon" alt = "GitHub icon" id = "github-logo" width = "64px" margin = "0px 2px"/></a>
            <a href= "https://www.linkedin.com/in/brianbmoore/" target="_blank" rel = "noreferrer"><img src = {LinkedInIcn} alt = "LinkedIn icon" class = "footer-icon" id = "linkedin-logo" width = "64px" /></a>
        </footer>
    );
}

export default Footer;