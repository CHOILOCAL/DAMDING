import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";


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


                <Footer/>
            </div>
        )
    }


}


export default Login;
