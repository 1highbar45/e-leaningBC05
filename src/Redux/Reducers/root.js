import { combineReducers } from "redux";
import CourseReducer from "./course";
const RootReducer = combineReducers({
    course: CourseReducer,
});

export default RootReducer;
