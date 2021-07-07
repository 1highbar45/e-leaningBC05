import { userService } from "../../Services";
import { createAction } from ".";
import { FETCH_CREDENTIALS } from "./const";
// import Axios from "axios";
// import { history } from "../../App";

export const login = (user) => {
    return (dispatch) => {
        userService
            .signIn(user)
            .then((res) => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));
                // localStorage.setItem("credentials", JSON.stringify(res.data));
                if (res.status === 200) {
                    // lưu lại tài khoản
                    localStorage.setItem(
                        "credentials",
                        JSON.stringify(res.data)
                    );
                    // chuyển về trang trước đó
                    // history.goBack();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
