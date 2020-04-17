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

        // 현재 로그인 상태 체크
        let re = /(login|register)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>

                {/* fixed Header */}
                {isAuth ? undefined : <Header />}
                { this.props.children } {/* 내가 지정한 라우트가 표시됨 */}

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
