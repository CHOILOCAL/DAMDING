import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

import AboutComponent from '../components/aboutDamding/AboutComponent'

class AboutDamingContainer extends Component {

    render() {
        return (<div>
            <Header />

            <div>
            <AboutComponent />
            </div>

            <Footer />
        </div>);
    }
};

export default AboutDamingContainer;
