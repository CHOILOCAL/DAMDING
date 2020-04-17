import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// container
import Main from './container/Main';
import Signup from './container/Signup';
import Login from './container/Login';

// header menu component
import AboutContainer from "./container/AboutContainer";
import ExpComponent from "./components/expComponent/ExpComponent";
import BoxComponent from "./components/boxComponent/BoxComponent";
import GalleryComponent from "./components/galleryComponent/GalleryComponent";
import ProductComponent from "./components/productComponent/ProductComponent";
import QnaContainer from "./container/QnaContainer";
import WithMeComponent from "./components/withMeComponent/WithMeComponent";

import './animation/Animation.css';
import './animation/Warning.css';

// Redux naver login api var passport = require('passport'); var app =
// express(); app.use(passport.initialize()); app.use(passport.session());

class App extends Component {

    render() {

        return (
            <main>
                <Route exact="exact" path="/" component={Main}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={AboutContainer}/>
                <Route path="/exp" component={ExpComponent}/>
                <Route path="/product" component={ProductComponent}/>
                <Route path="/withme" component={WithMeComponent}/>
                <Route path="/qna" component={QnaContainer}/>
                <Route path="/gallery" component={GalleryComponent}/>
                <Route path="/box" component={BoxComponent}/>
            </main>
        );
    }
}

export default App;
