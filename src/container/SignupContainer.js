import React, {Component} from 'react';
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import Signup from  "../components/Common/Signup/Signup";
import Authentication from '../components/Auth/Authentication';
class SignupContainer extends Component {

    activeSignup = (e) => {
        console.log("signup");
    }

    render() {
        return (
            <div>
                <Header />

                {/* <Authentication mode={true} /> */}

                <Footer/>
            </div>
        )
    }
}

export default SignupContainer;
