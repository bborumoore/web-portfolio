import React from "react";

function About() {
    return (
        <section id="about-me" display="flex">

            <div>
                <figure className="image-wrapper">
                    <img id="portfolio-img" src="../assets/images/selfPortrait.jpg" alt="Picture of Brian" width="400 px" />
                </figure>
            </div>

            <div width="400 px">
                <h2 className="display-3 mb-3">About Me</h2>

                <p> I view learning as a lifelong passion - I am an avid learner always looking to improve myself and develop another skill.</p><br />

                <p>   I've had experience on several different projects within the Automotive manufacturing
                    industry.  On each project I've pushed to learn and develop new skills.  I've picked up proficiency with
                    Microsoft Office applications, especially Excel and Access, and have gained exposure to other industry tools
                    including MODAPTs, AutoCAD, Six Sigma, and MODAPTs analysis.</p><br />


                <p>     I've also spent a fair amount of time developing customer service and guest relation skills at Olive Garden.
                    Over my four year tenure at the restaurant I trained in every position and handled responsibilities including
                    floor management, on-site training, guest recovery, inventory management, and total quality assurance.</p><br />

                <p>This portfolio includes links to some of my web development projects that I've developed while attending a Full Stack bootcamp through Michigan State University.
                </p><br />
            </div>

        </section>
    );
}

export default About;