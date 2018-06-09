import React, {Component} from 'react';

class Linkedin extends Component{
    render() {
        let linkedinLink = "https://www.linkedin.com/in/ronald-pereira-6858a6b5/"
        let imgSrc = require("../../assets/img/linkedin-logo.png");
        let imgAlt = "LinkedIn";

        return(
            <div className="socialLogo">
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <img id="linkedin" src={imgSrc} alt={imgAlt} />
                </a>
            </div>
        );
    }
}

export default Linkedin;
