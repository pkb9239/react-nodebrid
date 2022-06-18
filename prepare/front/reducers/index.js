import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import post from './post';
import { combineReducers } from 'redux'; // reducer합쳐주는 메서드

// 데이터를 바꾸고싶으면 항상 action을 만들어주면된다.
// const changeNickname = { //여기가 action
//     type: 'CHANGE_NICKNAME',
//     data: 'chi',
// }

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;