import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Project from "../components/Project";
import ProjectList from "../utils/ProjectList.json";

function Projects(props) {
    const [projectList, setProjectList] = useState();

    useEffect(() => {
        setProjectList(ProjectList);
        console.log(ProjectList);
    }, [])


    return (
        <div style={{ justifyContent: "center" }}>

            <CardContainer style={{ justifyContent: "center" }}>
                {ProjectList.map(project => (

                    <Project
                        id={project.id}
                        key={project.id}
                        image={project.image}
                        alt={project.alt}
                        title={project.title}
                        description={project.description}
                        deployed_url={project.deployed_url}
                        repo_url={project.repo_url}
                    />
                ))}
            </CardContainer>

        </div>

    )
}


export default Projects;
