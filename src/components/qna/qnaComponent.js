import React, {Component} from 'react';
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

import firebase from '../../Firebase';
// import {Query} from 'mongoose';

import {Link} from 'react-router-dom';

import '../../css/boards.css';

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

                <Header/>

                <div className="boardsFrame">

                    

                    {/*  */}
                    <div class="container">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    게쉬판
                                </h3>
                            </div>
                            <div class="panel-body">
                                <h4>
                                    <Link to="/create">글쓰기</Link>
                                </h4>
                                <table class="table table-stripe">
                                    <thead>
                                        <tr>
                                            <th>제목</th>
                                            <th>내용</th>
                                            <th>글쓴이</th>
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

                <Footer/>
            </div>
        )
    }
}

export default qnaComponent;
