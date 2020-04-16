import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import '../login/kakaoLogin';

class Login extends Component {

    activeSignup = (e) => {
        console.log("login");
    }

    render() {
        return (
            <div>
                <Header />

                <div> login </div>
                <div style={{ marginLeft: "300px", marginTop: "300px" }}/>

                <kakao-login-btn />

                <button href="/signup/123">회원가입</button>

                <Footer/>
            </div>
        )
    }


}


export default Login;
