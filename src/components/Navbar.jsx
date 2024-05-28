import React, { useContext, useState } from "react";
import logo from "../assets/react.svg";
import ThemeContext from "../Context/theme/ThemeContext";
import NewsContext from "../Context/news/NewsContext";
import { fetchNews } from "../Context/news/NewsActions";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);

  const { dispatch } = useContext(NewsContext);

  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetchNews(text);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
    setText("");
  };

  const handleNews = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
    
  };

  return (
    <nav
      className={
        darkMode
          ? "navbar navbar-expand-lg bg-dark shadow"
          : "navbar navbar-expand-lg bg-body-tertiary shadow"
      }
    >
      <div className="container-fluid">
        <img src={logo} alt="" className="mx-1" />
        <a
          className={
            darkMode ? "navbar-brand text-light" : "navbar-brand text-dark"
          }
          href="#"
        >
          React News
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Indian Sports") }
              >
                Sports
              </a>
            </li>

            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Bollywood") }
              >
                Entertainment
              </a>
            </li>

            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Indian Politics") }
              >
                Politics
              </a>
            </li>

            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Global News") }
              >
                International
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
