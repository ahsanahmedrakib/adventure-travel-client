import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = UseAuth();

  return (
    <div className="container-fluid">
      <div className="my-own-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/BTFynCd/logo-2.png"
                alt=""
                width="40"
                height="40"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-navlink">
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "#05AEC3",
                    }}
                    className="nav-link active"
                    aria-current="page"
                    exact
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "#09C0D2",
                    }}
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "#09C0D2",
                    }}
                    className="nav-link active"
                    aria-current="page"
                    to="/blog"
                  >
                    BLOG
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{
                      color: "#09C0D2",
                    }}
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
              {/* left side ul end */}

              {/* right side ul strat */}

              {user.email ? (
                <ul className="navbar-nav ms-auto mb-3 me-3 mb-lg-0 my-navlink">
                  <li className="nav-item dropdown dropstart me-2">
                    <NavLink
                      className="nav-link dropdown-toggle "
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.displayName}
                    </NavLink>
                    <ul
                      className="dropdown-menu my-navbar-dropdown"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink className="dropdown-item" exact to="/myorders">
                          MY ORDERS
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          exact
                          to="/manageorders"
                        >
                          MANAGE ALL ORDERS
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          exact
                          to="/addDestination"
                        >
                          ADD A DESTINATION
                        </NavLink>
                      </li>
                      <li>
                        <div className="dropdown-item text-danger logout-button">
                          <button onClick={logOut}>LOGOUT</button>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img
                      src={user.photoURL}
                      style={{ borderRadius: "50%" }}
                      width="40"
                      height="40"
                      alt=""
                    />
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ms-auto mb-3 me-3 mb-lg-0 my-login-link">
                  <li className="nav-item me-2">
                    <Link className="" to="/login">
                      LOGIN
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
