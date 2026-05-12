import React, { useState } from "react";

function Footer() {
  let [integrantes] = useState([
    { nombre: "Alexia Caputo", },
    { nombre: "Toyah Dietrich Oxenford", } ]);

  return (
    <footer className="alert alert-primary mt-4 text-center">

      {integrantes.map((integrante, idx) => (
        <div key={idx}>
          <p className="mb-0">
            {integrante.nombre}
          </p>
        </div>
      ))}

    </footer>
  );
}

export default Footer;