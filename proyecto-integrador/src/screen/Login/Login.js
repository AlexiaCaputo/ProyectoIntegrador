import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
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
        Iniciar sesión
      </h2>
      <div className="row justify-content-center">

        <div className="col-md-6">
          <form onSubmit={evitarSubmit}>
            <div className="form-group">
              <label htmlFor="email"> Email
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingresá tu email"
                value={email}
                onChange={controlarEmail} />

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
                onChange={controlarPassword} />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block" >
              Iniciar sesión
            </button>

          </form>
          <p className="mt-3 text-center">
            ¿No tenés cuenta?{" "}
            <Link to="/registro">
              Registrarse
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;