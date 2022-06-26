import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const initialState = {};

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
    const enhancers = compose(
        applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
    );
    const store = createStore(persistedReducer, initialState, enhancers);
    const persistor = persistStore(store);
    sagaMiddleware.run(sagas);
    return {store, persistor};
}

// const store = createStore(
//     persistedReducer,
//     initialState,
//     compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : (f) => f),

// );




