import React from "react";
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="my-5">
      <div className="newletter-area overlay">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="newsletter-text text-start">
                    <h4>Subscribe Our Newsletter</h4>
                    <p>
                      Subscribe newsletter to get offers and about new places to
                      discover.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="mail-form">
                    <div className="row no-gutters">
                      <div className="col-lg-9 col-md-8">
                        <div className="newsletter-field mt-2">
                          <input className="form-control" type="email" placeholder="Your mail" />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4">
                        <div className="newsletter_btn mt-2">
                          <button className="btn btn-danger" type="submit">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
