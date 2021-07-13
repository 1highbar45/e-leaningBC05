import { userService } from "../../Services";
import { createAction } from ".";
import { FETCH_CREDENTIALS } from "./const";
// import Axios from "axios";

export const login = (user) => {
    return (dispatch) => {
        userService
            .signIn(user)
            .then((res) => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));
                localStorage.setItem("user", JSON.stringify(res.data));
                // trở lại trang trước đó
                window.history.go(-1);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
