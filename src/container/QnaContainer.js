import React, { Component } from 'react';
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import qnaComponent from '../components/qna/qnaComponent';

class QnaContainer extends Component {



    componentDidMount() {

    }

    render() {

        return(
            <div>
                <Header />

                <qnaComponent />
              

                <Footer />
            </div>
        )
    }
}

export default QnaContainer;