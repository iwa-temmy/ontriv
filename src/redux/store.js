import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f),

);

sagaMiddleware.run(sagas);



export default store;

