import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/index';
import createSagaMiddleware from 'redux-saga';
import bookSaga from 'middleware/bookSaga';

const middleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(middleware));

middleware.run(bookSaga);

export default store;
