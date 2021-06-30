import "./App.css";
import HomeScreen from "./Screens/Home/HomeScreen";
import CourseDetailScreen from "./Screens/Detail/CourseDetailScreen";
import SignupScreen from "./Screens/Signup/SignupScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import SigninScreen from "./Screens/Signin/SigninScreen";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route
                    path="/detail/:courseId"
                    component={CourseDetailScreen}
                />
                <Route path="/signup" component={SignupScreen} />
                <Route path="/signin" component={SigninScreen} />
                <Route path="/" component={HomeScreen} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
