import React, {Component} from 'react';

import firebase from '../Firebase';

import {Link} from 'react-router-dom';

import '../css/Boards.css';

import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

class QnaContainer extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase
            .firestore()
            .collection('boards');
        this.unsubscribe = null;
        this.state = {
            boards: []
        };

        console.log(this.state.boards);
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
                <Header />


<div class="row">
  <div class="col-xs-3 col-md-2">글번호</div>
  <div class="col-xs-3 col-md-2">작성일자</div>
  <div class="col-xs-3 col-md-2">제목</div>
  <div class="col-xs-3 col-md-2">내용</div>
  <div class="col-xs-3 col-md-2">작성자</div>
</div>

<div class="row">
  <div class="col-xs-3 col-md-2"></div>
  <div class="col-xs-3 col-md-2"></div>
  <div class="col-xs-3 col-md-2"></div>
  <div class="col-xs-3 col-md-2"></div>
  <div class="col-xs-3 col-md-2"></div>
</div>

                            
               <div className="QnaBoard-div-css">
                   
                    {/* 테이블 시작 */}
                    <div className="panel panel-default">
                        <div className="panel-body">                            
                                <table class="">
                                    <thead>
                                        <tr>
                                            <th>글번호</th>
                                            <th>작성일자</th>
                                            <th>제목</th>
                                            <th>내용</th>
                                            <th>작성자</th>
                                        </tr>
                                    </thead>
                                    {/* 테이블 제목 끝 */}
                                    <tbody>
                                        {
                                            this
                                                .state
                                                .boards
                                                .map(
                                                    board => <tr>
                                                        <td>{board.number}</td>
                                                        <td>{board.yymmdd}</td>
                                                        <td>
                                                            <Link to={`/show/${board.key}`}>{board.title}</Link>
                                                        </td>
                                                        <td>{board.description}</td>
                                                        <td>{board.author}</td>
                                                    </tr>
                                                )
                                        }
                                    </tbody>
                                    {/* 테이블 티바디 끝 */}
                                </table>
                            </div>
                        </div>
                                {/* 테이블 끝 */}
                        </div>
                <Footer />
            </div>
        )
    }
}

export default QnaContainer;
