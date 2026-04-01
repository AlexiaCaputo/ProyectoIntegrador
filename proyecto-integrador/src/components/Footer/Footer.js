import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      integrantes: [
        {
          nombre: "Alexia Caputo",
        },
        {
          nombre: "Toyah Dietrich Oxenford",
        }
      ]
    };
  }

  render() {
    return (
      <footer className="alert alert-primary mt-4 text-center">
        
        {this.state.integrantes.map((integrante, idx) => (
          <div key={idx}>
            <p className="mb-0">{integrante.nombre}</p>
          </div>
        ))}

      </footer>
    );
  }
}

export default Footer;