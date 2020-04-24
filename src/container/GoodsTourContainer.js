import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

import goodsTourContainer from '../components/goodsTour/goodsTourComponent'

class GoodsTourContainer extends Component {

    render() {
        return (<div>
            <Header />

            <div>
            <goodsTourContainer />
            </div>

            <Footer />
        </div>);
    }
};

export default GoodsTourContainer;
