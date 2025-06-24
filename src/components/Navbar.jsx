import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {location.pathname !== "/" && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {location.pathname !== "/entregas" && (
          <li>
            <Link to="/entregas">Projetos entregues</Link>
          </li>
        )}
        {location.pathname !== "/projetos" && (
          <li>
            <Link to="/projetos">Entrar em um time</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
