// import Dashboard from "../pages/dashboard/Dashboard";
// import UserManagement from "../pages/user-management/UserManagement";
import HomeScreen from "../Screens/Home/HomeScreen";
import CourseDetailScreen from "../Screens/Detail/CourseDetailScreen";
import SigninScreen from "../Screens/Signin/SigninScreen";
import SignupScreen from "../Screens/Signup/SignupScreen";

export const clientRouters = [
    {
        path: "/",
        exact: true,
        Component: HomeScreen,
    },

    {
        path: "/detail/:courseId",
        exact: false,
        Component: CourseDetailScreen,
    },

    {
        path: "/signin",
        exact: false,
        Component: SigninScreen,
    },

    {
        path: "/signup",
        exact: false,
        Component: SignupScreen,
    },

];

export const adminRouters = [
    // {
    //     path: "/admin/dashboard",
    //     exact: false,
    //     Component: Dashboard,
    // },
    // {
    //     path: "/admin/user-management",
    //     exact: false,
    //     Component: UserManagement,
    // },
];
