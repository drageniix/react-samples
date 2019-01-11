import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Overview from './components/Overview';
import Description from './components/Description';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';

import './styles/index.scss';

configureStore().then(store => {
    const App = () => (
        <Provider store={store}>
            <div className="container">
                <Header />
                <div className="content">
                    <SideBar />
                    <main className="hotel-view">
                        <Overview />
                        <section className="detail">
                            <Description />
                            <Reviews />
                        </section>
                        <CallToAction />
                    </main>
                </div>
            </div>
        </Provider>
    );

    ReactDOM.render(<App />, document.getElementById('content'));
});
