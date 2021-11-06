import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>
        <img
          className="img-fluid"
          src="https://i.ibb.co/7rjDCcQ/image.jpg"
          alt=""
        />
      </div>
      <div className="mb-5" style={{ fontFamily: "'Rubik', sans-serif" }}>
        <Link to="/">GO HOME</Link>
      </div>
    </div>
  );
};

export default NotFound;
