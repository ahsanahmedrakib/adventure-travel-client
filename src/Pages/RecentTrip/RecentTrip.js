import React from "react";
import "./RecentTrip.css";

const RecentTrip = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary" style={{ fontFamily: "'Rubik', sans-serif" }} >Recent Trips </h2>
      <div className="col-lg-10 m-auto">
        <div className="col-lg-10 m-auto">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 single-trip">
                <img
                  src="https://i.ibb.co/TtXbdWG/trip-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-start">Dec 20, 2021</p>
                  <h5 className="card-title text-start">
                    Kaptai, Rangamati
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 single-trip">
                <img
                  src="https://i.ibb.co/R2tX4Kt/trip-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-start">Sep 10, 2021</p>
                  <h5 className="card-title text-start">
                    The Sundarban, Khulna
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 single-trip">
                <img
                  src="https://i.ibb.co/XDtPmyR/trip-3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-start">Jan 20, 2020</p>
                  <h5 className="card-title text-start">
                    Nilacal, Bandarban
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTrip;
