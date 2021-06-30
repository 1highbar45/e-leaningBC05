import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png";
import classes from "./style.module.css";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-4">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" className={classes.logo} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                activeStyle={{ color: "red" }}
                                className="nav-link"
                                exact
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink
                                activeStyle={{ color: "red" }}
                                className="nav-link"
                                exact
                                to="/signup"
                            >
                                Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeStyle={{ color: "red" }}
                                className="nav-link"
                                exact
                                to="/signin"
                            >
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
