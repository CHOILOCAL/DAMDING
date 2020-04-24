import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

import expTourComponent from '../components/goodsTour/goodsTourComponent'

class ExpTourContainer extends Component {

    render() {
        return (<div>
            <Header />

            <div>
            <expTourComponent />
            </div>

            <Footer />
        </div>);
    }
};

export default ExpTourContainer;
