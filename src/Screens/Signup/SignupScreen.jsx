import React, { Component } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { userService } from "../../Services";
import { signupUserSchema } from "../../Services/user-service";
import "./Form.css";

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
                    <div
                        className="container-fluid"
                        style={{
                            backgroundColor: "#EEEEEE",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Form
                            className="mx-auto bg-white p-5 m-5"
                            style={{ width: "400px" }}
                        >
                            <h1 className="text-center">Sign Up</h1>
                            <div className="group">
                                <Field
                                    type="text"
                                    required
                                    name="taiKhoan"
                                    onChange={props.handleChange}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Account</label>
                                <ErrorMessage name="taiKhoan">
                                    {(msg) => (
                                        <div className="text text-danger">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="group">
                                <Field
                                    type="password"
                                    required
                                    name="matKhau"
                                    onChange={props.handleChange}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                                <ErrorMessage name="matKhau">
                                    {(msg) => (
                                        <div className="text text-danger">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="group">
                                <Field
                                    type="text"
                                    required
                                    name="hoTen"
                                    onChange={props.handleChange}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Name</label>
                                <ErrorMessage name="hoTen">
                                    {(msg) => (
                                        <div className="text text-danger">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="group">
                                <Field
                                    type="text"
                                    required
                                    name="email"
                                    onChange={props.handleChange}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                                <ErrorMessage name="email">
                                    {(msg) => (
                                        <div className="text text-danger">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="group">
                                <Field
                                    type="text"
                                    required
                                    name="soDT"
                                    onChange={props.handleChange}
                                />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Phone</label>
                                <ErrorMessage name="soDT">
                                    {(msg) => (
                                        <div className="text text-danger">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="group">
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
                                <ErrorMessage name="maNhom">
                                    {(msg) => (
                                        <div className="text text-danger">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <button
                                type="submit"
                                className="btn text-white bg-dark w-100 col-12"
                            >
                                Register
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        );
    }
}

export default SignupScreen;
