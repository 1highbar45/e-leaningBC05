import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
// import { courseService } from "../../Services";
// import { createAction } from "../../Redux/Actions";
// import { FETCH_COURSE_DETAIL } from "../../Redux/Actions/type";
import { fetchDetailCourse } from "../../Redux/Actions/course-action";

class CourseDetailScreen extends Component {
    render() {
        const { courseDetail, loading } = this.props;
        if (loading) {
            return <h1>..Loading</h1>;
        }
        return (
            <div>
                <img
                    src={courseDetail.hinhAnh}
                    alt=""
                    style={{ width: "50%", height: 500 }}
                />
                <h3>{courseDetail.tenKhoaHoc}</h3>
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
    loading: state.common.loading,
});

export default connect(mapStateToProps)(CourseDetailScreen);
