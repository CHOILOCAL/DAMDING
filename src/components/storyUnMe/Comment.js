import React from 'react';
import '../../css/Comment.css'

const Comment = ({name, body}) => {

    return (
        <li className="Comment">
            <p>
                <b>{name}</b> {body} <br />
            </p>
        </li>

    );
};

export default Comment;