import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      integrantes: [
        {
          nombre: "Alexia Caputo",
          mail: "caputoa@udesa.com.ar"
        },
        {
          nombre: "Toyah Dietrich Oxenford",
          mail: "tdietrichoxenford@udesa.com.ar"
        }
      ]
    };
  }

  render() {
    return (
      <footer className="alert alert-primary mt-4 text-center">
        
        {this.state.integrantes.map((integrante, idx) => (
          <div key={idx}>
            <p className="mb-0"><strong>{integrante.nombre}</strong></p>
            <p className="mb-0">{integrante.mail}</p>
          </div>
        ))}

      </footer>
    );
  }
}

export default Footer;