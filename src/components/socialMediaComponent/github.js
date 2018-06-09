import React, {Component} from 'react';

class Github extends Component{
    render() {
        let githubLink = "https://github.com/ronaldpereira";
        let imgSrc = require("../../assets/img/github_logo.png");
        let imgAlt = "GitHub";

        return(
            <div className="socialLogo">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <img id="github" src={imgSrc} alt={imgAlt}  />
                </a>
            </div>
        );
    }
}

export default Github;
