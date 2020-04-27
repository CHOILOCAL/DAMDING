import React, {Component} from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import firebase from '../Firebase';

import WithmeTogetherComponent from '../components/withmeTogether/withmeTogetherComponent';

class WithmeTogetherContainer extends Component {

    render() {
        return (<div>
            <Header />
            <WithmeTogetherComponent />
            <Footer />
        </div>);
    }
};

export default WithmeTogetherContainer;
