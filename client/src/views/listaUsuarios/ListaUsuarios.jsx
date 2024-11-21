import "./listaUsuarios.css";
import React, { useState, useEffect } from "react";
import UsuarioDataService from "../../services/UsuarioService";
import NavBarIntranet from "../components/NavBarIntranet";
import { Link } from "react-router-dom";
const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [currentUsuario, setCurrentUsuario] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchNombre, setSearchNombre] = useState("");

  useEffect(() => {
    retrieveUsuarios();
  }, []);

  const onChangeSearchNombre = (e) => {
    const searchNombre = e.target.value;
    setSearchNombre(searchNombre);
  };

  const retrieveUsuarios = () => {
    UsuarioDataService.getAll()
      .then((response) => {
        setUsuarios(response.data.reverse());
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUsuarios();
    setCurrentUsuario(null);
    setCurrentIndex(-1);
  };

  const setActiveUsuario = (usuario, index) => {
    setCurrentUsuario(usuario);
    setCurrentIndex(index);
  };

  const removeAllUsuarios = () => {
    UsuarioDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByNombre = () => {
    console.log(searchNombre);

    UsuarioDataService.findByNombre(searchNombre)
      .then((response) => {
        setUsuarios(response.data.reverse());
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <NavBarIntranet />
      <div className="cuerpolist">
        <div className="buscador">
          <input
            type="text"
            className="input-buscar"
            placeholder="Busca por Nombre"
            onChange={onChangeSearchNombre}
          />

          <button className="btn-buscar" onClick={findByNombre}>
            Search
          </button>
        </div>
        <div className="listaUsuarios">
          <h4 className="h4-titulo">Lista Usuarios</h4>

          <ul className="list-group">
            {usuarios &&
              usuarios.map((usuario, index) => (
                <li style={{ marginBottom: "5px" }}>
                  <span
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveUsuario(usuario, index)}
                    key={index}
                    style={{
                      backgroundColor: `#B6BBC4`,
                      padding: "2px 8px",
                      borderRadius: "5px",
                      fontSize: "18px",
                    }}
                  >
                    {usuario.nombre}
                  </span>
                </li>
              ))}
          </ul>

          <button className="btn-remove" onClick={removeAllUsuarios}>
            Eliminar Todos
          </button>
        </div>
        <div className="info-objeto">
          {currentUsuario ? (
            <div>
              <div>
                <label>
                  <strong>Nombre:</strong>
                </label>{" "}
                {currentUsuario.nombre}
              </div>
              <div>
                <label>
                  <strong>Contraseña:</strong>
                </label>{" "}
                {currentUsuario.contraseña}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>
                  <strong>esSuperUsuario:</strong>
                </label>{" "}
                {currentUsuario.esSuperUsuario
                  ? "Es super usuario"
                  : "No es super usuario"}
              </div>

              <Link to={"/usuarios/" + currentUsuario.id} className="btn-edit">
                Editar
              </Link>
            </div>
          ) : (
            <div className="message">
              <br />
              <p>Seleccione un Usuario...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UsuariosList;
