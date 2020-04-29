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

    // constructor(props){
    //     super(props);

    //     console.log('main email : ', this.props.email);
    //     console.log('main password : ', this.props.password);
    //     console.log('main mode : ', this.props.mode);
    //     console.log('main user : ', this.props.user);

    // }

    constructor(props) {
        super(props);
        this.state = {
            isLoggerd: false,
            user: '',
            mode: ''
        };
    }
    
    componentDidMount(props) {

        console.log('componentDidMount isLoggerd', this.state.isLoggerd)
            
        auth.onAuthStateChanged((user) => {
            if (user) { // user가 있으면 
                this.setState({user});
                console.log('로그인 user 있음 ?', user);
                this.state.setState({
                    isLoggerd: true
                })
            } else { // user가 없으면
                this.state = {
                    isLoggerd: false
                }

            }
        });
        
        console.log('********* user check *****', this.state.isLoggerd);
    }
    render() {

        // 현재 로그인 상태 체크
        let re = /(login|register)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
                {/* fixed Header */}
                {/* {isAuth ? undefined : <Header /> */}
                <Header />
                {/* { this.props.children } 내가 지정한 라우트가 표시됨 */}

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
