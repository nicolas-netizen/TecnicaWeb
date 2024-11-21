import React, { useState, useEffect } from "react";
import TarjetaDataService from "../../services/TarjetaService";
import UsuarioDataService from "../../services/UsuarioService";
import { Link } from "react-router-dom";
import NavBarIntranet from "../components/NavBarIntranet";

const TarjetasList = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [currentTarjeta, setCurrentTarjeta] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitulo, setSearchTitulo] = useState("");

  useEffect(() => {
    retrieveTarjetas();
  }, []);

  const onChangeSearchTitulo = (e) => {
    const searchTarjeta = e.target.value;
    setSearchTitulo(searchTarjeta);
  };

  const retrieveTarjetas = async () => {
    try {
      const response = await TarjetaDataService.getAll();
      const tarjetasConUsuario = await Promise.all(
        response.data.reverse().map(async (tarjeta) => {
          const usuario = await obtenerUsuario(tarjeta.creadorUsuarioId);
          return {
            ...tarjeta,
            creadorUsuario: usuario,
          };
        })
      );
      setTarjetas(tarjetasConUsuario);
    } catch (error) {
      console.error("Error al obtener tarjetas:", error);
    }
  };

  const obtenerUsuario = async (usuarioId) => {
    try {
      const response = await UsuarioDataService.get(usuarioId);
      return response.data;
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      return null;
    }
  };

  const refreshList = () => {
    retrieveTarjetas();
    setCurrentTarjeta(null);
    setCurrentIndex(-1);
  };

  const setActiveTarjeta = (tarjeta, index) => {
    setCurrentTarjeta(tarjeta);
    setCurrentIndex(index);
  };

  const removeAllTarjetas = async () => {
    if (window.confirm("¿Seguro que desea borrar TODAS las tarjetas?")) {
      try {
        await TarjetaDataService.removeAll();
        refreshList();
      } catch (error) {
        console.error("Error al eliminar tarjetas:", error);
      }
    } else {
      // Do nothing!
    }
  };

  const findByTitulo = async () => {
    try {
      const response = await TarjetaDataService.findByTitulo(searchTitulo);
      const tarjetasConUsuario = await Promise.all(
        response.data.reverse().map(async (tarjeta) => {
          const usuario = await obtenerUsuario(tarjeta.creadorUsuarioId);
          return {
            ...tarjeta,
            creadorUsuario: usuario,
          };
        })
      );
      setTarjetas(tarjetasConUsuario);
    } catch (error) {
      console.error("Error al buscar tarjetas:", error);
    }
  };

  return (
    <>
      <NavBarIntranet />
      <div className="cuerpolist">
        <div className="buscador">
          <input
            type="text"
            className="input-buscar"
            placeholder="Buscar por titulo"
            value={searchTitulo}
            onChange={onChangeSearchTitulo}
          />
          <div className="input-group-append">
            <button className="btn-buscar" type="button" onClick={findByTitulo}>
              Search
            </button>
          </div>
        </div>
        <div className="listaUsuarios">
          <h4 className="h4-titulo">Lista Tarjetas</h4>

          <ul className="list-group">
            {tarjetas &&
              tarjetas.map((tarjeta, index) => (
                <li style={{ marginBottom: "5px" }}>
                  <span
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveTarjeta(tarjeta, index)}
                    key={index}
                    style={{
                      backgroundColor: `${
                        tarjeta.tipoTarjeta == true ? "#F0ECE5" : "#31304D"
                      }`,
                      color: `${
                        tarjeta.tipoTarjeta == true ? "black" : "white"
                      }`,
                      padding: "2px 8px",
                      borderRadius: "5px",
                      fontSize: "18px",
                    }}
                  >
                    {tarjeta.titulo}
                  </span>
                </li>
              ))}
          </ul>

          <button className="btn-remove" onClick={removeAllTarjetas}>
            Eliminar Todos
          </button>
        </div>
        <div className="info-objeto">
          {currentTarjeta ? (
            <div>
              <div>
                <label>
                  <strong>Titulo:</strong>
                </label>{" "}
                {currentTarjeta.titulo}
              </div>
              <div>
                <label>
                  <strong>Descripcion:</strong>
                </label>{" "}
                {currentTarjeta.descripcion}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label>
                  <strong>Tipo de Tarjeta:</strong>
                </label>{" "}
                {currentTarjeta.tipoTarjeta
                  ? "Noticia/Evento"
                  : "Informe Cooperadora"}
              </div>
              <Link to={"/tarjetas/" + currentTarjeta.id} className="btn-edit">
                Editar
              </Link>
            </div>
          ) : (
            <div className="message">
              <br />
              <p>Seleccione una Tarjeta...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default TarjetasList;
