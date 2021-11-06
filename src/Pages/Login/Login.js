/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./Login.css";

const Login = () => {
  const { user, signInWithGoogle, error } = UseAuth();

    const histoty = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || "/";

    useEffect(() => {
      user?.email ? histoty.push(redirect) : "/";
    }, [user, histoty, redirect]);

  return (
    <div>
      <div className="container my-5">
        <img
          style={{ width: "20%" }}
          className="mb-3"
          src="https://i.ibb.co/9bNSZR3/logo.jpg"
          alt=""
        />
        <form className=" col-lg-5 col-md-6 p-3 m-auto border rounded">
          <h3 className="text-primary mb-3">Log In with</h3>
          {error && <p className="text-danger">{error}</p>}
          <button onClick={signInWithGoogle} className="border-0 google-button">
            <img
              src="https://i.ibb.co/xLh6jtS/googl-logo.png"
              width="160"
              height="60"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
