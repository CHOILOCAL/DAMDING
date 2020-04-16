import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import QnaWrapper from "../components/qnaComponent/QnaWrapper";
import Navigate from "../components/qnaComponent/Navigate";
import QnaPost from "../components/qnaComponent/QnaPost";
import Comment from "../components/qnaComponent/Comment";

class QnaContainer extends Component {

    render() {
        return(
            <div>
                <Header />

                <QnaWrapper>
                    <Navigate />
                    <QnaPost/>
                    {/* 덧글 정보 리스트 */}
                    {/* CommentList */}
                    
                    <Comment />
                    {/* 여러개의 컴포넌트 연결 예정 */}
                    
                    </QnaWrapper>
                <Footer />
            </div>
        )
    }
}

export default QnaContainer;