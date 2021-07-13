import { START_LOADING, STOP_LOADING } from "../Actions/const";

let initialState = {
    loading: false, // true sẽ load trang, false dừng load trang
};

export const CommonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case START_LOADING: {
            state.loading = true;
            return { ...state };
        }
        case STOP_LOADING: {
            state.loading = false;
            return { ...state };
        }
        default:
            return state;
    }
};
