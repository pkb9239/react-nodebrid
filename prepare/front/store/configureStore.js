import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) //배포용
        : composeWithDevTools(applyMiddleware(...middlewares)) //개발자용
    const store = createStore(reducer, enhancer);
    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: 'chi',
    })
    return store;
};

const wrapper = createWrapper(configureStore, { 
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;