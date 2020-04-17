import React from 'react';

import "../../css/Authentication.css";
import {Link} from 'react-router-dom';

import '../../css/Authentication.css';

import { Form, Button } from 'react-bootstrap';

class Authentication extends React.Component {
    render() {

        // 로그인 뷰 <input name="username" type="text" className="validate"/> <input
        // name="password" type="password" className="validate"/> <a>로그인</a> <Link
        // to="/register">회원가입</Link>
        const loginView = (
            <div>
                <div className="card-content">
                    <div className="row">
                        <div className="input-field col s12 username">
                            <label>아이디</label>
                            <input
                            name="username"
                            type="text"
                            className="validate"
                            placeholder="아이디" />
                        </div>
                        <div className="input-field col s12">
                            <label>비밀번호</label>
                            <input
                            name="password"
                            type="password"
                            className="validate"
                            placeholder="비밀번호"/>
                        </div>
                        <a className="waves-effect waves-light btn">로그인</a>
                    </div>
                </div>


                <div className="footer">
                    <div className="card-content">
                        <div className="right" >
                        아이디 없음? <Link to="/signup">회원가입하러가기</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

        // 회원가입 뷰
        const registerView = (<div>회원가입 화면</div>);

        return (
            <div className="container auth">
                <Link className="logo" to="/">DAMDING</Link>
                <div className="card">
                    <div className="header blue wh∂ite-text center">
                        <div className="card-content">{
                                this.props.mode
                                    ? "로그인"
                                    : "회원가입"
                            }</div>
                    </div>
                    {
                        this.props.mode
                            ? loginView
                            : registerView
                    }
                </div>
            </div>
        );
    }
}

/* setting a propsType */
// Authentication.propTypes = {     mode: React.PropTypes.bool,     onLogin:
// React.PropTypes.func,     onRegister: React.PropTypes.func };
/* setting a defaultProps value */
Authentication.defaultProps = {
    mode: true,
    onLogin: (id, pw) => {
        console.log("login function not defined");
    },
    onRegister: (id, pw) => {
        console.log("register function not defined");
    }
};

export default Authentication;