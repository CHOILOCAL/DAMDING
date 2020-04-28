import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";

// Container
import AnimeContainer from './container/AnimeContainer';
import MainContainer from './container/MainContainer';
import SignupContainer from './container/SignupContainer';
import LoginContainer from './container/LoginContainer';

// header menu component
import AboutDamingContainer from "./container/AboutDamingContainer";
import DamdingFamilyContainer from "./container/DamdingFamilyContainer";
import ExpTourContainer from "./container/ExpTourContainer";
import GoodsTourContainer from "./container/GoodsTourContainer";
import WithmeTogetherContainer from "./container/WithmeTogetherContainer";
import StoryUnMeContainer from "./container/StoryUnMeContainer";
import QnaContainer from "./container/QnaContainer";

import Show from "./components/qna/Show";
import Create from "./components/qna/Create";
import Edit from "./components/qna/Edit";

import './animation/Animation.css';
import './animation/Warning.css';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={AnimeContainer}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route exact="/main" path="/main" component={MainContainer}/>

      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer}/>

{/*
                 메인
                 담딩투어
                 담딩가족
                 투어설명서
                 투어상품
                 동행구하기
                 여행이야기
                 문의
                 */
            }
      <Route path="/aboutDaming" component={AboutDamingContainer}/>
      <Route path="/damdingFamily" component={DamdingFamilyContainer}/>
      <Route path="/expTour" component={ExpTourContainer}/>
      <Route path="/goodsTour" component={GoodsTourContainer}/>
      <Route path="/withmeTogether" component={WithmeTogetherContainer}/>
      <Route path="/storyUnMe" component={StoryUnMeContainer}/>

      <Route path="/qna" component={QnaContainer}/> {/* boards routing */}
      
      {/* qnaComponent */}
      <Route path='/edit/:id' component={Edit}/>
      <Route path='/create' component={Create}/>
      <Route path='/show/:id' component={Show}/>
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);