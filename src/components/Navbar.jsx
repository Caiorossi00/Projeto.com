import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projetos">Projetos disponíveis</Link>
        </li>
        <li>
          <Link to="/entregas">Projetos entregues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
