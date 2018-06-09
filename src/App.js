import React, { Component } from 'react';

import './assets/css/styles.min.css';

import Header from './components/headerComponent/header';
import SocialLinks from './components/socialMediaComponent/socialLinks';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <SocialLinks />
            </div>
        );
    }
}

export default App;
