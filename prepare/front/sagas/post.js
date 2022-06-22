import axios from "axios";
import { delay, put, takeLatest, all, fork } from 'redux-saga/effects';


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

function* watchAddPost() {
    yield takeLatest('ADD_POST-REQUEST', addPost, 10000);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}