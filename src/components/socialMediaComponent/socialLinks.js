import React, {Component} from 'react';
import Github from './github';
import Linkedin from './linkedin';

class SocialLinks extends Component{
    render() {
        return(
            <div>
                <Github/>
                <Linkedin/>
            </div>
        );
    }
}

export default SocialLinks;
