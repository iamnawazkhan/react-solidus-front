import { fromJS } from 'immutable';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SET_USER = 'SET_USER';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const login = (userData) => {
  return {
    type: LOGIN_REQUEST,
    payload: userData
  }
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  }
};

export const loginFailed = (data) => {
  return {
    type: LOGIN_FAILED,
  }
};

export const signUp = (userData) => {
  return {
    type: SIGNUP_REQUEST,
    payload: userData
  }
};

export const signUpFailed = (data) => {
  return {
    type: SIGNUP_FAILED,
  }
};

function authReducer(state = fromJS({}), { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default authReducer;
