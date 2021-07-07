import { createAction } from ".";
import { courseService } from "../../Services";
import { startLoadingAction, stopLoadingAction } from "./common-action";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./const";

// async actions
export const fetchCourses = () => {
    return (dispatch) => {
        courseService
            .fetchCourses()
            // promise
            .then((res) => {
                dispatch(createAction(FETCH_COURSES, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const fetchDetailCourse = (id) => {
    return (dispatch) => {
        dispatch(startLoadingAction());
        courseService
            .fetchCourseDetail(id)
            .then((res) => {
                dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
                dispatch(stopLoadingAction());
            })
            .catch((err) => {
                dispatch(stopLoadingAction());
                console.log(err);
            });
    };
};
