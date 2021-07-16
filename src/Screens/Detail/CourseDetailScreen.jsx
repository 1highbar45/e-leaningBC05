import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import CircularIndeterminate from "../../Components/Loading/Loading";
// import { courseService } from "../../Services";
// import { createAction } from "../../Redux/Actions";
// import { FETCH_COURSE_DETAIL } from "../../Redux/Actions/type";
import { fetchDetailCourse } from "../../Redux/Actions/course-action";
import "./CourseDetail.css";

class CourseDetailScreen extends Component {
    render() {
        const { courseDetail, loading } = this.props;
        if (loading) {
            return <CircularIndeterminate />;
        }
        return (
            // <div>
            //     <img
            //         src={courseDetail.hinhAnh}
            //         alt=""
            //         style={{ width: "50%", height: 500 }}
            //     />
            //     <h3>{courseDetail.tenKhoaHoc}</h3>
            // </div>
            <div className="container">
                <h1>COMING SOON</h1>
                <div className="row">
                    <div
                        className="
                            col-xs-12 col-sm-12 col-md-6
                            d-flex
                            align-items-center
                        "
                    >
                        <div className="coming__detail">
                            {/* <span>COMEDY, CRIME</span> */}
                            <h2 className="display-4">{courseDetail.tenKhoaHoc}</h2>
                            <p>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="coming__date">
                                    <i className="fa fa-calendar-alt mr-2" />
                                    30 September, 2017
                                </span>
                            </p>
                            <p>{courseDetail.moTa}</p>
                            <a href="#">MORE INFO &gt;</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="coming__trailer">
                            <img
                                style={{ objectFit: "fill" }}
                                src={courseDetail.hinhAnh}
                                alt
                            />
                            <i className="fa fa-play" />
                        </div>
                    </div>
                </div>
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
