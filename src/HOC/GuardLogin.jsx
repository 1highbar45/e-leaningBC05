import React from "react";
import { Redirect } from "react-router-dom";

function GuardLogin(props) {
    let credentials = {};
    if (localStorage.getItem("credentials")) {
        credentials = JSON.parse(localStorage.getItem("credentials"));
    }

    if (credentials.accessToken) {
        // đã login
        return props.children;
    } else {
        // chưa login
        return <Redirect to="/signin" />;
    }
}

export default GuardLogin;
