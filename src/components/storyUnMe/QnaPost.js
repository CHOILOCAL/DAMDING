import React, {Component} from 'react';
import '../../css/QnaPost.css';

import CommentList from '../storyUnMe/CommentList';

// import Header from '../Common/Header/Header';

// 전달받는 api props = title, body, comments
class QnaPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postInfo: {
                title: null,
                body: null,
                comments: []
            },
            animate: false,
            direction: 'left'
        }
    }

    componentWillReceiveProps (nextProps) {
        
        const { title, body, comments } = nextProps;
        
        if(this.props.postId !== nextProps.postId) {
            // identify the animation direction
            const direction = this.props.postId < nextProps.postId ? 'left' : 'right';
            
            this.setState({
                direction,
                animate: true
            });

            // sync the props to state 0.5 sec later
            setTimeout(
                () => {
                    this.setState({
                        postInfo: {
                            title, body, comments 
                        },
                        animate: false
                    })
                }, 500
            );
            return;
        }

        // sync the props to state directly (this is the first post)
        this.setState({
            postInfo: {
                title, body, comments 
            }
        })
    }
    
    render() {
        const { title, body, comments } = this.state.postInfo;
        const { animate, direction } = this.state;
        const animation = animate 
                          ? (direction==='left' ? 'bounceOutLeft' : 'bounceOutRight')
                          : (direction==='left' ? 'bounceInRight' : 'bounceInLeft');

        if(title===null) return null;

        return (

            // <Header />

            <div className={`Post animated ${animation}`}>

                <h1 className="qnapost-css">{title}</h1>
                <p>
                    {body}
                </p>
                <CommentList comments={comments}/>
            </div>
            
        );
    }
}

export default QnaPost;