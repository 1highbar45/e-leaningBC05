import React, { Component } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { userService } from "../../Services";
import { signupUserSchema } from "../../Services/user-service";

class SignupScreen extends Component {
    _handleSubmit = (values) => {
        userService
            .signUp(values)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    hoTen: "",
                    email: "",
                    soDT: "",
                    maNhom: "GP01",
                }}
                validationSchema={signupUserSchema}
                onSubmit={this._handleSubmit}
            >
                {(props) => (
                    <Form className="w-50 mx-auto">
                        <h1>Sign Up</h1>
                        <div className="form-group">
                            <label>Tài khoản</label>
                            <Field
                                type="text"
                                name="taiKhoan"
                                onChange={props.handleChange}
                                className="form-control"
                            />
                            <ErrorMessage name="taiKhoan">
                                {(msg) => (
                                    <div className="alert alert-danger">
                                        {msg}
                                    </div>
                                )}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <Field
                                type="password"
                                name="matKhau"
                                onChange={props.handleChange}
                                className="form-control"
                            />
                            <ErrorMessage name="matKhau" />
                        </div>
                        <div className="form-group">
                            <label>Họ Tên</label>
                            <Field
                                type="text"
                                name="hoTen"
                                onChange={props.handleChange}
                                className="form-control"
                            />
                            <ErrorMessage name="hoTen" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Field
                                type="email"
                                name="email"
                                onChange={props.handleChange}
                                className="form-control"
                            />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <Field
                                type="text"
                                name="soDT"
                                onChange={props.handleChange}
                                className="form-control"
                            />
                            <ErrorMessage name="soDT" />
                        </div>
                        <div className="form-group">
                            <label>Mã nhóm: </label>
                            <Field
                                component="select"
                                className="form-control"
                                name="maNhom"
                                onChange={props.handleChange}
                            >
                                <option>GP01</option>
                                <option>GP02</option>
                                <option>GP03</option>
                                <option>GP04</option>
                                <option>GP05</option>
                                <option>GP06</option>
                                <option>GP07</option>
                                <option>GP08</option>
                                <option>GP09</option>
                                <option>GP10</option>
                            </Field>
                            <ErrorMessage name="maNhom" />
                        </div>
                        <button className="btn btn-success">Đăng ký</button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default SignupScreen;
