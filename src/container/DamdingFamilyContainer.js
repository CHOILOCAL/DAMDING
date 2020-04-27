import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

import DamdingFamilyComponent from '../components/damdingFamily/damdingFamilyComponent';

class DamdingFamilyContainer extends Component {

    render() {
        return (<div>
            <Header />
            
            <DamdingFamilyComponent />
            
            <Footer />
        </div>);
    }
};

export default DamdingFamilyContainer;
