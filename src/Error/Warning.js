import React, {Component} from 'react';
import "../animation/Animation.css";
import "../animation/Warning.css";

class Warning extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closing: false
        };
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.visible && !nextprops.visible) {

            this.setState({closing: true});

            setTimeout(() => {
                this.setState({closing: false});
            }, 1000);
        }
    }

    render() {

        const {visible, message} = this.props;
        const {closing} = this.state;

        if (!visible && !closing) {
            return null
        }

        return (
            <div className="Warning-wrapper">
                <div
                    className={`Warning ${closing
                        ? 'zoomInUp'
                        : 'zoomInUp'} animated`}>
                    {message}
                </div>
            </div>

        )
    }
}

export default Warning;