import React, {Component} from 'react';
import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Footer from "../components/Footer";

class Signup extends Component {

    render() {
        return (
            <div>
                <Header />
                <Gnb/>
                <div>signup</div>
                <Footer/>
            </div>
        )
    }
}

export default Signup;
