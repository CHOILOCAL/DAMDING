import React, {Component} from 'react';
import 'bootstrap';

import firebase from '../../Firebase';

class damdingFamilyComponent extends Component {

    constructor(props) {
        super(props);
        console.log('damdingFamilyComponent', props);

    }

    componentDidMount() {}

    render() {
        return (
            <div>

                {/* 현빈 */}

                {/* 수지, 가나 ... etc (가이드, 드라이버)*/}
                {/* http://bootstrapk.com/components/#thumbnails > 기본미디어 */}

                <ul class="media-list">
                    <li class="media">
                        <div class="media-left">
                            <a href="/main">
                                <img class="media-object" src="http://placehold.it/120x120" alt="first"/></a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">First Media heading</h4>
                            <small>dddddd</small>
                        </div>
                    </li>
                </ul>

                <ul class="media-list">
                    <li class="media">
                        <div class="media-left">
                            <a href="/main">
                                <img class="media-object" src="http://placehold.it/120x120" alt="first"/></a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">First Media heading</h4>
                            <small>dddddd</small>
                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}

export default damdingFamilyComponent;