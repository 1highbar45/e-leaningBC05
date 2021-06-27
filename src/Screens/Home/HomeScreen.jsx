import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems/CourseItem";
import { connect } from "react-redux";
// import Axios from "axios";
import { courseService } from "../../Services";
import { createAction } from "../../Redux/Actions";
import { FETCH_COURSES } from "../../Redux/Actions/type";

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh sach khoa hoc</h1>
                <div className="container">
                    <div className="row">
                        {this.props.courseList.map((item, index) => (
                            <div className="col-3">
                                <CourseItem item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        // axios return promise ES6
        courseService
            .fetchCourses()
            // promise
            .then((res) => {
                this.props.dispatch(createAction(FETCH_COURSES, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

const mapStateToProps = (state) => ({
    courseList: state.course.courses,
});

export default connect(mapStateToProps)(HomeScreen);
