import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import google from "../../images/google.png";
import github from "../../images/github.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
// import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="text-center">
      <div className="w-50 mx-auto login-container mt-3">
        <img className="logo" src={logo} alt="logo" />
        <br />
        <form>
          <div className=" text-start">
            <div class="mb-3">
              <label for="exampleInputText" class="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputText"
                aria-describedby="textHelp"
              />
              {/* <div id="textHelp" className="form-text text-warning">
                We'll never share your email with anyone else.
              </div> */}
            </div>

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

            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
              />
            </div>

            <p className="signup">
              Already have an account? <Link to="/login">login</Link>
            </p>
          </div>

          <button
            type="button"
            className="login-btn btn btn-warning w-100 fw-bold fs-4"
          >
            Register
          </button>
        </form>
        <p className="bg-light rounded mx-auto my-3">
          <hr />
        </p>
        <p>Continue With.... </p>
        <div className="icon-container d-flex justify-content-evenly">
          <span>
            <img src={google} alt="google icon" />
          </span>
          <span>
            <img src={github} className="github-item" alt="github icon" />
          </span>
          <span>
            <img src={facebook} alt="facebook icon" />
          </span>
          <span>
            <img src={twitter} alt="twitter icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
