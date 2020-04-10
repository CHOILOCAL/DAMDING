import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class HeaderRoute extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/about" component={AboutComponent} />

                </Switch>
            </main>
        );
    }
}

export default HeaderRoute;
