import React from 'react';
import '../../css/QnaPost.css';

import CommentList from '../qnaComponent/CommentList';
// import Comment from '../qnaComponent/Comment';

// 전달받는 props = title, body, comments
const QnaPost = ({title, body, comments}) => (

    <div className="QnaPost">
        <h1>{title}</h1>
        <p>
            {body}
            <CommentList comments={comments} />
        </p>
    </div>
);

export default QnaPost;