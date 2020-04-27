import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import firebase from '../Firebase';

import GoodsTourComponent from '../components/goodsTour/goodsTourComponent';

class GoodsTourContainer extends Component {

    render() {
        return (<div>
            <Header />
            <GoodsTourComponent />
            <Footer />
        </div>);
    }
};

export default GoodsTourContainer;
