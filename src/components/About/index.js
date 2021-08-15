import React from "react";
import Img from "../../assets/images/selfPortrait.jpg";

function About() {

    // Very simple page to portray my most basic information
    return (
        <section id="about-me" display="flex">

            <div>
                <figure className="image-wrapper">
                    <img id="portfolio-img" src={Img} alt="Picture of Brian" width="400 px" />
                </figure>
            </div>

            {/* container to hold text information */}
            <div width="400 px">
                <h2 className="display-3 mb-3">About Me</h2>

                <p> I view learning as a lifelong passion - I am an avid learner always looking to improve myself and develop another skill. I recently finished a Full-Stack 
                    Development certification course through MSU, I'm currently studying en route to my PMP, and I'm about to begin a Master's Program of Game Design through
                    Lindenwood University!</p><br />

                <p>   In terms of work experience, I've worked on several different projects within the Automotive manufacturing
                    industry.  On each project I've pushed to learn and develop new skills.  I've picked up proficiency with
                    Microsoft Office applications, especially Excel and Access, and have gained exposure to other industry tools
                    including MODAPTs, AutoCAD, and Lean Six Sigma.</p><br />


                <p>     I've also spent a fair amount of time developing customer service and guest relation skills at Olive Garden.
                    Over my four year tenure at the restaurant I trained in every position and handled responsibilities including
                    floor management, on-site training, guest recovery, inventory management, and total quality assurance.</p><br />

                <p>This portfolio includes links to some of my web development projects that I've developed while attending a Full Stack bootcamp through Michigan State University.
                    Please enjoy!
                </p><br />
            </div>

        </section>
    );
}

export default About;