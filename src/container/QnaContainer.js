import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import QnaWrapper from "../components/qnaComponent/QnaWrapper";
import Navigate from "../components/qnaComponent/Navigate";
import QnaPost from "../components/qnaComponent/QnaPost";

// import CommentList from "../components/qnaComponent/CommentList";
// import Comment from "../components/qnaComponent/Comment";

import * as service from '../../src/services/post';
import Warning from '../Error/Warning';

class QnaContainer extends Component {

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
            warningVisibility: false
        };
        console.log("post : " + this.state.post);
        console.log("post > title : " + this.state.post.title);
        console.log("post > body : " + this.state.post.body);
        console.log("comments : " + this.state.comments[0]); // index[0]
    }

    showWarning = () => {
        this.setState({
            warningVisibility: true
        });

        // 1.5초 후에

        setTimeout(
            () => {
                this.setState({
                    warningVisibility: false
                });
            }, 1500
        );
    }

    // src > services > post.js API 호출
    fetchPostInfo = async (postId) => {

        // Before a Request 
        this.setState({
            fetching: true // requesting ...
        })

        // 방법 1. POST (첫번째 비동기)
        // const post = await service.getPost(postId);
        // console.log(post);
        // POST COMMNETS (두번째 비동기)
        // const comments = await service.getComment(postId);
        // console.log(comments);

        try{
            // 방법 2. 한번에 POST, POST COMMENTS 동기해오기
            const info = await Promise.all([
                service.getPost(postId),
                service.getComment(postId)
            ]);
            console.log("info(getPost, getComment) : " + info);
    
            const {title, body} = info[0].data;
            const comments = info[1].data;
    
            console.log("comments : " + comments);
    
            this.setState({
                postId,
                post: {
                    title, 
                    body
                },
                comments,
                fetching: false // done!
            });
        }catch(e) {
            this.setState({
                fetching: false
            });
            console.log('fetchPostInfo error : ' + e);
            this.showWarning(); // error시에 보여줄 경고문구
        }
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    // NavigateClick METHOD
    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if(type === 'NEXT') {
            this.fetchPostInfo(postId+1);
        } else {
            this.fetchPostInfo(postId-1);
        }
    }

    render() {

        // 하위 component에 props로 값 전달 <비구조화 할당 문법>
        // <비구조화 할당 문법> this.state.post.title => post.title 간략 사용 가능
        const { postId, fetching, post, comments, warningVisibility } = this.state;

        return(
            <div>
                <Header />
                <QnaWrapper>
                    <Navigate postId={postId} disable={fetching} onClick={this.handleNavigateClick} />
                    <QnaPost title={post.title} body={post.body} comments={comments}/>
                    <Warning visible={warningVisibility} message="페이지가 존재하지 않습니다."/>
                    </QnaWrapper>
                <Footer />
            </div>
        )
    }
}

// 전달되는 props
// Navigate {postId}, {fetching}
// QnaPost {post.title}, {post.body}, {comments[]}  

export default QnaContainer;