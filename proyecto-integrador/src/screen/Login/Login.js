import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  controlarPassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h2 className="alert alert-primary">Iniciar sesión</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(event) => this.evitarSubmit(event)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Ingresá tu email"
                  value={this.state.email}
                  onChange={(event) => this.controlarEmail(event)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Ingresá tu contraseña"
                  value={this.state.password}
                  onChange={(event) => this.controlarPassword(event)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Iniciar sesión
              </button>
            </form>

            <p className="mt-3 text-center">
              ¿No tenés cuenta? <Link to="/registro">Registrarse</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;