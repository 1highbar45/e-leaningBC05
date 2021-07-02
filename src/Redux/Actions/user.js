import { userService } from "../../Services";
import { createAction } from ".";
import { FETCH_CREDENTIALS } from "./type";

export const login = (user) => {
    return (dispatch) => {
        userService
            .signIn(user)
            .then((res) => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));
                localStorage.setItem("credentials", JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
