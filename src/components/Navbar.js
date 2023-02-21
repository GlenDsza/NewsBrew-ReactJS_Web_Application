import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const queryRef = useRef();

  const handleSearchClick = () => {
    if (queryRef.current.value) {
      navigate(`/search/${queryRef.current.value}`);
      props.chooseKey(queryRef.current.value);
    }
  };

  const handleNavItemClick = (event) => {
    document.querySelectorAll(".nav-link").forEach((element) => {
      element.classList.remove("active");
    });
    event.currentTarget.classList.toggle("active");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-body-tertiary"
        style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.4)" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/favicon-32x32.png"
              alt=""
              className="d-inline-block align-text-top me-2"
            />
            <strong>{props.title}</strong>
          </Link>

          <div id='modeBtn' className={`text-secondary float-end ms-auto p-0 order-sm-1 order-lg-2 ms-lg-3`}>
            <i className="fa-solid fa-moon p-2"></i>
          </div>

          <div
            id="searchNews"
            className="d-flex order-1 order-sm-0 order-lg-1 col-lg-3 col-sm-4 col-12 mt-2 mt-md-0 mx-sm-auto"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News..."
              aria-label="Search"
              ref={queryRef}
            />
            <button
              className="btn btn-outline-primary"
              type="submit"
              onClick={handleSearchClick}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <button
            className="navbar-toggler order-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item position-relative">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  onClick={handleNavItemClick}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/business"
                  onClick={handleNavItemClick}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                  onClick={handleNavItemClick}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/health"
                  onClick={handleNavItemClick}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/sports"
                  onClick={handleNavItemClick}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/technology"
                  onClick={handleNavItemClick}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
