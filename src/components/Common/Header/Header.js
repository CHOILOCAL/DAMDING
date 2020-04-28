import React from "react";

// react-bootstrap
import {
    Nav,
    Navbar,
    Button,
    Form
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

// mdreact
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; import
// 'mdbreact/dist/css/mdb.css';

import '../../../css/Header.css';

import Authentication from '../../Auth/Authentication';

// import firebase, { auth, provider } from '../../Firebase';
import { logoutUser } from '../../../actions'; 
import { connect } from 'react-redux';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // user: null  처음 로그인시에는 로그인되어있지 않은 상태
            isLoggerd: '',
            user: null,
            mode: ''
        };
    }

    componentDidMount(props) {
        // 로그인 세션 or 토큰이 있는지 확인
        // isLoggerd 변수 true or false
        // isLoggerd 값이 true면 로그아웃 버튼
        // isLoggerd 값이 false면 로그인 버튼
        // const checkLoginToken = {

        // const { isLoggerd } = props;

        // if(isLoggerd) {
        //     this.state = {
        //         isLoggerd: true
        //     }
        // } else {
        //     this.state = {
        //         isLoggerd: false
        //     }
        // }
    }


    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
      }; 

    render() {

        // 로그인 전
        const loginButton = (
            <div>
            <Link to="/login">
                <Button variant="light" onClick={this.login} className="loginButton">로그인</Button>
            </Link>

            <Link to="/signup" style={{paddingLeft: '10px'}}>
            <Button variant="light" onClick={this.signup} className="signupButton">회원가입</Button>
            </Link>
            </div>
        );

        

        // 로그인 후
        const logoutButton = (
            <Link to="/main">
                <Button variant="light" onClick={this.handleLogout} className="logoutButton">로그아웃</Button>
            </Link>
        );

    

        const { isLoggingOut, logoutError } = this.props;


        return (

            

            <div>
            {/* 시작 */}
                <Navbar bg="" expand="lg">
                    <Navbar.Brand href="/main">담딩투어</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/main">메인</Nav.Link>
                            <Nav.Link href="/aboutDaming">담딩투어</Nav.Link>
                            <Nav.Link href="/damdingFamily">담딩가족</Nav.Link>
                            <Nav.Link href="/expTour">투어설명서</Nav.Link>
                            <Nav.Link href="/goodsTour">투어상품</Nav.Link>
                            <Nav.Link href="/withmeTogether">동행구하기</Nav.Link>
                            <Nav.Link href="/storyUnMe">여행이야기</Nav.Link>
                            <Nav.Link href="/qna">문의</Nav.Link>
                            {/* <NavDropdown title="?" id="basic-nav-dropdown">
                                <NavDropdown.Item href=""></NavDropdown.Item>
                                <NavDropdown.Item href=""></NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href=""></NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Form inline="inline">
                            {/* 검색어를 입력해주세요 */}
                            {/* <FormControl type="text" placeholder="WWW" className="mr-sm-2"/> */}
                            {/* <Button variant="outline-success">로그인</Button> */}

                            {
                                this.props.isLoggerd ? logoutButton : loginButton
                            }
                        </Form>
                        <button onClick={this.handleLogout}>Logout</button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
                    </Navbar.Collapse>
                </Navbar>

                {/* 끝 */}
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

// 초기값 세팅
Header.defaultProps = {
    user: false,
    isLoggerd: false
};

// Login
Authentication.defaultProps = {
    mode: false,
    onLogin: (id, pw) => {
        console.log("login function not defined");
    }
};

export default connect(mapStateToProps)(Header);