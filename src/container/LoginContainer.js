import React, { Component } from 'react';
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

import '../snsLoginApi/kakaoLogin';


import Authentication from '../components/Auth/Authentication';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            user: '', // 로그인/로그아웃 구분
            mode: '' // 로그인/회원가입 구분
        };
    }

    render() {

        return (
            <div>
                <Header user={false}/>

                <Authentication mode={true} />
                
                <Footer/>
            </div>
        )
    }
}

LoginContainer.defaultProps = {
    mode: false
}

export default LoginContainer;