import React, {Component} from 'react';

import firebase from '../../Firebase';

import {Link} from 'react-router-dom';

import '../../css/Boards.css';

class qnaComponent extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase
            .firestore()
            .collection('boards');
        this.unsubscribe = null;
        this.state = {
            boards: []
        };

    }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const {title, description, author} = doc.data();
            boards.push({
                key: doc.id, doc, // DocumentSnapshot
                title,
                description,
                author
            });
        });
        this.setState({boards});
    }

    componentDidMount() {
        this.unsubscribe = this
            .ref
            .onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div>
                <div className="boardsFrame">
                    {/*  */}
                    <div class="container">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    문의게시판
                                </h3>
                            </div>
                            <div class="panel-body">
                                <h4>
                                    <Link to="/create">새 글 작성</Link>
                                </h4>
                                <table class="table table-stripe">
                                    <thead>
                                        <tr>
                                            <th>작성일자</th>
                                            <th>제목</th>
                                            <th>내용</th>
                                            <th>작성자</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this
                                                .state
                                                .boards
                                                .map(
                                                    board => <tr>
                                                        <td>
                                                            <Link to={`/show/${board.key}`}>{board.title}</Link>
                                                        </td>
                                                        <td>{board.description}</td>
                                                        <td>{board.author}</td>
                                                    </tr>
                                                )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default qnaComponent;
