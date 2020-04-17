import React from "react";

// react-bootstrap
import {
    Nav,
    Form,
    FormControl,
    Button,
    Container,
    Image
} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

// mdreact
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; import
// 'mdbreact/dist/css/mdb.css';

import '../../css/Header.css';

class Header extends React.Component {

    activeLogin = (e) => {
        console.log("login");
    }

    render() {
        return (
            <div className={Header}>
                <Container fluid="fluid">
                    <Navbar bg="light" variant="light" fixed='top'>

                        {/* Title */}
                        <Image className="HeaderMainImage"
                            src="http://placehold.it/30x30"
                            style={{
                                marginLeft: '10px',
                                marginRight: '20px'
                            }}/>
                        <Navbar.Brand href="/">D A M D I N G</Navbar.Brand>

                        {/* Menu */}
                        <div>
                         <Nav className="mr-auto">
                            <Nav.Link href="/">메인</Nav.Link>
                            <Nav.Link href='/about'>About 담딩투어</Nav.Link>
                            <Nav.Link href="/exp">투어설명서</Nav.Link>
                            <Nav.Link href="/product">투어상품</Nav.Link>
                            <Nav.Link href="/withme">동행구하기</Nav.Link>
                            <Nav.Link href="/box">담딩박스</Nav.Link>
                            <Nav.Link href="/gallery">갤러리</Nav.Link>
                            <Nav.Link href="/qna">문의</Nav.Link>
                        </Nav>
                        </div>
                        
                        <Form inline="inline">
                            <i className="fas fa-search"
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    marginRight: '10px'
                                }}></i>
                            <FormControl type="text" placeholder="검색어를 입력하세요" className="mr-sm-2"/>
                            <Button variant="outline-primary" onClick={this.activeLogin} href="/login">로그인</Button>
                        </Form>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Header;