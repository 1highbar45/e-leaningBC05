import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./courseItem.module.css";

class CourseItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="card p-2 mb-4">
                <img
                    src={item.hinhAnh}
                    style={{ width: "100%", height: 200 }}
                    alt=""
                />
                <div class={styles.course_name}>
                    <h5>{item.tenKhoaHoc}</h5>
                </div>
                {/* <p className="lead font-weight-bold">{item.tenKhoaHoc}</p> */}
                {/* <p className="lead">{item.nguoiTao.hoTen}</p> */}
                <p className="lead">Rating: 5.0</p>
                <Link
                    to={`/detail/${item.maKhoaHoc}`}
                    className="btn btn-primary"
                >
                    Go To Detail
                </Link>
            </div>
        );
    }
}

export default CourseItem;
