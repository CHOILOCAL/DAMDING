import React, { Component } from 'react';
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import qnaComponent from "../components/qna/qnaComponent";

class QnaContainer extends Component {

    constructor(props){
        super(props);
        this.setState({
            mode: '',
            user: '',
            isLoggerd: ''
        });
    }

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