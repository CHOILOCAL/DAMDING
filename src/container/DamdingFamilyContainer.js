import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

import damdingFamilyComponent from '../components/damdingFamily/damdingFamilyComponent';

class DamdingFamilyContainer extends Component {

    render() {
        return (<div>
            <Header />
            
            <damdingFamilyComponent />
            
            <Footer />
        </div>);
    }
};

export default DamdingFamilyContainer;
