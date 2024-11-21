import React, { useEffect, useState } from "react";
import "./login.css";
import LoginImage from "../../icons/LoginImage.png";
import UsuarioDataService from "../../services/UsuarioService";
import { useParams, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [usuarioEncontrado, setUsuarioEncontrado] = useState();
  let navigate = useNavigate();
  const usuariosInputRef = React.useRef();

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const validarUsuario = () => {
    UsuarioDataService.verificarUsuario(usuario, contrasena)
      .then((response) => {
        if (response.data == "") {
          alert("usuario o contraseña incorrecto!");
        } else {
          setUsuarioEncontrado(response.data);
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = "http://localhost:8081/intranet";
        }
      })
      .catch((e) => {
        if (e.response.status == 500) {
          alert("Conexion lenta o servidor no encontrado!");
        }
        console.log(e);
      });
  };

  useEffect(() => {
    usuariosInputRef.current.focus();
  }, []);

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validarUsuario();
  };

  return (
    <div className="background-shadow">
      <div className="Conteiner-Login">
        <div className="login-form">
          <div className="logo-container">
            <img src={LoginImage} alt="Logo" className="logo" />
            <div className="logo-text">
              <p style={{ marginLeft: "1vw" }}>
                E.E.S.T N°1 <br />
                de Merlo
              </p>
            </div>
          </div>
          <h1
            style={{ fontSize: "25px", fontWeight: "600", marginTop: "15px" }}
          >
            Credenciales Requeridas
          </h1>
          <p className="subtitulo">Iniciar Sesión</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                htmlFor="usuario"
                id="usuarioLabel"
              >
                Nombre de usuario
              </label>
              <input
                ref={usuariosInputRef}
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Nombre de usuario"
                value={usuario}
                autoComplete="off"
                onChange={handleUsuarioChange}
                required
              />
            </div>
            <div className="form-group">
              <label
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
                htmlFor="contrasena"
                id="contrasenaLabel"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="Contraseña"
                value={contrasena}
                autoComplete="off"
                onChange={handleContrasenaChange}
                required
              />
            </div>
            <a href="/" className="btn-cancelar">
              Cancelar
            </a>
            <button type="submit" className="btn-acceder">
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
