import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import "./Shipment.css";

const Shipment = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //   const [error, setError] = useState("");
  //   -----------navigate-------------
  const [user] = useAuthState(auth);

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  // ---------------------------------------

  const handleShipping = (e) => {
    e.preventDefault();
    console.log(name, phone, address);
  };
  return (
    <div className="w-50 mx-auto login-container mt-3">
      <form onSubmit={handleShipping}>
        <div className=" text-start ">
          <div class="mb-3">
            <label for="exampleInputText" class="form-label">
              Name
            </label>
            <input
              onBlur={handleNameBlur}
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
              value={user?.email}
              readOnly
              className="form-control bg-secondary text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPhone" class="form-label">
              Phone
            </label>
            <input
              onBlur={handlePhoneBlur}
              type="number"
              class="form-control"
              id="exampleInputPhone"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputAddress" class="form-label">
              Address
            </label>
            <textarea
              className="w-100"
              onBlur={handleAddressBlur}
              name="exampleInputAddress"
              id="exampleInputAddress"
              cols="30"
              rows="6"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="login-btn btn btn-warning w-100 fw-bold fs-4"
        >
          Send Shipping
        </button>
      </form>
    </div>
  );
};

export default Shipment;
