import React, {Component} from 'react';
import '../../css/Exp.css';

import firebase from '../../Firebase';

class expTourComponent extends Component {

    constructor() {
        super();
        console.log('expTourComponent ::: ', expTourComponent);
    }

    componentDidMount() {}

    render() {

        return (

            <div>

                <div className="exp-css">

                    <div className="expTour-css">
                        <h6>생각해보아요</h6>
                    </div>

                    <div className="exp00-css">
                        <h6>메뉴얼 0 1 2 3 4 5 6 7 8 9 (누르면 단계별로 스크롤 이동)</h6>
                    </div>

                    <div className="exp01-css">
                        <h6>01. expTourComponenet 날짜</h6>
                    </div>

                    <div className="exp02-css">
                        <h6>02. componentDidMount 인원</h6>
                    </div>

                    <div className="exp03-css">
                        <h6>03. componentDidMount 투어/가이드 선택</h6>
                    </div>

                    <div className="exp04-css">
                        <h6>04. componentDidMount 몽골현지식 / 한식</h6>
                    </div>

                    <div className="exp05-css">
                        <h6>05. componentDidMount 차량
                        </h6>
                    </div>

                    <div className="exp06-css">
                        <h6>06. componentDidMount 빡빡한 일정 / 여유로운 일정
                        </h6>
                    </div>

                    <div className="exp07-css">
                        <h6>07. componentDidMount 액티비티
                        </h6>
                    </div>

                    <div className="exp08-css">
                        <h6>08. componentDidMount 메인 이벤트
                        </h6>
                    </div>

                    <div className="exp09-css">
                        <h6>09. componentDidMount 기타
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default expTourComponent;
