import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default async isServer => {
    const trillo = await fetch('/assets/data/trillo.json').then(res =>
        res.json()
    );
    const natours = await fetch('/assets/data/natours.json').then(res =>
        res.json()
    );
    const home = await fetch('/assets/data/home.json').then(res => res.json());

    //Sample app, no actions
    const reducer = (state = { trillo, natours, home }) => state;

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
