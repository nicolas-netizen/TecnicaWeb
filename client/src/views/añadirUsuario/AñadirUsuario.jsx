import React, { useState } from "react";
import UsuarioDataService from "../../services/UsuarioService";
import NavBarIntranet from "../components/NavBarIntranet";
import "./añadirUsuario.css";

const AddUsuario = () => {
  const initialUsuarioState = {
    id: null,
    nombre: "",
    contraseña: "",
    esSuperUsuario: false,
  };
  const [usuario, setUsuario] = useState(initialUsuarioState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const saveUsuario = () => {
    var data = {
      nombre: usuario.nombre,
      contraseña: usuario.contraseña,
    };
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    UsuarioDataService.create(data)
      .then((response) => {
        setUsuario({
          id: response.data.id,
          nombre: response.data.nombre,
          contraseña: response.data.contraseña,
          esSuperUsuario: response.data.esSuperUsuario,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
      setTimeout(() => {
        window.location.href='/Usuarios';
      }, 500);
  };

  const newUsuario = () => {
    setUsuario(initialUsuarioState);
    setSubmitted(false);
  };

  return (
    <>
      <NavBarIntranet />
      <div className="cuerpocreacion">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newUsuario}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="input-info"
                id="nombre"
                required
                value={usuario.nombre}
                onChange={handleInputChange}
                name="nombre"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="text"
                className="input-info"
                id="contraseña"
                required
                value={usuario.contraseña}
                onChange={handleInputChange}
                name="contraseña"
                autoComplete="off"
              />
            </div>

            <button onClick={saveUsuario} className="btn-subir">
              Crear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddUsuario;
