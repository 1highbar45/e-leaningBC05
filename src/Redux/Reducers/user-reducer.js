import { FETCH_CREDENTIALS } from "../Actions/const";

let initialState = {
    user: null, // thông tin đăng nhập ban đầu bằng null
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDENTIALS:
            state.user = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default UserReducer;
