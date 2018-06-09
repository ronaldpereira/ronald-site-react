import React, {Component} from 'react';
import Github from './github';
import Linkedin from './linkedin';
import Facebook from './facebook';

class SocialLinks extends Component{
    render() {
        return(
            <div className="socialLinksContainer">
                <Facebook/>
                <Github/>
                <Linkedin/>
            </div>
        );
    }
}

export default SocialLinks;
