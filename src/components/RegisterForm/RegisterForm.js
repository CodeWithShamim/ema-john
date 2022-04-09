import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.svg";
import google from "../../images/google.png";
import github from "../../images/github.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
// import "./RegisterForm.css";
// firebae ------------------------------------------
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const RegisterForm = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [SignInWithGithub] = useSignInWithGithub(auth);
  const [SignInWithFacebook] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   -----------navigate-------------

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  //   console.log(email, password);

  //   -----------------------------------------
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        console.log("succesfully register .....");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="text-center">
      <div className="w-50 mx-auto login-container mt-3">
        <img className="logo" src={logo} alt="logo" />
        <br />
        <form onSubmit={handleRegister}>
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
                onBlur={handleEmailBlur}
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
                onBlur={handlePasswordBlur}
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
            type="submit"
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
            <img
              onClick={() => {
                signInWithGoogle().then(() =>
                  navigate(from, { replace: true })
                );
              }}
              src={google}
              alt="google icon"
            />
          </span>
          <span>
            <img
              onClick={() => {
                SignInWithGithub().then(() =>
                  navigate(from, { replace: true })
                );
              }}
              src={github}
              className="github-item"
              alt="github icon"
            />
          </span>
          <span>
            <img
              onClick={() => {
                SignInWithFacebook().then(() =>
                  navigate(from, { replace: true })
                );
              }}
              src={facebook}
              alt="facebook icon"
            />
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
