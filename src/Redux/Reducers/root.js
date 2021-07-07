import { combineReducers } from "redux";
import { CommonReducer } from "./common-reducer";
import CourseReducer from "./course-reducer";
import UserReducer from "./user-reducer";

const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer,
    common: CommonReducer,
});

export default RootReducer;
