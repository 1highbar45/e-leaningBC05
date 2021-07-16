import "./App.css";
import HomeScreen from "./Screens/Home/HomeScreen";
import CourseDetailScreen from "./Screens/Detail/CourseDetailScreen";
import SignupScreen from "./Screens/Signup/SignupScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import SigninScreen from "./Screens/Signin/SigninScreen";
import { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "./Redux/Actions";
import { FETCH_CREDENTIALS } from "./Redux/Actions/const";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import GuardLogin from "./HOC/GuardLogin";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    {/* <GuardLogin> */}
                    <Route
                        path="/detail/:courseId"
                        component={CourseDetailScreen}
                    />
                    <Route path="/signup" component={SignupScreen} />
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/" component={HomeScreen} />
                    {/* </GuardLogin> */}
                </Switch>
            </BrowserRouter>
        );
    }

    _getUserFromLocal = () => {
        const credentialsStr = localStorage.getItem("credentials");
        if (credentialsStr) {
            this.props.dispatch(
                createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStr))
            );
        }
    };

    componentDidMount() {
        this._getUserFromLocal();
    }
}

export default connect()(App);

// function App() {
//     const dispatch = useDispatch();
//     return (
//         <BrowserRouter>
//             <Header />
//             <Switch>
//                 {/* <GuardLogin> */}
//                 <Route
//                     path="/detail/:courseId"
//                     component={CourseDetailScreen}
//                 />
//                 <Route path="/signup" component={SignupScreen} />
//                 <Route path="/signin" component={SigninScreen} />
//                 <Route path="/" component={HomeScreen} />
//                 {/* </GuardLogin> */}
//             </Switch>
//         </BrowserRouter>
//     );

//     const _getUserFromLocal = () => {
//         const userStr = localStorage.getItem("user");
//         if (userStr) {
//             dispatch(createAction(FETCH_CREDENTIALS, JSON.parse(userStr)));
//         }
//     };

//     useEffect(() => {
//         _getUserFromLocal;
//     });
// }

// export default App;
