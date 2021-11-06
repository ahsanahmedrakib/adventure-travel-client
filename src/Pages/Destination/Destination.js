import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Destination.css";

const Destination = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-everglades-84721.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="container my-4">
      <div className="py-4">
        <h3 className="text-primary" style={{ fontFamily: "'Rubik', sans-serif", fontSize: "36px" }}>Popular Destination</h3>
        <p>
        we arrange a world class tour for every year. we always try to satisfy our clients and make a comfortable <br /> journey. We have most popular destinations all over bangladesh.
        </p>
      </div>
      {!places.length ? (
        <div class="text-center text-primary">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="col-lg-10 m-auto">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {places.map((place) => (
              <div key={place._id} className="col">
                <div className="card h-100 my-places">
                  <img src={place.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title">{place.name}</h3>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      {place.description.slice(0, 130)}&nbsp; &nbsp;
                      <span className="text-info text-decoration-underline">
                        {" "}
                        see more{" "}
                      </span>
                    </p>{" "}
                    <br />
                    <h5 className="card-text text-primary text-start">
                      {place.price}৳
                    </h5>
                  </div>
                  <div className="card-footer border-0">
                    <small className="text-muted">
                      <Link to={`/placeorder/${place._id}`}>
                        <button className="btn btn-primary">Book Now</button>
                      </Link>
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
