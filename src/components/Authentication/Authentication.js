import React from 'react';

import "../../css/Authentication.css";
import {Link} from 'react-router-dom';

import '../../css/Authentication.css';

import {Form, Col} from 'react-bootstrap';

import firebase, {auth, provider} from '../../Firebase';

class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user: null // 처음 로그인시에는 로그인되어있지 않은 상태
        };

        // functionName(e) => {} 함수를 쓰면 bind 안해줘도 됨 ㅇㅇ this.handleChange = this
        // .handleChange     .bind(this);

        this.login = this
            .login
            .bind(this);
        this.googleLogin = this
            .googleLogin
            .bind(this);
        this.logout = this
            .logout
            .bind(this);
    }

    componentDidMount() {
        // without a relogin !!!
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            }
        });
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        // this.setState({     [e.target.name]: e.target.value });
    }

    login() {}

    logout() {

        // Google Logout
        auth
            .signOut()
            .then(() => {
                this.setState({user: null});
            });

    }

    googleLogin() {

        // Google API
        auth
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({user});
            });
    }

    render() {

        // 회원가입, 로그인 뷰에서 보이는 중복 코드
        const commonInputBox = (
            <div className="input-field col s12 username">
                <label>아이디</label>
                <input
                    name="username"
                    type="text"
                    className="validate"
                    placeholder="아이디"
                    value={this.state.username}/>
            </div>
        )

        // 로그인 뷰 <input name="username" type="text" className="validate"/> <input
        // name="password" type="password" className="validate"/> <a>로그인</a> <Link
        // to="/register">회원가입</Link>
        const loginView = (
            <div>
                <div className="card-content">
                    <div className="row">

                        {/* 공통 <div /> */}
                        {commonInputBox}

                        <div className="input-field col s12">
                            <label>비밀번호</label>
                            <input
                                name="password"
                                type="password"
                                className="validate"
                                placeholder="비밀번호"
                                value={this.state.password}/>
                        </div>
                        {
                            this.state.user
                                ? <div>
                                        <button onClick={this.logout}>로그아웃</button>

                                        {/* googld profile photo */}
                                        <div className='user-profile'>
                                            <p className='user-profile-name'>{this.state.user.displayName} 님</p>
                                            <img src={this.state.user.photoURL} className='user-profile-photoURL'/>
                                        </div>

                                    </div>
                                : <div>
                                        <button onClick={this.googleLogin}>구글로 로그인</button>
                                        <button onClick={this.login}>찐아디,패스워드 로그인</button>

                                        <div className="footer">
                                            <div className="card-content">
                                                <div className="right">
                                                    아이디 없음?
                                                    <Link to="/signup">회원가입하러가기</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                        }
                    </div>
                </div>

                {/* <div className="footer">
                    <div className="card-content">
                        <div className="right">
                            아이디 없음?
                            <Link to="/signup">회원가입하러가기</Link>
                        </div>
                    </div>
                </div> */
                }
            </div>
        );

        // 회원가입 뷰
        const registerView = (
            <div>
                <div className="card-content">
                    <div className="row">

                        {/* 공통 <div /> */}
                        {commonInputBox}

                        <div className="input-field col s12 username">
                            <label>아이디</label>
                            <input name="username" type="text" className="validate" placeholder="아이디 입력해"/>
                        </div>
                        <div className="input-field col s12">
                            <label>비밀번호</label>
                            <input name="password" type="text" className="validate" placeholder="패스워드 입력해"/>
                        </div>
                        <div className="input-field col s12">
                            <label>비밀번호확인</label>
                            <input
                                name="passwordCheck"
                                type="text"
                                className="validate"
                                placeholder="패스워드 또 입력해"/>
                        </div>
                        <div className="input-field col s12">
                            <label>주소</label>
                            <input name="address" type="text" className="validate" placeholder="주소주소"/>
                        </div>
                        <div className="input-field col s12">
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>국가</Form.Label>
                                    <Form.Control as="select" value="Choose...">
                                        <option>-</option>
                                        <option>대한민국</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </div>

                        {/* 담딩투어 경험 Y/N */}
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="담딩투어 경험이 있으시면 체크해주세요. "/>
                        </Form.Group>

                        <a className="waves-effect waves-light btn">회원가입</a>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="container auth">
                <Link className="logo" to="/main">DAMDING</Link>
                <div className="card">
                    <div className="header blue wh∂ite-text center">
                        <div className="card-content">{
                                this.props.mode
                                    ? "로그아웃"
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