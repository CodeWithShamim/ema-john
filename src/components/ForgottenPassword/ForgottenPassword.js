import React, { useState } from "react";
import "./ForgottenPassword.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();
  const handleResetEmail = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate("/reset-email");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div
      className="text-center mt-5 email-container w-50 mx-auto"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      <h1 className="my-4">Reset your password!!</h1>
      <p className="p-3">
        Please enter your email address to reset your account password.
      </p>
      <form onSubmit={handleResetEmail} className="w-100">
        <input
          onBlur={handleEmailBlur}
          className="input-field"
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
        />{" "}
        <br />
        <input
          className="my-4 py-2 bg-primary px-5 fw-bold  fs-5 rounded send-btn"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ForgottenPassword;
