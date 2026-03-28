import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  let haySesion = localStorage.getItem("login");

  return (
    <nav>
      <h2>Nombre y logo</h2>
      <Link to="/">Home</Link>

      {haySesion ? (
        <>
          <Link to="/peliculas">Todas las películas</Link>
          <Link to="/favoritos">Películas favoritas</Link>
        </>
      ) : (
        <>
          <Link to="/login">Ingresar usuario</Link>
          <Link to="/register">Crear Cuenta</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;