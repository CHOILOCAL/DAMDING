import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from "react-bootstrap";

import '../scss/footer.scss'


class Footer extends React.Component {

    render() {
        return (
            <div className={Footer}>
            <Container fluid>
                <div className={Footer}>
                    <Navbar bg="dark" variant="dark" fixed='bottom'>
                        <Nav>
                            <span className={'loc_kakao'}><img src="http://placehold.it/30x30" style={{marginTop: 5, marginRight: 5}}></img></span>
                            <Nav.Link href="#">카카오톡 문의 바로가기</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
            </Container>
            </div>
        );
    }
}

export default Footer;
