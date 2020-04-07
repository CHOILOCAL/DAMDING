import React from 'react'
import Login from 'components/Login';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'
import logo from 'image/logo.png';

const FixedMenuLayout = () => (

    // Header( 브랜드 , 메인, ABOUT Damdeeng , 투어설명서 , 투어상품 , 투어상품 , 동행구하기 , 담딩박스 , 인스타갤러리 , 문의 , 상품 , 로그인
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                    담딩투어
                </Menu.Item>
                <Menu.Item as='a'>메인</Menu.Item>
                ​<Menu.Item as='a'>ABOUT Damdeeng</Menu.Item>
                <Menu.Item as='a'>투어설명서</Menu.Item>
                <Menu.Item as='a'>투어상품</Menu.Item>
                <Menu.Item as='a'>동행구하기</Menu.Item>
                <Menu.Item as='a'>담딩박스</Menu.Item>
                <Menu.Item as='a'>인스타갤러리</Menu.Item>
                <Menu.Item as='a'>문의</Menu.Item>
                <Menu.Item as='a'>상품</Menu.Item>

                <Dropdown item simple text='Dropdown'>
                    <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Header Item</Dropdown.Header>
                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Submenu</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item as='a' header>
                    {/*<Image size='mini' src={logo} style={{ marginLeft: '1.5em' }} />*/}
                    로그인
                </Menu.Item>

            </Container>
        </Menu>
        ​
        <Container text style={{ marginTop: '7em' }}>
            <Login/>
        </Container>
        ​
        {/* Footer */}
        <Segment inverted vertical style={{ margin: '30em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Header inverted as='h4' content='...' />
                            <List link inverted>
                                <List.Item as='a'>#경험을 잇다, 오다투어</List.Item>
                                <List.Item as='a'>상호명: (주)오후다섯시 ㅣ 대표이사: 박지호 ㅣ 개인정보책임자: 최경훈 기술이사   계좌안내: KB 국민은행 489701-01698488
                                    사업자번호 568-81-01445 ㅣ 통신판매업번호 제 2019-서울구로-1283 호 관광사업등록 제260002-2019-0000008호
                                    국외여행 및 기획여행업 보증보험 : 2억3천만원</List.Item>
                                <List.Item as='a'>주소: 서울 구로구 디지털로27길 24, 벽산디지털밸리1차 801호(구로동)  서비스에 대한 반품, 환불, 민원에 대한 처리는 (주)오후다섯시에서 하고 있으며,  고객센터로 연락주시면 감사하겠습니다. </List.Item>
                                <List.Item as='a'>카카오플러스:odatour (고객센터 담당자 : 최경훈 010-2541-2030)</List.Item>
                                <List.Item as='a'>Hosting by (주)아임웹 Copyright ⓒ 오다투어 All rights reserved</List.Item>

                            </List>
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Header inverted as='h4' content='현빈' />
                            <p>
                                현빈 사진 !!
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                ​
                <Divider inverted section />
                <Image centered size='mini' src={logo} />
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>
                        몽골지사
                    </List.Item>
                    <List.Item as='a' href='#'>
                        연락처
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        개인정보 정책
                    </List.Item>
                </List>
            </Container>
        </Segment>
    </div>
)
export default FixedMenuLayout

