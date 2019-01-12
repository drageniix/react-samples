import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

configureStore().then(store => {
    const App = () => (
        <Provider store={store}>
            <Router />
        </Provider>
    );

    ReactDOM.render(<App />, document.getElementById('content'));
});
