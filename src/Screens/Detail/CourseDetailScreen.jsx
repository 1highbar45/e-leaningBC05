import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import CircularIndeterminate from "../../Components/Loading/Loading";
// import { courseService } from "../../Services";
// import { createAction } from "../../Redux/Actions";
// import { FETCH_COURSE_DETAIL } from "../../Redux/Actions/type";
import { fetchDetailCourse } from "../../Redux/Actions/course-action";
import style from "./detail.module.css";
import Container from "@material-ui/core/Container";

class CourseDetailScreen extends Component {
    render() {
        const { courseDetail, loading } = this.props;
        if (loading) {
            return <CircularIndeterminate />;
        }
        return (
            <div className={style.course}>
                <Container width={1}>
                    {/* <div className="container bg_img"> */}
                    <div className="container">
                        <div className="row">
                            <div
                                className="
                            col-xs-12 col-sm-12 col-md-6
                            d-flex
                            align-items-center
                        "
                            >
                                <div className={style.course__detail}>
                                    {/* <span>COMEDY, CRIME</span> */}
                                    <h2 className="display-4">
                                        {courseDetail.tenKhoaHoc}
                                    </h2>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p>{courseDetail.moTa}</p>
                                    <button className="btn btn-success">
                                        Đăng ký khóa học
                                    </button>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <div className={style.course__image}>
                                    <img
                                        style={{ objectFit: "fill" }}
                                        src={courseDetail.hinhAnh}
                                        alt
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </Container>
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
