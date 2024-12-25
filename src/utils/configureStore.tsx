import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Combine your reducers here
import rootSaga from './sagas'; // Combine your sagas here

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer, // Combine your reducers
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the saga middleware
sagaMiddleware.run(rootSaga);

export default store;