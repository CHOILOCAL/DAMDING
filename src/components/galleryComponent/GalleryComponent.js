import React, {Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import firebase from '../../Firebase';
// import {Query} from 'mongoose';

import {Link} from 'react-router-dom';

import '../../css/boards.css';

class GalleryComponent extends Component {

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
                                    BOARD LIST
                                </h3>
                            </div>
                            <div class="panel-body">
                                <h4>
                                    <Link to="/gallery/create">Add Board</Link>
                                </h4>
                                <table class="table table-stripe">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Author</th>
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
                                                            <Link to={`/gallery/show/${board.key}`}>{board.title}</Link>
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

export default GalleryComponent;
