import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlewere from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
    const sagaMiddlewere = createSagaMiddlewere();
    const middlewares = [sagaMiddlewere];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) //배포용
        : composeWithDevTools(applyMiddleware(...middlewares)) //개발자용
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddlewere.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { 
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;