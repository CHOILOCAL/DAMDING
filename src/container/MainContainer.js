import React, { Component } from 'react';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

import Gnb from "../components/Gnb";
import Intro from "../components/Intro";
import SubMain01 from "../components/SubMain01";
import SubMain02 from "../components/SubMain02";
import SubMain03 from "../components/SubMain03";

import '../animation/Animation.css';
import '../animation/Warning.css';

import '../container/LoginContainer';
import '../components/Auth/Authentication';

import {auth} from '../Firebase';

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggerd: false,
            user: '',
            mode: ''
        };
    }
    
    componentDidMount(props) {
        // 로그인 세션 or 토큰이 있는지 확인
        auth.onAuthStateChanged((user) => {
            if (user) { // user가 있으면 
                this.setState({user});
                console.log('로그인 user 있음 ?', user);
                this.setState({ isLoggerd: true });
                console.log('로그인 상태입니다.', this.state.isLoggerd);
            } else { // user가 없으면
                this.setState({ isLoggerd: false });
                console.log('로그아웃 상태입니다', this.state.isLoggerd);
            }
        });
    }

    render() {

        return (
            <div>
                {/* fixed Header */}
                <Header isLoggerd={'isLoggerd'}/>

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

export default MainContainer;