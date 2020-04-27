import React, {Component} from 'react';
import firebase from '../../Firebase';
import {Link} from 'react-router-dom';

import '../../css/Boards.css';

import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);

        ref.get().then((doc) => {
                if (doc.exists) {
                    this.setState({board: doc.data(), key: doc.id, isLoading: false});
                } else {
                    console.log("No such document!");
                }
            });
    }

    delete(id) {
        firebase.firestore().collection('boards').doc(id).delete().then(() => {
                console.log("Document successfully deleted!");
                this.props.history.push("/")
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    render() {
        return (
        <div>
          
          <Header />
  
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
              <h4><Link to="/">게씨판</Link></h4>
                <h3 class="panel-title">
                  {this.state.board.title}
                </h3>
              </div>
              <div class="panel-body">
                <dl>
                  <dt>내용:</dt>
                  <dd>{this.state.board.description}</dd>
                  <dt>글쓴이:</dt>
                  <dd>{this.state.board.author}</dd>
                </dl>
                <Link to={`/edit/${this.state.key}`} class="">수정하기</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.key)} class="">삭제하기</button>
              </div>
            </div>
          </div>

      <Footer />

</div>
        );
      }
    }

export default Show;