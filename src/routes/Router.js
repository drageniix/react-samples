import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../common/Loading';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Trillo = Loadable({
    loader: () => import('../pages/Trillo/app'),
    loading: Loading
});

const Natours = Loadable({
    loader: () => import('../pages/Natours/app'),
    loading: Loading
});

const Router = () => (
    <BrowserRouter>
        <div>
            <div className="main-layout">
                <main className="main-layout__body">
                    <Switch>
                        <Route exact path="/trillo" component={Trillo} />
                        <Route exact path="/natours" component={Natours} />
                    </Switch>
                </main>
            </div>
        </div>
    </BrowserRouter>
);

export default Router;
