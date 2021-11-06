import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="bradcam-area bradcam-bg-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam-text text-center">
                <h3>About</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="col-lg-8 m-auto">
          <h4 className="text-start mb-5" style={{ fontSize: "40px" }}>
            Our story
          </h4>
        </div>
        <div
          className="col-lg-6 m-auto about-content"
          style={{ textAlign: "justify" }}
        >
          <p>
            A travel agency is a private retailer or public service that
            provides travel and tourism-related services to the general public
            on behalf of accommodation or travel suppliers to offer different
            kinds of travelling packages for each destination. Travel agencies
            can provide outdoor recreation activities, airlines, car rentals,
            cruise lines, hotels, railways, travel insurance, package tours,
            insurance, guide books, VIP airport lounge access, arranging
            logistics for luggage and medical items delivery for travellers upon
            request, public transport timetables, car rentals, and bureau de
            change services.
          </p>
          <br />
          <p>
            Travel agencies can also serve as general sales agents for airlines
            that do not have offices in a specific region. A travel agency's
            main function is to act as an agent, selling travel products and
            services on behalf of a supplier. They do not keep inventory in-hand
            unless they have pre-booked hotel rooms or cabins on a cruise ship
            for a group travel event such as a wedding, honeymoon, or other
            group event.
          </p>
        </div>
        <div className="col-lg-6 m-auto mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
            <div className="col">
              <div className="card h-100 border-0">
                <img
                  src="https://i.ibb.co/p3FWz8k/about-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0">
                <img
                  src="https://i.ibb.co/CVWL6Xj/about-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 m-auto mb-5" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col-lg-4 col-md-4 mb-3">
            <div className="single-counter text-center">
              <h3 className="counter">378</h3>
              <p>Tour has done successfully</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-3">
            <div className="single-counter text-center">
              <h3 className="counter">30</h3>
              <p>Yearly tour arrange</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-3">
            <div className="single-counter text-center">
              <h3 className="counter">2263</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
