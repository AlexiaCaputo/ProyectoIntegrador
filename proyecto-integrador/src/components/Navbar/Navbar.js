import React from "react";
import NavbarBebe from "../NavbarBebe/NavbarBebe";

function Navbar() {
  let links = [
    { nombre: "Home", path: "/" },
    { nombre: "Películas populares", path: "/peliculas/populares" },
    { nombre: "Películas en cartel", path: "/peliculas/cartel" },
    { nombre: "Favoritas", path: "/favoritas" },
    { nombre: "Registro", path: "/registro", claseExtra: "ml-auto" },
    { nombre: "Login", path: "/login" } ];

  return (
    <nav>
      <h1>
        Udesa Movies
      </h1>
      <ul className="nav nav-tabs my-4">
        {links.map((link, idx) => (
          <NavbarBebe
            key={link.nombre + idx}
            datos={link}
          />
        ))}
      </ul>
    </nav>
  ); }

export default Navbar;