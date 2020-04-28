import React, { Component } from 'react';
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

import '../snsLoginApi/kakaoLogin';


import Authentication from '../components/Auth/Authentication';

import { connect } from 'react-redux';
import { logoutUser } from '../actions'; 

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            user: '', // 로그인/로그아웃 구분
            mode: '' // 로그인/회원가입 구분
        };
    }

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
      }; 

    render() {

        const { isLoggingOut, logoutError } = this.props;

        return (
            <div>
                <Header user={false}/>

                <Authentication mode={true} />

                <button onClick={this.handleLogout}>Logout</button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}

                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
    };
  }

LoginContainer.defaultProps = {
    mode: false
}

// export default LoginContainer;
export default connect(mapStateToProps)(LoginContainer);