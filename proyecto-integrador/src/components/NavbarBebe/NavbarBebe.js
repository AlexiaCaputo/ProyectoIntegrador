import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarBebe extends Component {
  render() {
    return (
      <li className={`nav-item ${this.props.datos.claseExtra ? this.props.datos.claseExtra : ""}`}>
        <Link className="nav-link" to={this.props.datos.path}>
          {this.props.datos.nombre}
        </Link>
      </li>
    );
  }
}

export default NavbarBebe;