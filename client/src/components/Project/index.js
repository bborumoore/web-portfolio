import React from "react";
import "./style.css";

function Project(props) {


    return (
        <div class="image-card">
            <img class="card-img-top" src={`./${props.image}`} alt={props.alt} />
            <div class="card-body text-center">
                <div class="image-card-text">
                    <h3 class="card-title">{props.title}</h3>
                    <p class="image-card-text">{props.description}</p>
                    <a href={props.deployed_url} target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Website</a>
                    <a href={props.repo_url} target="_blank" rel="noreferrer" class="btn btn-primary mb-3 custom-size custom-btn image-card-text">Repository</a>
                </div>
            </div>
        </div>
    )

}

export default Project;
