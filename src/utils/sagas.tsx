import { all } from 'redux-saga/effects';
// import exampleSaga from './exampleSaga';

// Combine all sagas
export default function* rootSaga() {
  yield all([
    // exampleSaga(),
    // Add more sagas here
  ]);
}