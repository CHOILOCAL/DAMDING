import anime from 'animejs/lib/anime.es.js';
import React, {Component} from 'react';
import '../css/Anime.css';

import {Link} from 'react-router-dom';

class Anime extends Component {

    handleAnimatipon = () => {
        var textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = textWrapper
            .textContent
            .replace(/\S/g, "<span class='letter'>$&</span>");

        anime
            .timeline({loop: true})
            .add({
                targets: '.ml6 .letter',
                translateY: [
                    "1.1em", 0
                ],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 50 * i
            })
            .add(
                {targets: '.ml6', opacity: 0, duration: 1000, easing: "easeOutExpo", delay: 1000}
            );
    }

    componentDidMount() {
        this.handleAnimatipon()
    }

    render() {

        return (
            <div>
            {/* <Link to="/main"> */}
                    <h1 class="ml6">
                        <span class="text-wrapper">
                            <span class="letters">담딩투어</span>
                            <span class="letters2">DAMDING</span>
                            <span class="letters3">테스트</span>
                            <Link to="/main">
                            <h1 class="">바로가기
                            </h1>
                            </Link>
                        </span>
                    </h1>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
            {/* </Link> */}
            </div>
        )
    }
}

export default Anime;