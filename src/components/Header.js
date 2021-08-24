import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Посмотреть</Link>
            </li>

            <li>
              <Link to="/watched">Просмотрено</Link>
            </li>

            <li>
              <Link className="btn" to="/add">
                + Добавить
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
};