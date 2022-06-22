import { all, fork, call, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { addPost } from '../reducers/post';


function addPostAPI(data) {
    return axios.post('/api/post', data);
}



function* addPost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCESS',
            // data: result.data,
        }); // 요청성공
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            // data: err.response.data,
        })// 요청실패
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}



function* logOut() {
    try {
        yield delay(1000);
        // const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data,
        }); // 요청성공
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            // data: err.response.data,
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
            // data: result.data,
        }); // 요청성공
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            // data: err.response.data,
        })// 요청실패
    }
}



function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield takeLatest('ADD_POST-REQUEST', addPost, 10000);
}


export default function* rootSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost)
    ])
}