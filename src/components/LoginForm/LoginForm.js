import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import google from "../../images/google.png";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="text-center">
      <div className="w-50 mx-auto login-container mt-5">
        <img className="logo mt-5" src={logo} alt="logo" />
        <br />
        <br />
        <form>
          <div className=" text-start">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-warning">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <p className="signup">
              Don't have an account? <Link to="/signup">sign up</Link>
            </p>
          </div>

          <button
            type="button"
            className="login-btn btn btn-warning w-100 fw-bold fs-4"
          >
            Login
          </button>
        </form>
        <p className="bg-light rounded w-75 mx-auto my-4">
          <hr />
        </p>
        <p>Continue With.... </p>
        <span>
          <img src={google} alt="" />
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
