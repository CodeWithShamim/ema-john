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
    <div className="text-center mt-5 email-container w-50 mx-auto">
      <h1 className="my-4">Reset your password!!</h1>
      <form onSubmit={handleResetEmail}>
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
          className="mt-3 py-2 px-5 bg-primary fw-bold text-light fs-5 rounded"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ForgottenPassword;
