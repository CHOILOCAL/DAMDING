import React, {Component} from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import AboutComponent from '../components/aboutComponent/AboutComponent'

class AboutContainer extends Component {

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

export default AboutContainer;
