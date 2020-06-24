import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from "react-bootstrap";

import '../../../css/Footer.css'

import kakao from '../../../image/kakaoImage.png';

class Footer extends React.Component {

    render() {
        return (
            <div className="">
            <Container fluid>
                <div className="">
                    <Navbar className="css-footer" variant="dark" fixed='bottom'>
                        <Nav>
                            <img src={kakao} alt="kakaoImage.png" style={{ width: "30px", height: "30px", marginTop: "3px"}}></img>
                            <Nav.Link href="http://pf.kakao.com/_GxfQaxb" target="_blank">카카오톡 문의 바로가기</Nav.Link>
                        </Nav> 
                    </Navbar>
                </div>
            </Container>
            </div>
        );
    }
}

export default Footer;
