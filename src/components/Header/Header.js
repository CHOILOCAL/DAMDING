import React from "react";

// react-bootstrap
import {Nav, Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';

// mdreact
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; import
// 'mdbreact/dist/css/mdb.css';

import '../../css/Header.css';

// import firebase, { auth, provider } from '../../Firebase';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // user: null  처음 로그인시에는 로그인되어있지 않은 상태
            user: null,
            mode: ''
        };
        // this.login = this.login.bind(this); this.logout = this.logout.bind(this);
    }

    login = (e) => {
        console.log("login");
        // auth.signInWithPopup(provider).then((result) => {     const user =
        // result.user;     this.setState({         user     }); });
    }

    logout = (e) => {
        console.log("logout");
        // session end
    }

    render() {

        // 로그인 전
        const loginButton = (
            <Link to="/login">
                <Button variant="light" onClick={this.login} className="loginButton">로그인</Button>
            </Link>
        );

        // 로그인 후
        const logoutButton = (
            <Link to="/main">
                <Button variant="light" onClick={this.logout} className="logoutButton">로그아웃</Button>
            </Link>
        );

        

        return (

            <div>
                        {/* Title Image */}
                        {/* <Image
                            className="HeaderMainImage"
                            src="http://placehold.it/30x30"
                            style={{
                                marginLeft: '10px',
                                marginRight: '20px'
                            }}/> */
                        }

                        {/* Title Logo */}
                        {/* Link Component는 새로운 로딩을 막고 라우트에 보여지는 내용만 변하게 한다 */}
                        {/*  <Link to="/main"><Navbar.Brand href="/main">D A M D I N G</Navbar.Brand></Link> */}

                        {/* Menu */}
                        <Nav className="justify-content-center" activeKey="/" fixed='top'>
                            <Nav.Item>
                                <Nav.Link className="css-header-letters" href="/main">메인</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="css-header-letters" href="/about" disabled="disabled">담딩투어(준비중)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="css-header-letters" href="/exp" disabled="">투어설명서(준비중)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="css-header-letters" href="/product" disabled="disabled">투어상품(준비중)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="css-header-letters" eventKey="gallery" href="/gallery">투어문의</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="css-header-letters" eventKey="qna" href="/qna">갤러리</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="css-header-letters" eventKey="withme" disabled="disabled">
                                    동행구하기(준비중)
                                </Nav.Link>
                            </Nav.Item>

                            {/* 로그인 상태 체크 후 로그인/로그아웃 변경 */}
                            <div className="css-header-logButton">
                                {
                                    this.props.mode
                                        ? logoutButton
                                        : loginButton
                                }</div>
                                
                        </Nav>

                        {/* 전체검색 */}
                        {/* <Form inline="inline">
                            <i
                                className="fas fa-search"
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    marginRight: '10px'
                                }}></i>
                            }
                            <FormControl type="text" placeholder="검색어를 입력하세요" className="mr-sm-2"/>
                        </Form> */}

                        </div>

        );
    }
}

// Header.propTypes = {     isLoggedIn: React.PropTypes.bool,  로그인 여부 확인
// (button)     onLogout: React.PropTypes.func  로그아웃 함수 }; Header.defaultProps =
// {     isLoggedIn: false,     onLogout: () => { console.error("logout function
// not defined");} };

export default Header;