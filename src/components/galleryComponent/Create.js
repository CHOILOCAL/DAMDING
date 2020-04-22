import React, {Component} from 'react';
import firebase from '../../Firebase';
import {Link} from 'react-router-dom';

import '../../css/boards.css';

class Create extends Component {

    constructor() {
        super();
        this.ref = firebase
            .firestore()
            .collection('boards');
        this.state = {
            title: '',
            description: '',
            author: ''
        };
    }

    componentDidMount() {

    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title,  description, author } = this.state;

        this.ref.add({
            title,
            description,
            author
        }).then((docRef) => {
            this.setState({
                title: '',
                description: '',
                author: ''
            });
            this.props.history.push("/")
        })
        .catch((error) => {
            console.log("Error adding document : ", error);
        })
    }

    render() {

        const {title, description, author} = this.state;

        return (

            <div className="boardsFrame">

            {/*  */}
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            게시판
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4>
                            <Link to="/gallery/show" class="btn btn-primary">리스트 바로가기</Link>
                        </h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">제목:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="title"
                                    value={title}
                                    onChange={this.onChange}
                                    placeholder="제목을 입력해주세요."/>
                            </div>
                            <div class="form-group">
                                <label for="description">내용:</label>
                                <textArea
                                    class="form-control"
                                    name="description"
                                    onChange={this.onChange}
                                    placeholder="내용을 입력해주세요."
                                    cols="80"
                                    rows="3">{description}</textArea>
                            </div>
                            <div class="form-group">
                                <label for="author">글쓴이:</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="author"
                                    value={author}
                                    onChange={this.onChange}
                                    placeholder="최현지"/>
                            </div>
                            <button type="submit" class="btn btn-success">등록</button>
                        </form>
                    </div>
                </div>
            </div>


            </div>
        );
    }

}

export default Create;