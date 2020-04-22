import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// container
import Anime from './container/Anime';
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

import Show from "./components/galleryComponent/Show";
import Create from "./components/galleryComponent/Create";
import Edit from "./components/galleryComponent/Edit";

import './animation/Animation.css';
import './animation/Warning.css';

// Redux naver login api var passport = require('passport'); var app =
// express(); app.use(passport.initialize()); app.use(passport.session());

class App extends Component {

    render() {

        return (
            <main>
                <Route exact="exact" path="/" component={Anime}/>
                <Route exact="/main" path="/main" component={Main}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/about" component={AboutContainer}/>
                <Route path="/exp" component={ExpComponent}/>
                <Route path="/product" component={ProductComponent}/>
                <Route path="/withme" component={WithMeComponent}/>
                <Route path="/qna" component={QnaContainer}/>
                <Route path="/gallery" component={GalleryComponent}/>
                <Route path="/box" component={BoxComponent}/> {/* boards routing */}
                <Route path='/gallery/edit/:id' component={Edit}/>
                <Route path='/gallery/create' component={Create}/>
                <Route path='/gallery/show/:id' component={Show}/>
            </main>
        );
    }
}

export default App;