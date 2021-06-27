import React, { Component } from "react";
import { Formik, Form, Field, FormikProps } from "formik";

class SignupScreen extends Component {
    _handleSubmit = (values) => {
        console.log(values);
    };
    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <Formik
                    initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                        hoTen: "",
                        email: "",
                        soDT: "",
                        maNhom: "",
                    }}
                    onSubmit={this._handleSubmit}
                
                    render={(FormikProps) => {
                        <Form action="">
                            <div className="form-group">
                                <label>Tài Khoản: </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="taiKhoan"
                                    onChange={FormikProps.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mật Khẩu: </label>
                                <Field
                                    type="password"
                                    className="form-control"
                                    name="matKhau"
                                    onChange={FormikProps.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Họ Tên: </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="hoTen"
                                    onChange={FormikProps.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email: </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={FormikProps.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Số Điện Thoại: </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="soDT"
                                    onChange={FormikProps.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mã Nhóm: </label>
                                <Field
                                    component="select"
                                    className="form-control"
                                    name="maNhom"
                                    onChange={FormikProps.handleChange}
                                >
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP01</option>
                                    <option>GP10</option>
                                </Field>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        </Form>;
                    }}
                    />
                {/* </Formik> */}
            </div>
        );
    }
}

export default SignupScreen;
