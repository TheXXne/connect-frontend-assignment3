import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../features/rootSaga';
import rootReducer from '../features/rootReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// render the application
export default store;
