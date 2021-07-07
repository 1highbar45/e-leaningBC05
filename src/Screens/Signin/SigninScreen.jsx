import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { login } from "../../Redux/Actions/user-action";

class SigninScreen extends Component {
    render() {
        return (
            <Formik
                initialValues={{ taiKhoan: "", matKhau: "" }}
                onSubmit={(values) => {
                    this.props.dispatch(login(values));
                }}
            >
                {({ handleChange }) => (
                    <Form className="w-50 mx-auto">
                        <h1>Sign In</h1>
                        <div className="form-group">
                            <label>Tài khoản</label>
                            <Field
                                type="text"
                                name="taiKhoan"
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <Field
                                type="password"
                                name="matKhau"
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <button className="btn btn-success">Đăng nhập</button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default connect()(SigninScreen);

// // dpnguyen/1232132131 hv
// // admin_test/123456789 gv
