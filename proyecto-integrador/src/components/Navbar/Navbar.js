import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  let haySesion = localStorage.getItem("login");

  return (
    <nav>
      <Link to="/">Home</Link>
      <img className= 'Logomovie' src='../Logo/Logomovie.webp' alt='logo'></img>
      <h2>CINEPLAY</h2>

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