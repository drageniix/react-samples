import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default async isServer => {
    const data = await fetch('/assets/data/trillo.json').then(res =>
        res.json()
    );

    const reducer = (state = data) => state;

    if (isServer && typeof window === 'undefined') {
        return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    } else {
        return window.store
            ? window.store
            : (window.store = createStore(
                  reducer,
                  composeEnhancers(applyMiddleware(thunk))
              ));
    }
};
