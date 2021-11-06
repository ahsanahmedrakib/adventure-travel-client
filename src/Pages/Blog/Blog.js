import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="all-blog-content">
      <div className="bradcam-area bradcam-bg-4  mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam-text text-center">
                <h3>Blog</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="p-3">
              <div className="blog-image">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/QJ8xmww/blog-1.jpg"
                  alt=""
                />
              </div>
              <div className="blog-content">
                <div className="p-5">
                  <h5 className="text-start">JAN 20, 2021</h5>
                  <h2 className="text-start">
                    Ratargul Swamp Forest, Shylhet 
                  </h2>
                  <p>
                  Ratargul Swamp Forest is a freshwater swamp forest located in Gowain River, Fatehpur Union, Gowainghat, Sylhet, Bangladesh. It is the only swamp forest located in Bangladesh and one of the few freshwater swamp forests in the world.
                  </p>
                </div>
              </div>
              <div className="ms-3">
                <ul className="d-flex blog-info-link">
                  <li>
                    <i className="fa fa-user"></i> Travel, Forest
                  </li>
                  <li className="ms-3">
                    <i className="fa fa-comments"></i> 20 Comments
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-3">
              <div className="blog-image">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/PhX1BtB/blog-2.jpg"
                  alt=""
                />
              </div>
              <div className="blog-content">
                <div className="p-5">
                  <h5 className="text-start">JUN 06, 2020</h5>
                  <h2 className="text-start">
                    Kusumba Masque, Naogan
                  </h2>
                  <p>
                  Kusumba Mosque is a mosque in Manda Upazila of Naogaon District of Bangladesh. This mosque can be found in the village of Kusumba, which is its namesake. It was built in 1558–59 and is one of Bangladesh's three national heritages sites.
                  </p>
                </div>
              </div>
              <div className="ms-3">
                <ul className="d-flex blog-info-link">
                  <li>
                    <i className="fa fa-user"></i> Travel, Architecture
                  </li>
                  <li className="ms-3">
                    <i className="fa fa-comments"></i> 02 Comments
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-3">
              <div className="blog-image">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/TR2F7Hg/blog-3.jpg"
                  alt=""
                />
              </div>
              <div className="blog-content">
                <div className="p-5">
                  <h5 className="text-start">DEC 31, 2021</h5>
                  <h2 className="text-start">
                  Malnicherra Tea Estate, Shylhet
                  </h2>
                  <p>
                  Malnicherra Tea Estate is a tea garden located in Sylhet district of Bangladesh. It is the oldest tea garden in the subcontinent. Malnichhera Tea Garden is not only the largest and first established tea garden in Bangladesh, but also in the subcontinent.
                  </p>
                </div>
              </div>
              <div className="ms-3">
                <ul className="d-flex blog-info-link">
                  <li>
                    <i className="fa fa-user"></i> Travel, Garden
                  </li>
                  <li className="ms-3">
                    <i className="fa fa-comments"></i> 28 Comments
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-3">
              <div className="blog-image">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/YWP45Bm/blog-4.jpg"
                  alt=""
                />
              </div>
              <div className="blog-content">
                <div className="p-5">
                  <h5 className="text-start">MAR 10, 2019</h5>
                  <h2 className="text-start">
                    Bank of Buriganga, Dhaka
                  </h2>
                  <p>
                  The Buriganga River is a river in Bangladesh which flows past the southwest outskirts of the capital city, Dhaka. Its average depth is 7.6 metres and its maximum depth is 18 metres. It ranks among the most polluted rivers in the country. 
                  </p>
                </div>
              </div>
              <div className="ms-3">
                <ul className="d-flex blog-info-link">
                  <li>
                    <i className="fa fa-user"></i> Travel, River and Lake
                  </li>
                  <li className="ms-3">
                    <i className="fa fa-comments"></i> 05 Comments
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-3">
              <div>
                <div className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-primary px-4" type="submit">
                    Search
                  </button>
                </div>
              </div>
              <div className="my-4 text-start about-category">
                <h3>Category</h3>
                <hr />
                <ul>
                  <li>Sea(4)</li>

                  <li>Maountain(50)</li>
                  <li>Lake(30)</li>
                  <li>Beach(10)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
