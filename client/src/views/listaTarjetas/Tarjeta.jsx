import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TarjetaDataService from "../../services/TarjetaService";

const Tarjeta = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [usuario, setUsuario] = React.useState("");
  const [jsonData, setJsonData] = React.useState("");

  React.useEffect(() => {
    setUsuario(JSON.parse(localStorage.getItem("user")));
  }, []);

  const initialTarjetaState = {
    id: null,
    titulo: "",
    descripcion: "",
    idUsuario: null,
    imagenes: "",
    tipoTarjeta: "",
    grafico: "",
    imagen1: "",
    imagen2: "",
    imagen3: "",
  };
  const [currentTarjeta, setCurrentTarjeta] = useState(initialTarjetaState);
  const [message, setMessage] = useState("");

  const getTarjeta = (id) => {
    TarjetaDataService.get(id)
      .then((response) => {
        setCurrentTarjeta(response.data);
        console.log(response.data);
        setJsonData(JSON.parse(response.data.grafico).toString().slice(1, -1));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getTarjeta(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTarjeta({ ...currentTarjeta, [name]: "{" + value + "}" });
    console.log(currentTarjeta);
  };

  const updateTarjeta = () => {
    TarjetaDataService.update(currentTarjeta.id, currentTarjeta)
      .then((response) => {
        console.log(response.data);
        alert("La Tarjeta se ha actualizado correctamente");
        navigate("/tarjetas");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTarjeta = () => {
    TarjetaDataService.remove(currentTarjeta.id)
      .then((response) => {
        console.log(response.data);
        navigate("/tarjetas");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav className="nav-conteiner">
        <a href="/" className="a-home">
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
      {currentTarjeta ? (
        <div className="cuerpolist">
          <h4 className="h4-titulo">Tarjeta</h4>
          <form>
            <div className="form-group">
              <label htmlFor="titulo">Titulo</label>
              <input
                type="text"
                className="imput-text"
                id="titulo"
                name="titulo"
                value={currentTarjeta.titulo}
                onChange={handleInputChange}
              />
            </div>
            <div className="conteiner-input">
              <label htmlFor="descripcion">Descripcion</label>
              <textarea
                className="textarea-grafico"
                id="descripcion"
                autoComplete="off"
                required
                value={currentTarjeta.descripcion}
                onChange={handleInputChange}
                name="descripcion"
                style={{ padding: "10px" }}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="tipoTarjeta">Tipo de Tarjeta</label>
              <select
                className="imput-text"
                id="tipoTarjeta"
                name="tipoTarjeta"
                value={currentTarjeta.tipoTarjeta}
                onChange={handleInputChange}
              >
                <option value={true}>Noticia/Evento</option>
                <option value={false}>Informe Cooperadora</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="imagen1">Imagen 1</label>
              <input
                type="text"
                className="imput-text"
                id="imagen1"
                required
                value={currentTarjeta.imagen1}
                onChange={handleInputChange}
                name="imagen1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="imagen2">Imagen 2</label>
              <input
                type="text"
                className="imput-text"
                id="imagen2"
                required
                value={currentTarjeta.imagen2}
                onChange={handleInputChange}
                name="imagen2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="imagen3">Imagen 3</label>
              <input
                type="text"
                className="imput-text"
                id="imagen3"
                required
                value={currentTarjeta.imagen3}
                onChange={handleInputChange}
                name="imagen3"
              />
            </div>

            {currentTarjeta.tipoTarjeta == true ||
            currentTarjeta.tipoTarjeta == "true" ? (
              <></>
            ) : (
              <div className="form-group">
                <label htmlFor="grafico">Datos del grafico en JSON</label>
                <textarea
                  className="textarea-grafico"
                  id="grafico"
                  name="grafico"
                  onChange={handleInputChange}
                  rows="3"
                  defaultValue={jsonData}
                ></textarea>
              </div>
            )}
          </form>

          <button className="btn-remove" onClick={deleteTarjeta}>
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
            onClick={updateTarjeta}
          >
            Actualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>por favor selecciona una Tarjeta...</p>
        </div>
      )}
    </div>
  );
};
export default Tarjeta;
