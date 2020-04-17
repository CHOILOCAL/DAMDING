import React, {Component} from 'react';

import { Carousel } from 'react-bootstrap';

class AboutComponent extends Component {

    render() {
        return (
            <div style={{ marginTop: '0%', height: '50px' }}> 
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://placehold.it/500x500"
                            alt="First slide"/>
                        <Carousel.Caption>
                            <h3>첫번째</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://placehold.it/30x30"
                            alt="Third slide"/>

                        <Carousel.Caption>
                            <h3>두번째</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://placehold.it/40x40"
                            alt="Third slide"/>

                        <Carousel.Caption>
                            <h3>세번째</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default AboutComponent;
