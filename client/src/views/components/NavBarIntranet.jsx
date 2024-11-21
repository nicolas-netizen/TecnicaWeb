import React, { useState } from "react";
import "./NavbarIntranet.css";

export default function NavBarIntranet() {
  const [usuario, setUsuario] = React.useState("");

  React.useEffect(() => {
    setUsuario(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div style={{ position: "sticky" }}>
      <nav className="nav-conteiner">
        <a href="/" className="a-home">
          Tecnica1Merlo
        </a>
        <a href="intranet" className="a-item">
          Instrucciones
        </a>
        {usuario.esSuperUsuario ? (
          <a href="Usuarios" className="a-item">
            Lista Usuarios
          </a>
        ) : (
          <></>
        )}
        <a href="Tarjetas" className="a-item">
          Lista Tarjetas
        </a>
        {usuario.esSuperUsuario ? (
          <a href="AñadirUsuario" className="a-item">
            Añadir Usuario
          </a>
        ) : (
          <></>
        )}
        <a href="AñadirTarjeta" className="a-item">
          Añadir Tarjeta
        </a>
      </nav>
    </div>
  );
}
