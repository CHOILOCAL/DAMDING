import React from 'react';
import Comment from './Comment';
import '../../css/CommentList.css'

const CommentList = ({comments}) => {

    // [Object, Object]
    const CommentList = comments.map(
        (comment, index)=>(
            <Comment
            name={comment.email.split('@')[0]}
            body={comment.body}
            key={index}
            />
        )
    );

    return (
        <ul className="CommentList">
            {CommentList}
        </ul>
    );
}

export default CommentList;