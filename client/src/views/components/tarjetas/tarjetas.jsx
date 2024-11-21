import React from "react";
import "./tarjetas.css";
import banner from "../../../icons/Banner.jpeg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export const Tarjetas = ({
  tarjetaId,
  imagen1,
  imagen2,
  imagen3,
  titulo,
  descripcion,
  tipoTarjeta,
  grafico,
}) => {
  console.log(JSON.parse(grafico));
  var maxlimit = window.innerWidth / 8;
  if (window.innerWidth < 1070) {
    var maxlimit = window.innerWidth / 8;
    if (window.innerWidth < 500) {
      var maxlimit = 200;
    }
  }
  if (tipoTarjeta == true) {
    if (imagen1 == "") {
      imagen1 = banner;
    }
    return (
      <div className="cuadros">
        <img
          className="imagenCuadro"
          src={imagen1}
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div className="Informacion">
          <h1 id="tituloTarjeta">{titulo}</h1>
          <div className="containerp">
            <p>
              {descripcion.length > maxlimit
                ? descripcion.substring(0, maxlimit - 3) + "..."
                : descripcion}
            </p>
          </div>
          <Popup
            trigger={
              <button className="boton" type="button">
                Mas Informacion
              </button>
            }
            modal
            nested
            lockScroll={true}
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> {titulo} </div>
                <div style={{ height: "92%", overflow: "auto" }}>
                  <div className="content">{descripcion}</div>
                  <br />
                  <br />
                  {imagen1 != banner ? (
                    <div>
                      <img
                        src={imagen1}
                        style={{ objectFit: "cover", maxHeight: "500px" }}
                        alt=""
                      />
                      <img
                        src={imagen2}
                        style={{ objectFit: "cover", maxHeight: "500px" }}
                        alt=""
                      />
                      <img
                        src={imagen3}
                        style={{ objectFit: "cover", maxHeight: "500px" }}
                        alt=""
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    );
  }
  if (tipoTarjeta == false) {
    if (imagen1 == "") {
      imagen1 = banner;
    }
    const graficoTemporal2 = JSON.parse(grafico);
    const graficoTemporal = JSON.parse(graficoTemporal2);
    let graficoFinal = [];
    Object.keys(graficoTemporal).forEach(function (key, index) {
      graficoFinal.push(`${key}: ${graficoTemporal[key]}`);
    });
    return (
      <div className="cuadros">
        <img
          className="imagenCuadro"
          src={imagen1}
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div className="Informacion">
          <h1 id="tituloTarjeta">{titulo}</h1>
          <div className="containerp">
            <p>
              {descripcion.length > maxlimit
                ? descripcion.substring(0, maxlimit - 3) + "..."
                : descripcion}
            </p>
          </div>{" "}
          <Popup
            trigger={
              <button className="boton" type="button">
                Mas Informacion
              </button>
            }
            modal
            nested
            lockScroll={true}
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> {titulo} </div>
                <div style={{ height: "92%", overflow: "auto" }}>
                  <div className="content">{descripcion}</div>
                  <ul className="gastos">
                    {graficoFinal.map((g) => (
                      <li>{g}</li>
                    ))}
                  </ul>
                  <br />
                  <br />
                  {imagen1 != banner ? (
                    <div>
                      <img
                        src={imagen1}
                        style={{ objectFit: "cover", maxHeight: "500px" }}
                        alt=""
                      />
                      <img
                        src={imagen2}
                        style={{ objectFit: "cover", maxHeight: "500px" }}
                        alt=""
                      />
                      <img
                        src={imagen3}
                        style={{ objectFit: "cover", maxHeight: "500px" }}
                        alt=""
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    );
  }
};
