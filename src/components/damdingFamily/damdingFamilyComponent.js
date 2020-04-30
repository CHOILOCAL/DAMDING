import React, {Component} from 'react';
import 'bootstrap';

import firebase from '../../Firebase';
import '../../css/DamdingFamily.css';

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
                <div className="damdingfamily-css">
                {/* <div className="family-css"> */}
                        <h6>현빈</h6>
                {/* </div> */}
                <div className="driver-exp-css">
                                <img class="img-circle" src="http://placehold.it/280x280" alt=""/>
                </div>
                </div>


                {/* 수지, 가나 ... etc (가이드, 드라이버)*/}
                {/* http://bootstrapk.com/components/#thumbnails > 기본미디어 */}


                <div className="family-css">
                        <h6>담딩 드라이버</h6>
                </div>

                {/* 드라이버 */}
                <div className="driver-exp-css">
                <ul class="media-list">
                    <li class="media">
                        <div class="media-left">
                            <a href="/main">
                                <img class="img-circle" src="http://placehold.it/180x180" alt="first"/></a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">가나</h4>
                            <small>어떤 차도 고칠 수 있다!</small>
                        </div>
                    </li>
                </ul>

{/* 드라이버 끝 */}
                </div>

                <div className="family-css">
                        <h6>담딩 가이드</h6>
                </div>

{/* 가이드 */}
<div className="guide-exp-css">
                <ul class="media-list">
                    <li class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="http://placehold.it/180x180" alt="first"/></a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">수지</h4>
                            <small>몽골음식이 힘들다면 ? </small>
                        </div>
                    </li>
                </ul>

                <ul class="media-list">
                    <li class="media">
                        <div class="media-left">
                            <a href="/main">
                                <img class="media-object" src="http://placehold.it/180x180" alt="first"/></a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">아무개 1</h4>
                            <small>dddddd</small>
                        </div>
                    </li>
                </ul>

                <ul class="media-list">
                    <li class="media">
                        <div class="media-left">
                            <a href="/main">
                                <img class="media-object" src="http://placehold.it/180x180" alt="first"/></a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">아무개 2</h4>
                            <small>dddddd</small>
                        </div>
                    </li>
                </ul>
                </div>
                {/* 가이드 끝 */}

            </div>
        )
    }
}

export default damdingFamilyComponent;