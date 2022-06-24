import axios from "axios";
import { delay, put, takeLatest, all, fork } from 'redux-saga/effects';

function logOutAPI() {
    return axios.post('/api/logout');
}



function* logOut(action) {
    try {
        yield delay(1000);
        // const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: action.data,
        }); // 요청성공
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })// 요청실패
    }
}



function logInAPI(data) {
    return axios.post('/api/login', data);
}



function* logIn(action) {
    try {
        yield delay(1000); //서버가 없으니 
        // const result = yield call(logInAPI, action.data);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data,
        }); // 요청성공
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        })// 요청실패
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}