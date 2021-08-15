import React from "react";

function ProjectContainer(props) {
    return (
        <section class="project-wrapper" style={{ justifyContent: "center" }} id="completed-projects">{props.children}</section>
    )
}

export default ProjectContainer;