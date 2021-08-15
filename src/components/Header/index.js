import React, { Component } from 'react';
// import { MenuItems } from './MenuItems';
// import { Button } from '../Button';
import './style.css';
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-dom";

class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: this.state.clicked})
    }

    // -----------------------------------------------------------------------------------------------
    // This was something that I tried to modularize and import the dynamic list for a more elegant solution,
    // but I couldn't get the navigation to work when deployed to gh pages.  In order to overcome that,
    // the only solution I found was to hardcode in links.
    // -----------------------------------------------------------------------------------------------

    // Header intended for use across site, to allow easy navigation
    // render() {
    //     return(
    //         <nav className="NavbarItems">
    //             <h1 className="navbar-logo">Brian Moore - Web Developer<i className="fab fa-react"></i></h1>
    //             <div className="menu-icon" onClick={this.handleClick}>
    //                 <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    //             </div>
    //             <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
    //                 {MenuItems.map((item, index) => {
    //                   // modular list allows me to change navbar items in MenuItems file
    //                   return (
    //                     <li key={index}>
    //                         <a className={item.cName} href={item.url} target={item.target}>
    //                             {item.title}
    //                         </a>
    //                     </li>
    //                   )  
    //                 })}
    //             </ul>
    //         </nav>
    //     )
    // }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Brian Moore - Web Developer<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a className="nav-link text-white" href="https://bborumoore.github.io/web-portfolio" target="">Home</a>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="https://www.linkedin.com/in/brianbmoore/" target="_blank">Social Media</a>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="https://github.com/bborumoore" target="_blank">GitHub Profile</a>
                    </li>
                    <li>
                        <Link className="nav-link text-white" to="/projects">Projects</Link>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="https://docs.google.com/document/d/14ZfXrSlGobIvjeXGFH1xaRrJxYCh4RshMVg8YPLABcw/edit?usp=sharing" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Header