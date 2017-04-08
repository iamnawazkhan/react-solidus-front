import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { loginFailed, setUser, LOGIN_REQUEST, SIGNUP_REQUEST, signUpFailed } from 'reducers/auth';

export function* login(action) {
  try {
    const user = yield call(request, '/api/users', {
      query: { user: action.payload.toObject() },
    });
    yield put(setUser(user));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

export function* loginWatcher() {
  yield fork(takeLatest, LOGIN_REQUEST, login);
}

export function* loginManager() {
  const watcher = yield fork(loginWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* signUp(action) {
  try {
    debugger;
    const user = yield call(request, '/api/users', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ user: action.payload.toObject() }),
    });
    yield put(setUser(user));
  } catch (err) {
    yield put(signUpFailed(err));
  }
}

export function* signUpWatcher() {
  yield fork(takeLatest, SIGNUP_REQUEST, signUp);
}

export function* signUpManager() {
  const watcher = yield fork(signUpWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  loginManager,
  signUpManager
];
