import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import firebase from '../Firebase';

import ExpTourComponent from '../components/expTour/expTourComponent';

class ExpTourContainer extends Component {

    render() {
        return (<div>
            <Header />
            <ExpTourComponent />
            <Footer />
        </div>);
    }
};

export default ExpTourContainer;
