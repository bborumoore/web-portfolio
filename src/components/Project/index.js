import React from "react";
import "./style.css";
import ChowImg from "../../assets/images/chowNow.jpg";
import EmployeeTrackerImg from "../../assets/images/employeeTracker.png";
import eCommerceImg from "../../assets/images/eCommerce.png";
import MarsImg from "../../assets/images/Mars-At-Night.jpg";
import SpaceeImg from "../../assets/images/spacee.png";
import WeatherImg from "../../assets/images/weather-dashboard.png";


function Project(props) {
// console.log(props.image);

// -----------------------------------------------------------------------------------------------
// I originally tried to code this as a dynamic list that I could edit in my ProjectList.json file
// Unfortunately, I couldn't get the image sourcing to work AT ALL with the dynamic list, so I've
// resorted to hard coding in the image files and creating a hard list in order to actually 
// get everything to function.  Will revisit. 
// -----------------------------------------------------------------------------------------------

// // console.log(Img + "/" + props.image);
//     return (
//         <div className="image-card">
//             <img className="card-img-top" src={ChowImg} alt={props.alt} />
//             <div className="card-body text-center">
//                 <div className="image-card-text">
//                     <h3 className="card-title">{props.title}</h3>
//                     <p className="image-card-text">{props.description}</p>
//                     <a href={props.deployed_url} target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Website</a>
//                     <a href={props.repo_url} target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
//                 </div>
//             </div>
//         </div>
//     )

// }

return (
    <div className="list-wrapper">
        <div className="image-card">
            <img className="card-img-top" src={ChowImg} alt="Chow Now homepage" />
            <div className="card-body text-center">
                <div className="image-card-text">
                    <h3 className="card-title">Chow Now</h3>
                    <p className="image-card-text">An App designed to allow easy group ordering.</p>
                    <a href="https://pure-fortress-22710.herokuapp.com/" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Website</a>
                    <a href="https://github.com/bborumoore/chow-now" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
                </div>
            </div>
        </div>
        <div className="image-card">
            <img className="card-img-top" src={SpaceeImg} alt="Spacee homepage" />
            <div className="card-body text-center">
                <div className="image-card-text">
                    <h3 className="card-title">Space-E</h3>
                    <p className="image-card-text">A centralized source for Space and Launch events!</p>
                    <a href="https://space-e.herokuapp.com/" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Website</a>
                    <a href="https://github.com/bborumoore/space-e" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
                </div>
            </div>
        </div>
        <div className="image-card">
            <img className="card-img-top" src={WeatherImg} alt="Weather Dashboard homepage" />
            <div className="card-body text-center">
                <div className="image-card-text">
                    <h3 className="card-title">Weather Dashboard</h3>
                    <p className="image-card-text">A simple OpenWeather application to search for forecast information.</p>
                    <a href="https://bborumoore.github.io/weather-dashboard/" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Website</a>
                    <a href="https://github.com/bborumoore/weather-dashboard/" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
                </div>
            </div>
        </div>
        <div className="image-card">
            <img className="card-img-top" src={EmployeeTrackerImg} alt="Employee Tracker homepage" />
            <div className="card-body text-center">
                <div className="image-card-text">
                    <h3 className="card-title">Budget Tracker</h3>
                    <p className="image-card-text">PWA to help you track finances - both incoming and outgoing. No live deployment available.</p>
                    <a href="https://github.com/bborumoore/chow-now" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
                </div>
            </div>
        </div>
        <div className="image-card">
            <img className="card-img-top" src={eCommerceImg} alt="eCommerce homepage" />
            <div className="card-body text-center">
                <div className="image-card-text">
                    <h3 className="card-title">eCommerce Backend App</h3>
                    <p className="image-card-text">Backend Application for warehouse and inventory management.</p>
                    <a href="https://drive.google.com/file/d/1Cyk_DFHpux6jxGIZNp8xQiGrsJlKLilp/view" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Demo</a>
                    <a href="https://github.com/bborumoore/E-commerce-back-end" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
                </div>
            </div>
        </div>
        <div className="image-card">
            <img className="card-img-top" src={MarsImg} alt="Mars Daily homepage" />
            <div className="card-body text-center">
                <div className="image-card-text">
                    <h3 className="card-title">Mars Daily</h3>
                    <p className="image-card-text">Displays recent Images from Mars rovers, acompanied by reported weather data.</p>
                    <a href="https://bborumoore.github.io/mars-daily/" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Website</a>
                    <a href="https://github.com/bborumoore/mars-daily" target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
                </div>
            </div>
        </div>
    </div>

    
    
    
)

}

export default Project;
