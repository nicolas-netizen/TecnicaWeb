import React, { useState } from "react";
import TarjetaDataService from "../../services/TarjetaService";
import NavBarIntranet from "../components/NavBarIntranet";
import "./añadirTarjeta.css";
import { Chart } from "react-google-charts";

const AddTarjeta = () => {
  const initialTarjetaState = {
    id: null,
    titulo: "",
    descripcion: "",
    // imagenes: [],
    tipoTarjeta: false,
    idUsuario: "",
    grafico: "",
    imagen1: "",
    imagen2: "",
    imagen3: "",
  };

  const [tarjeta, setTarjeta] = useState(initialTarjetaState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTarjeta({ ...tarjeta, [name]: value });
  };

  const saveTarjeta = () => {
    var data = {
      titulo: tarjeta.titulo,
      descripcion: tarjeta.descripcion,
      tipoTarjeta: tarjeta.tipoTarjeta,
      idUsuario: "Anonimo",
      grafico: `{${tarjeta.grafico}}`,
      imagen1: tarjeta.imagen1,
      imagen2: tarjeta.imagen2,
      imagen3: tarjeta.imagen3,
    };
    var inputs = document.getElementsByTagName("input");
    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    for (var i = 0; i < textareas.length; i++) {
      textareas[i].value = "";
    }
    console.log(data);
    TarjetaDataService.create(data)
      .then((response) => {
        setTarjeta({
          id: response.data.id,
          titulo: response.data.titulo,
          descripcion: response.data.descripcion,
          idUsuario: response.data.idUsuario,
          // imagenes: response.data.imagenes,
          tipoTarjeta: response.data.tipoTarjeta,
          idUsuario: response.data.idUsuario,
          grafico: response.data.grafico,
          imagen1: response.data.imagen1,
          imagen2: response.data.imagen2,
          imagen3: response.data.imagen3,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
      setTimeout(() => {
        window.location.href='/Tarjetas';
      }, 500);
  };

  const newTarjeta = () => {
    setTarjeta(initialTarjetaState);
    setSubmitted(false);
  };

  return (
    <>
      <NavBarIntranet />
      <div className="cuerpocreacion">
        {submitted ? (
          <div>
            <h4>Subiste una tarjeta!</h4>
            <button className="btn btn-success" onClick={newTarjeta}>
              Añadir otra
            </button>
          </div>
        ) : (
          <div>
            <div className="conteiner-input">
              <label htmlFor="titulo">Titulo</label>
              <input
                type="text"
                className="input-info"
                id="titulo"
                autoComplete="off"
                required
                value={tarjeta.titulo}
                onChange={handleInputChange}
                name="titulo"
              />
            </div>

            <div className="conteiner-input">
              <label htmlFor="descripcion">Descripcion</label>
              <textarea
                className="textarea-grafico"
                id="descripcion"
                autoComplete="off"
                required
                value={tarjeta.descripcion}
                onChange={handleInputChange}
                name="descripcion"
                style={{ padding: "10px" }}
              ></textarea>
            </div>

            <div className="conteiner-input">
              <label htmlFor="imagen1">Imagen 1 (opcional)</label>
              <input
                type="text"
                className="input-info"
                id="imagen1"
                required
                autoComplete="off"
                value={tarjeta.imagen1}
                onChange={handleInputChange}
                name="imagen1"
              />
            </div>
            <div className="conteiner-input">
              <label htmlFor="imagen2">Imagen 2 (opcional)</label>
              <input
                type="text"
                className="input-info"
                id="imagen2"
                required
                autoComplete="off"
                value={tarjeta.imagen2}
                onChange={handleInputChange}
                name="imagen2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="imagen3">Imagen 3 (opcional)</label>
              <input
                type="text"
                className="input-info"
                id="imagen3"
                required
                autoComplete="off"
                value={tarjeta.imagen3}
                onChange={handleInputChange}
                name="imagen3"
              />
            </div>
            <div className="conteiner-input">
              <label htmlFor="tipoTarjeta">Tipo de Tarjeta</label>
              <select
                className="combobox-tarjeta"
                id="tipoTarjeta"
                name="tipoTarjeta"
                value={tarjeta.tipoTarjeta}
                onChange={handleInputChange}
              >
                <option value={true}>Noticia/Evento</option>
                <option value={false}>Informe Cooperadora</option>
              </select>
            </div>
            {tarjeta.tipoTarjeta == "true" ? (
              <></>
            ) : (
              <div className="form-group">
                <label htmlFor="grafico">ingrese datos del grafico</label>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#a3a0a0",
                    marginTop: "-5px",
                    marginBottom: "5px",
                  }}
                  htmlFor="grafico"
                >
                  Ejemplo de como ingresar los datos:
                  <p>"Libros": 14000,</p>
                  <p>"Limpieza": 30000,</p>
                  <p>"Comida": 50000,</p>
                  <p>"Otros": 1500</p>
                </p>
                <textarea
                  autoComplete="off"
                  className="textarea-grafico"
                  id="grafico"
                  name="grafico"
                  value={tarjeta.grafico}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>
            )}

            <button
              style={{ marginBottom: "25px" }}
              onClick={saveTarjeta}
              className="btn-subir"
            >
              Crear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddTarjeta;
