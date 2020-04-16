import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Gnb from "../components/Gnb";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";
import SubMain01 from "../components/SubMain01";
import SubMain02 from "../components/SubMain02";
import SubMain03 from "../components/SubMain03";

import '../animation/Animation.css';
import '../animation/Warning.css';

class Main extends Component {

    render() {
        return (
            <div>

                {/* fixed Header */}
                <Header />

                {/* Video */}
                <Gnb/>

                {/* SubMain */}
                <SubMain01/>
                <SubMain02/>
                <SubMain03/>

                {/* Footer */}
                <Intro/>

                {/* fixed Footer */}
                <Footer/>
            </div>
        )
    }


}



export default Main;
