const initialState = { //여기가 state
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
};

//action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
};

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
};


// 데이터를 바꾸고싶으면 항상 action을 만들어주면된다.
// const changeNickname = { //여기가 action
//     type: 'CHANGE_NICKNAME',
//     data: 'chi',
// }

/// reducer는 이전 상태와 액션을 통해서 다음 상태를 만들어내는 함수이다.
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }

            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            };
        default: return state;
    }

}
export default rootReducer;