import axios from 'axios';

import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

/*===========================================================================
    authentication
=============================================================================*/

// 로그인 요청
export function loginRequest(username, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios.post('/api/account/signin', { username, password })
        .then((response) => {
            // SUCCEED
            dispatch(loginSuccess(username));
        }).catch((error) => {
            // FAILED
            dispatch(loginFailure());
        });
    };
}

// 로그인
export function login() {
    return {
        type: AUTH_LOGIN
    };
}

// 로그인 성공
export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username
    };
}

// 로그인 실패
export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}
