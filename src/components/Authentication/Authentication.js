import React from 'react';

import "../../css/Authentication.css";
import {Link} from 'react-router-dom';

import '../../css/Authentication.css';

import {Form, Col} from 'react-bootstrap';

import {auth, provider} from '../../Firebase';

class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user: null // 처음 로그인시에는 로그인되어있지 않은 상태
        };
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

    login(e) {}

    logout(e) {
        // Google Logout
        auth
            .signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    googleLogin = (e) => {

        // Google API
        auth
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({user});
            });
    }

    kakoLogin = (e) => {
        // kakaoTalk API
    }

    render() {

        // 회원가입, 로그인 뷰에서 보이는 중복 코드
        const commonInputBox = (
            <div className="basicinfo-input-id">
                <label>아이디</label>
                <input
                    name="username"
                    type="text"
                    className="validate"
                    placeholder="아이디"
                    value={this.state.username}/>
            </div>
        )

        // 로그인 뷰
        const loginView = (
            <div className="view-row">
                {
                    this.state.user
                        ?
                        // 로그인 되어있을 경우 
                        <div>
                                <div className="logout-button">
                                    <button onClick={this.logout}>로그아웃</button>

                                    {/* googld profile photo */}
                                    <div className='user-profile'>
                                        <p className='user-profile-name'>{this.state.user.displayName}
                                            님</p>
                                        <img
                                            src={this.state.user.photoURL}
                                            alt="Not Found"
                                            className='user-profile-photoURL'/>
                                    </div>

                                </div>

                        </div>

                        :

                        // 로그인 되어있을 경우 
                        <div>
                                {/* 아이디 */}
                                <div className="basicinfo-input-id">
                                    <label>아이디</label>
                                    <input
                                        name="username"
                                        type="text"
                                        className="validate"
                                        placeholder="아이디"
                                        value={this.state.username}/>
                                </div>

                                {/* 비밀번호 */}
                                <div className="basicinfo-input-pw">
                                    <label>비밀번호</label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="validate"
                                        placeholder="비밀번호"
                                        value={this.state.password}/>
                                </div>

                                {/* 로그인 버튼 */}
                                <div className="login-button">
                                    <div className="kakao-loginbutton">
                                        <button onClick={this.kakoLogin}>카카오로 로그인</button>
                                    </div>
                                    <div className="google-loginbutton">
                                        <button onClick={this.googleLogin}>구글로 로그인</button>
                                    </div>
                                    <div className="damding-loginbutton">
                                        <button variant="" className="damding-loginbutton-t" onClick={this.login}>찐아디,패스워드 로그인</button>
                                    </div>

                                    {/* 회원가입 안내 */}
                                    <div className="damding-signupbutton">아이디 없음?
                                        <Link to="/signup">회원가입하러가기</Link>
                                    </div>
                                </div>
                                {/* div 끝 */}
                        </div>
                }
            </div>
        )

        // 회원가입 뷰
        const signupView = (
            // <div className="card-content">
            <div className="view-row">

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
            // </div>
        );

        return (
            <div className="container auth">
                <Link className="logo" to="/main">DAMDING</Link>
                <div className="card">
                    {/* <div className="header blue white-text center"> */}
                    <div className="card-subject">{
                            this.props.mode
                                ? "로그인"
                                : "로그아웃"
                        }
                        {
                            this.props.mode
                                ? loginView
                                : signupView
                        }
                        
                    </div>
                </div>
            </div>
            // </div>
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