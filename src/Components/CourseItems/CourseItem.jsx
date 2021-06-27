import React, { Component } from "react";

class CourseItem extends Component {
    render() {
        return (
            <div className="card p-2 mb-4">
                <img
                    src={this.props.item.hinhAnh}
                    style={{ width: "100%", height: 200 }}
                    alt=""
                />
                <p className="lead font-weight-bold">
                    {this.props.item.tenKhoaHoc}
                </p>
                <p className="lead">{this.props.item.nguoiTao.hoTen}</p>
                <p className="lead">Rating: 5.0</p>
                <button className="btn btn-success">Go To Detail</button>
            </div>
        );
    }
}

export default CourseItem;
