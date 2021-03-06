import React, {Component} from 'react';
import firebase from '../../Firebase';
import {Link} from 'react-router-dom';

import '../../css/Boards.css';

import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            title: '',
            description: '',
            author: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
        ref.get().then((doc) => {
                if (doc.exists) {
                    const board = doc.data();
                    // 현재 Data 보여주기
                    this.setState(
                        {
                            key: doc.id, 
                            title: board.title, 
                            description: board.description, 
                            author: board.author}
                    );
                } else {
                    console.log("No such document!");
                }
            });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({board: state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {title, description, author} = this.state;

        const updateRef = firebase
            .firestore()
            .collection('boards')
            .doc(this.state.key);
        updateRef
            .set({title, description, author})
            .then((docRef) => {
                this.setState({key: '', title: '', description: '', author: ''});
                this
                    .props
                    .history
                    .push("/show/" + this.props.match.params.id)
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return (
            <div>

                <Header />

            <div className="boardsFrame">

                {/*  */}
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            수정페이지
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4>
                            <Link to={`/show/${this.state.key}`} class="">리스트 바로가기!!</Link>
                        </h4>
                        {/* 제출할 폼 */}
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">제목:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                    placeholder="Title"/>
                            </div>
                            <div class="form-group">
                                <label for="description">내용:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    placeholder="Description"/>
                            </div>
                            <div class="form-group">
                                <label for="author">글쓴이:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="author"
                                    value={this.state.author}
                                    onChange={this.onChange}
                                    placeholder="Author"/>
                            </div>
                            {/* 제출 버튼 */}
                            <button type="submit" class="">수정하기</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>

            <Footer />

            </div>
        );
    }
}

export default Edit;