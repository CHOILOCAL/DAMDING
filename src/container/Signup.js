import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Form, Col, Button } from 'react-bootstrap';

class Signup extends Component {

    activeSignup = (e) => {
        console.log("login");
    }

    render() {
        return (
            <div>
                <Header />

                <div style={{ marginTop: "100px", marginRight: "100px", marginLeft: "100px" }}>
                    <div style={{ marginTop: "100px", marginRight: "300px", marginLeft: "300px" }}>

                        {/* login popup */}
                        {/* 이름, 아이디, (중복확인) 패스워드, 패스워드확인, 생년월일, 성별, 이메일 (중복확인), 휴대폰 번호(본인확인), 주소, 가입 계기, 담딩투어 경험자/비경험 */}
                        <Form>
                            {/* 이름 */}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control type="name" placeholder="이름" />
                                </Form.Group>
                            </Form.Row>
                            {/*아이디*/}
                            <Form.Group controlId="formGridId">
                                <Form.Label>아이디</Form.Label>
                                <Form.Control placeholder="아이디" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>패스워드</Form.Label>
                                <Form.Control placeholder="비밀번호를 입력해주세요. " />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>패스워드 확인 </Form.Label>
                                <Form.Control placeholder="비밀번호를 재입력해주세요. " />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>주소</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>국가</Form.Label>
                                    <Form.Control as="select" value="Choose...">
                                        <option>-</option>
                                        <option>대한민국</option>
                                    </Form.Control>
                                </Form.Group>


                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="담딩투어 경험이 있으시면 체크해주세요. " />
                            </Form.Group>

                            <Button variant="primary" type="submit" onSubmit={this.activeSignup}>
                                가입
                            </Button>
                        </Form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Signup;
