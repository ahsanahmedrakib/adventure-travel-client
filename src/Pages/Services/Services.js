import React from "react";
import "./Services.css";

const Services = () => {
  const allServices = [
    {
      image: "https://i.ibb.co/1JXC4vb/service-1.png",
      title: "Comfortable Journey",
      description:
        "We arrange a comfortabel journey for our clients.",
    },
    {
      image: "https://i.ibb.co/ZKS487Q/service-2.png",
      title: "Luxurious Hotel",
      description:
        "We have a good communication with hotel businessman.",
    },
    {
      image: "https://i.ibb.co/VLfD4F4/service-3.png",
      title: "Travel Guide",
      description:
        "A group of experienced travel guide will always guide you.",
    },
  ];

  return (
    <div className="container my-5">
      <div className="col-lg-8 m-auto">
        <div className="row">
          {allServices.map((service) => (
            <div className="col-lg-4 col-md-6">
              <div className="single-travel text-center">
                <div className="icon">
                  <img src={service.image} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
