import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Authentication from '../components/Authentication/Authentication';
class Signup extends Component {

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

export default Signup;
