import React, { Component } from "react";

class SigninScreen extends Component {
    render() {
        return (
            <div>
                <form className="w-50 mx-auto">
                    <h1>Sign In</h1>
                    <div className="form-group">
                        <label>Tài khoản</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button className="btn btn-success">Đăng nhập</button>
                </form>
            </div>
        );
    }
}

export default SigninScreen;
