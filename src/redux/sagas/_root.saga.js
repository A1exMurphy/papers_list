import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import eventSaga from './event.saga';
import archivedEventSaga from './adminArchive.saga';
import newEventSaga from './newEvent.saga';
import contactSaga from './contactInfo.saga';
import permanentDeleteSaga from './permanentDelete.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    permanentDeleteSaga(),
    contactSaga(),
    newEventSaga(),
    archivedEventSaga(),
    eventSaga(),
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
}
