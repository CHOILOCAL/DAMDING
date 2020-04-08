import React, { Component } from 'react';
import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Footer from "../components/Footer";

class Login extends Component {

    render() {
        return (
            <div>
                <Header />
                <Gnb/>
                <div>Login</div>
                <Footer/>
            </div>
        )
    }
}

export default Login;
