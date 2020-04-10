import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// container
import Main from './container/Main';
import Signup from './container/Signup';
import Login from './container/Login';

// naver login api
// var passport = require('passport');

// var app = express();

// app.use(passport.initialize());
// app.use(passport.session());

class App extends Component {

    // 생성자, 가장 먼저 호출
    // props = 부모, state = 본인 ***
    constructor() {
        super(this.props);
        this.state = {
            username : null
        };
    }

    componentDidMount(): void {
        fetch('http://localhost:3001/api')
            .then(res=>res.json())
            .then(data=>this.setState({usename:data.username}));
    }

    render() {

        const { username } = this.state; // null

        return (
            <main>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/signup/:signupId" component={Signup} />
                <Route path="/login" component={Login} />
                </Switch>
            </main>
        );
    }

}

export default App;
