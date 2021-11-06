import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleContact = e => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="bradcam-area bradcam-bg-4  mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam-text text-center">
                <h3>contact</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-10 col-sm-12 m-auto my-5 my-map">
        <div className="container-fluid">
          <div className="map-responsive">
            <iframe
              title="ok"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12211.652095613686!2d90.38530326185013!3d23.742300912370624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1635671170992!5m2!1sen!2sbd"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container col-lg-8 m-auto">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title text-start mb-3">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleContact}>
              <div className="row">
                <div className="col-12 mb-3">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100 "
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid mb-3"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-info mb-5">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info d-flex text-start">
              <span className="contact-info__icon">
                <i className="fas fa-home"></i>
              </span>
              <div className="media-body">
                <h3>Green Road, Farmagate</h3>
                <p>Tejgaon, Dhaka-1215</p>
              </div>
            </div>
            <div className="media contact-info d-flex text-start">
              <span className="contact-info__icon">
                <i className="fas fa-mobile-alt"></i>
              </span>
              <div className="media-body">
                <h3>+880 162 333 435 6</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info d-flex text-start">
              <span className="contact-info__icon">
                <i className="far fa-envelope"></i>
              </span>
              <div className="media-body">
                <h3>support@mail.com</h3>
                <p>Send us your query</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
