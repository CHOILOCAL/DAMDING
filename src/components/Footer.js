import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from "react-bootstrap";

const Footer = () => (
    <Container fluid>
    <div className={Footer}>
        <Navbar bg="dark" variant="dark" fixed='bottom' >
            <Nav className="mr-auto" style={{ width: 'auto', height: 'auto', marginLeft: '1350px' }}>
                <Nav.Link href="#">카카오톡 문의 바로가기</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    </Container>
)

export default Footer;
