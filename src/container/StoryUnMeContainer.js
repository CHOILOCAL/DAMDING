import React, {Component} from 'react';
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

import QnaWrapper from "../components/storyUnMe/QnaWrapper";
import Navigate from "../components/storyUnMe/Navigate";
import QnaPost from "../components/storyUnMe/QnaPost";

// import CommentList from "../components/qnaComponent/CommentList"; import
// Comment from "../components/qnaComponent/Comment";

import * as service from '../../src/services/post';
import Warning from '../Error/Warning';

import {Container, Row, Col, Image} from 'react-bootstrap';

import '../css/StoryUnMe.css'

import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2hvaWxvY2FsIiwiYSI6ImNrOWRpNjVyODAzem0zbG10aXgxY29vbjIifQ.3GYoQdKwyelURG7pvmJ5LQ';

class StoryUnMeContainer extends Component {

    // state 초기값 설정
    constructor(props) {
        super();
        this.state = {
            postId: 1,
            fetching: false, // 요청 완료 확인용
            post: {
                title: null,
                body: null
            },
            comments: [],
            // state 추가!
            warningVisibility: false,
            
            // map gl
            lng: 98.345,
            lat: 46.035,
            zoom: 4.14
        };
        console.log("post : " + this.state.post);
        console.log("post > title : " + this.state.post.title);
        console.log("post > body : " + this.state.post.body);
        console.log("comments : " + this.state.comments[0]); // index[0]
    }

    showWarning = () => {
        this.setState({warningVisibility: true});

        // 1.5초 후에

        setTimeout(() => {
            this.setState({warningVisibility: false});
        }, 1500);
    }

    // src > services > post.js API 호출
    fetchPostInfo = async (postId) => {

        // Before a Request
        this.setState({
            fetching: true // requesting ...
        })

        // 방법 1. POST (첫번째 비동기) const post = await service.getPost(postId);
        // console.log(post); POST COMMNETS (두번째 비동기) const comments = await
        // service.getComment(postId); console.log(comments);

        try {
            // 방법 2. 한번에 POST, POST COMMENTS 동기해오기
            const info = await Promise.all(
                [service.getPost(postId), service.getComment(postId)]
            );
            console.log("info(getPost, getComment) : " + info);

            const {title, body} = info[0].data;
            const comments = info[1].data;

            console.log("comments : " + comments);
            console.log("comments[0] : " + JSON.stringify(comments[0], null, 4));

            this.setState({
                postId,
                post: {
                    title,
                    body
                },
                comments,
                fetching: false // done!
            });
        } catch (e) {
            this.setState({fetching: false});
            console.log('fetchPostInfo error : ' + e);
            this.showWarning(); // error시에 보여줄 경고문구
        }
    }

    componentDidMount() {
        this.fetchPostInfo(1);

        // map gl
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/choilocal/ck9i3pw6m3xvn1io8vor1mx07',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    // NavigateClick METHOD
    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if (type === 'NEXT') {
            this.fetchPostInfo(postId + 1);
        } else {
            this.fetchPostInfo(postId - 1);
        }
    }

    render() {


        // 하위 component에 props로 값 전달 <비구조화 할당 문법> <비구조화 할당 문법> this.state.post.title =>
        // post.title 간략 사용 가능
        const {postId, fetching, post, comments, warningVisibility} = this.state;


        return (
            <div>
                <Header/> {/* map */}

                <div className="mapdivest-css">
                <div className="mapdiv-css">
                    <div ref={el => this.mapContainer = el} className="mapContainer" />
                </div>
                </div>

                <div>
                    {/* <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src="http://placehold.it/192x200" rounded="rounded"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src="http://placehold.it/192x200" roundedCircle="roundedCircle"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Image src="http://placehold.it/192x200" thumbnail="thumbnail"/>
                            </Col>
                        </Row>
                    </Container> */}

                </div>

                {/* <QnaWrapper>
                    <Navigate
                        postId={postId}
                        disable={fetching}
                        onClick={this.handleNavigateClick}/>
                    <QnaPost
                        postId={postId}
                        title={post.title}
                        body={post.body}
                        comments={comments}/>
                    <Warning visible={warningVisibility} message="페이지가 존재하지 않습니다."/>
                </QnaWrapper> */}

                <Footer/>
            </div>
        )
    }
}

// 전달되는 props Navigate {postId}, {fetching} QnaPost {post.title}, {post.body},
// {comments[]}

export default StoryUnMeContainer;