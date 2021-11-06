import React from "react";
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ibb.co/pPCZ4dY/banner-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>BANDARBAN</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/LYZx3t5/banner-2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>COX BAZAR</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/dLV8ghT/banner-3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>SHYLHET</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ibb.co/k5PxsN3/banner-4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h1>SUNDARBAN</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
