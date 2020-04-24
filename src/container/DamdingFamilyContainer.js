import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

import damdingFamily from '../components/expTour/expTourComponent'

class DamdingFamilyContainer extends Component {

    render() {
        return (<div>
            <Header />

            <div>
            <damdingFamily />
            </div>

            <Footer />
        </div>);
    }
};

export default DamdingFamilyContainer;
