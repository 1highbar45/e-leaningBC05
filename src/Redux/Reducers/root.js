import { combineReducers } from "redux";
import CourseReducer from "./course";
import UserReducer from "./user";

const RootReducer = combineReducers({
    course: CourseReducer,
    user: UserReducer,
});

export default RootReducer;
