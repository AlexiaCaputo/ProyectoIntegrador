import React, { Component } from 'react';
import NavbarBebe from '../NavbarBebe/NavbarBebe';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { nombre: "Home", path: "/" },
        { nombre: "Películas populares", path: "/peliculas/populares" },
        { nombre: "Películas en cartel", path: "/peliculas/cartel" },
        { nombre: "Favoritas", path: "/favoritas" },
        { nombre: "Registro", path: "/registro", claseExtra: "ml-auto" },
        { nombre: "Login", path: "/login" }
      ]
    };
  }

  render() {
    return (
      <nav>
        <ul className="nav nav-tabs my-4">
          {this.state.links.map((link, idx) => (
            <NavbarBebe key={link.nombre + idx} datos={link} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;