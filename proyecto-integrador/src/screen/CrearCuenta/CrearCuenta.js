import React, { useState } from "react";
import { Link } from "react-router-dom";

function CrearCuenta() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function evitarSubmit(event) {
    event.preventDefault();
  }

  function controlarEmail(event) {
    setEmail(event.target.value);
  }

  function controlarPassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div>

      <h2 className="alert alert-primary">
        Registro
      </h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={evitarSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingresá tu email"
                value={email}
                onChange={controlarEmail}/>
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Contraseña
              </label>

              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Ingresá tu contraseña"
                value={password}
                onChange={controlarPassword}/>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block" >
              Registrarse
            </button>

          </form>

          <p className="mt-3 text-center">
            ¿Ya tenés cuenta?{" "}
            <Link to="/login">
              Iniciar sesión
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;