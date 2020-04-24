/*global kakao*/ 
import React, { Component } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import '../../css/Exp.css';

import styled from "styled-components";

class ExpComponent extends Component {


    // 맵박스 불러오기 (javascript)
    // index.html 에 넣어줘도 되지만 componentDidMount() script element append 가능
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=5fb1a887f51b3b3a1d1a76c41b9b545a&autoload=false";
        document.head.appendChild(script);

        // 지도 띄우기
        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("Mymap");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level: 7
                  };
                  const map = new window.kakao.maps.Map(container, options);
                });
        };
    }

    render() {   

        return(
            <div>
                <Header />

                {/* 지도를 담을 영역 */}
                <MapContents id="Mymap"></MapContents>

                <Footer />
            </div>
        )
    }
}

// 지도 담기
const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default ExpComponent;

