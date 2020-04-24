import React, {Component} from 'react';
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

import Authentication from '../components/Auth/Authentication';
class SignupContainer extends Component {

    activeSignup = (e) => {
        console.log("signup");
    }

    render() {
        return (
            <div>
                <Header />

                <Authentication mode={false} />

                <Footer/>
            </div>
        )
    }
}

export default SignupContainer;
