import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UsuarioDataService from "../../services/UsuarioService";

const Usuario = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [usuario, setUsuario] = React.useState("");

  React.useEffect(() => {
    setUsuario(JSON.parse(localStorage.getItem("user")));
  }, []);

  const initialUsuarioState = {
    id: null,
    nombre: "",
    contraseña: "",
    published: false,
  };
  const [currentUsuario, setCurrentUsuario] = useState(initialUsuarioState);
  const [message, setMessage] = useState("");

  const getUsuario = (id) => {
    UsuarioDataService.get(id)
      .then((response) => {
        setCurrentUsuario(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getUsuario(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUsuario({ ...currentUsuario, [name]: value });
  };

  const updateEsSuperUsuario = (status) => {
    var data = {
      id: currentUsuario.id,
      nombre: currentUsuario.nombre,
      contraseña: currentUsuario.contraseña,
      esSuperUsuario: status,
    };

    UsuarioDataService.update(currentUsuario.id, data)
      .then((response) => {
        setCurrentUsuario({ ...currentUsuario, esSuperUsuario: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateUsuario = () => {
    UsuarioDataService.update(currentUsuario.id, currentUsuario)
      .then((response) => {
        console.log(response.data);
        alert("El Usuario se ha actualizado correctamente");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteUsuario = () => {
    UsuarioDataService.remove(currentUsuario.id)
      .then((response) => {
        console.log(response.data);
        navigate("/usuarios");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav className="nav-conteiner">
        <a href="//" className="a-home">
          Tecnica1Merlo
        </a>
        <a href="http://localhost:8081/intranet" className="a-item">
          Instrucciones
        </a>
        {usuario.esSuperUsuario ? (
          <a href="http://localhost:8081/Usuarios" className="a-item">
            Lista Usuarios
          </a>
        ) : (
          <></>
        )}
        <a href="http://localhost:8081/Tarjetas" className="a-item">
          Lista Tarjetas
        </a>
        {usuario.esSuperUsuario ? (
          <a href="http://localhost:8081/AñadirUsuario" className="a-item">
            Añadir Usuario
          </a>
        ) : (
          <></>
        )}
        <a href="http://localhost:8081/AñadirTarjeta" className="a-item">
          Añadir Tarjeta
        </a>
      </nav>
      {currentUsuario ? (
        <div className="cuerpolist">
          <h4 className="h4-titulo">Usuario</h4>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="imput-text"
                id="nombre"
                name="nombre"
                value={currentUsuario.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="text"
                className="imput-text"
                id="contraseña"
                name="contraseña"
                value={currentUsuario.contraseña}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>esSuperUsuario:</strong>
              </label>
              {currentUsuario.esSuperUsuario
                ? "es Super Usuario"
                : "no es Super Usuario"}
            </div>
          </form>

          {currentUsuario.esSuperUsuario ? (
            <button
              className="badge badge-primary mr-2"
              style={{
                backgroundColor: "orange",
                borderRadius: "4px",
                height: "6vh",
                width: "14vw",
                color: "white",
                fontSize: "14px",
              }}
              onClick={() => updateEsSuperUsuario(false)}
            >
              Deshacer super usuario
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              style={{
                backgroundColor: "#28a745",
                borderRadius: "4px",
                height: "6vh",
                width: "14vw",
                color: "white",
                fontSize: "14px",
              }}
              onClick={() => updateEsSuperUsuario(true)}
            >
              Hacer super usuario
            </button>
          )}

          <button className="btn-remove" onClick={deleteUsuario}>
            Borrar
          </button>

          <button
            type="submit"
            className="badge badge-success"
            style={{
              backgroundColor: "blue",
              borderRadius: "4px",
              height: "6vh",
              width: "7vw",
              marginLeft: "1vw",
              color: "white",
              fontSize: "14px",
              marginBottom: "25px",
            }}
            onClick={updateUsuario}
          >
            Actualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>por favor selecciona un usuario...</p>
        </div>
      )}
    </div>
  );
};
export default Usuario;
