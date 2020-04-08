import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// container
import Main from './container/Main';
import Signup from './container/Signup';
import Login from './container/Login';

class App extends Component {

    render() {      
        return (
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/signup/:signupId" component={Signup} />
                <Route path="/login/:loginId" component={Login} />
            </div>
        );
    }
}

export default App;
