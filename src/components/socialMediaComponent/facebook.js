import React, {Component} from 'react';

class Facebook extends Component{
    render() {
        let facebookLink = "https://www.facebook.com/ronald.pereira.11"
        let imgSrc = require("../../assets/img/facebook_logo.png");
        let imgAlt = "Facebook";

        return(
            <div className="socialLogo">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    <img id="facebook" src={imgSrc} alt={imgAlt} />
                </a>
            </div>
        );
    }
}

export default Facebook;
