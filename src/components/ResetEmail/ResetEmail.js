import React from "react";
import happyImg from "../../images/happy.png";

const ResetEmail = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="text-success">successfully! send forgotten email!</h1>
      <p className="fs-4 fw-bold text-warning">
        {" "}
        Check your email address for confirmation!! <br />
        <img className="img-fluid h-25 w-25" src={happyImg} alt="happyImg" />
      </p>
    </div>
  );
};

export default ResetEmail;
