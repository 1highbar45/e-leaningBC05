import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems/CourseItem";
import { connect } from "react-redux";
import { fetchCourses } from "../../Redux/Actions/course-action";
// import Axios from "axios";

class HomeScreen extends Component {
    renderCourseList = () => {
        const { courseList } = this.props;
        return courseList.map((item, index) => (
            <div className="col-3">
                <CourseItem item={item} key={index} />
            </div>
        ));
    };

    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh sach khoa hoc</h1>
                <div className="container">
                    <div className="row">{this.renderCourseList()}</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        // axios return promise ES6
        this.props.dispatch(fetchCourses());
    }
}

const mapStateToProps = (state) => ({
    courseList: state.course.courses,
});

export default connect(mapStateToProps)(HomeScreen);
