import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { login } from "../../Redux/Actions/user-action";
import "./Form.css";

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
                    <div
                        className="container-fluid"
                        style={{
                            backgroundColor: "#EEEEEE",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Form className="w-25 mx-auto bg-white p-5 m-5">
                            <h2 className="text-center">Sign In</h2>
                            <div className="group">
                                <Field
                                    type="text"
                                    required
                                    name="taiKhoan"
                                    onChange={handleChange}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Account</label>
                            </div>
                            <div className="group">
                                <Field
                                    type="password"
                                    required
                                    name="matKhau"
                                    onChange={handleChange}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                            </div>
                            <button
                                type="submit"
                                className="btn text-white bg-dark w-100 col-12"
                            >
                                Submit
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        );
    }
}

export default connect()(SigninScreen);

// // dpnguyen/1232132131 hv
// // admin_test/123456789 gv
