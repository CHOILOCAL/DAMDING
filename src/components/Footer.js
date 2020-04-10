import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from "react-bootstrap";

import '../scss/footer.scss'

const Footer = () => (
    <Container fluid>
    <div className={Footer}>
        <Navbar bg="dark" variant="dark" fixed='bottom'>
            <Nav className="mr-auto">
                <span><img src={{}}></img></span>
                <Nav.Link href="#">카카오톡 문의 바로가기</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    </Container>
)

export default Footer;
