import React from "react";
import { Link } from "react-router-dom";

function NavbarBebe(props) {
  return (
    <li className={`nav-item ${
        props.datos.claseExtra
        ? props.datos.claseExtra : "" }`} >

      <Link className="nav-link"
        to={props.datos.path} >
        {props.datos.nombre}
      </Link>
    </li>
  );
}

export default NavbarBebe;