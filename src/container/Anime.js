import anime from 'animejs/lib/anime.es.js';
import React, {Component} from 'react';
import '../css/Anime.css';

import {Link} from 'react-router-dom';

class Anime extends Component {

    handleAnimatipon = () => {
        var ml4 = {};
        ml4.opacityIn = [0, 1];
        ml4.scaleIn = [0.2, 1];
        ml4.scaleOut = 3;
        ml4.durationIn = 800;
        ml4.durationOut = 600;
        ml4.delay = 500;

        anime
            .timeline({loop: true})
            .add(
                {targets: '.ml4 .letters-1', opacity: ml4.opacityIn, scale: ml4.scaleIn, duration: ml4.durationIn}
            )
            .add({
                targets: '.ml4 .letters-1',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            })
            .add(
                {targets: '.ml4 .letters-2', opacity: ml4.opacityIn, scale: ml4.scaleIn, duration: ml4.durationIn}
            )
            .add({
                targets: '.ml4 .letters-2',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            })
            .add(
                {targets: '.ml4 .letters-3', opacity: ml4.opacityIn, scale: ml4.scaleIn, duration: ml4.durationIn}
            )
            .add({
                targets: '.ml4 .letters-3',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            })
        // .add({targets: '.ml4', opacity: 0, duration: 10, delay: 10}); comming soon
        var textWrapper = document.querySelector('.ml10 .letters');
        textWrapper.innerHTML = textWrapper
            .textContent
            .replace(/\S/g, "<span class='letter'>$&</span>");

        anime
            .timeline({loop: true})
            .add({
                targets: '.ml10 .letter',
                rotateY: [
                    -90, 30
                ],
                duration: 1300,
                delay: (el, i) => 45 * i
            })
            .add(
                {targets: '.ml10', opacity: 100, duration: 1000, easing: "easeOutExpo", delay: 1000}
            );
    }

    componentDidMount() {
        this.handleAnimatipon()
    }

    render() {

        return (
            <div class="bg">
                <h1 class="ml10">
                    <span class="text-wrapper">
                        <Link to="/main" class="bg"><span class="letters">DAMDING TOUR</span></Link>
                    </span>
                </h1>
                <h1 class="ml4">
                    <span class="letters letters-1">Comming Soon !</span>
                </h1>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
            </div>
        )
    }
}

export default Anime;