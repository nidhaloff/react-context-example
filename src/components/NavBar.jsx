import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
        <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        </ul>
    </div>
  );
};
