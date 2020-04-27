import React, {Component} from 'react';
import 'bootstrap';

import '../../css/GoodsTour.css'

import firebase from '../../Firebase';
// import {Link} from 'react-router-dom';

class goodsTourComponent extends Component {

    constructor(props) {
        super(props);
        console.log('goodsTourComponent', props);

        this.ref = firebase.firestore().collection('goodsTour');
    
        this.unsubscribe = null;
        this.state = {
            goodsTour: []
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                {/* http://placehold.it/150x150 */}
                {/* subject header */}
                <div>
                    <div className="page-header">
                        <h1 className="page-header-css"><small> Subtext for header</small>
                        </h1>
                    </div>
                </div>

                <div
                    style={{
                        backgroundColor: '',
                        height: '5000px',
                        width: '100%'
                    }}>

                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            {/* <Link to={`/goodsTour/${goodsTour.key}`}></Link> */}
                            <img src="http://placehold.it/192x200" alt="..." />
                            <div class="caption">
                                <h3>01. </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <a href="/main">
                            <img src="http://placehold.it/192x200" alt="..."/></a>
                            <div class="caption">
                                <h3>02. </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default goodsTourComponent;
