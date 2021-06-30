import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
// import { courseService } from "../../Services";
// import { createAction } from "../../Redux/Actions";
// import { FETCH_COURSE_DETAIL } from "../../Redux/Actions/type";
import { fetchDetailCourse } from "../../Redux/Actions/course";

class CourseDetailScreen extends Component {
    render() {
        return (
            <div>
                <img src={this.props.courseDetail.hinhAnh} alt="" />
                <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
            </div>
        );
    }

    componentDidMount() {
        this.props.dispatch(
            fetchDetailCourse(this.props.match.params.courseId)
        );
    }
}

const mapStateToProps = (state) => ({
    courseDetail: state.course.courseDetail || {
        maKhoaHoc: "",
        tenKhoaHoc: "",
        hinhAnh: "",
        nguoiTao: {
            taiKhoan: "",
            hoTen: "",
        },
    },
});

export default connect(mapStateToProps)(CourseDetailScreen);
