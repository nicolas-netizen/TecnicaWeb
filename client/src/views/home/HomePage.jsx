import React, { useState } from "react";
import HomePageBanner from "./HomePageBanner";
import EventPart from "../../icons/EventPart.png";
import ImageFon from "../../icons/ImageFon.png";
import llamada from "../../icons/llamada.png";
import banner from "../../../src/icons/Banner.jpeg";
import { Routes, Route, useNavigate } from "react-router-dom";

import ejemploElectricidad from "../../icons/ejemploElectricidad.png";
import ejemploElectronico from "../../icons/ejemploElectronico.jpg";
import ejemploElectromecanico from "../../icons/ejemploElectromecanico.jpg";
import ejemploPracticas from "../../icons/EjemploPracticas.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TarjetaDataService from "../../services/TarjetaService";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const HomePage = () => {
  const [tarjetas, setTarjetas] = useState([]);

  React.useEffect(() => {
    localStorage.removeItem("user");
    retrieveTarjetas();
  }, []);

  const retrieveTarjetas = () => {
    TarjetaDataService.getAll()
      .then((response) => {
        setTarjetas(response.data.reverse());
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useLayoutEffect(() => {
    const ulNavbar = document.querySelector("#ulNavbar");
    ulNavbar.children[0].children[0].style.color = "rgb(26 86 219)";
    if (window.innerWidth < 1280) {
      var burgerButton = document.getElementById("burgerButton");
      console.log(burgerButton);
      burgerButton.addEventListener("onclick", function () {
        console.log("AOIHAJW");
        var ulNavbarSecond = document.getElementById("ulNavbarSecond");
        console.log(ulNavbarSecond);
      });
    }
  }, []);

  const navigate = useNavigate();
  let oscuro = true;

  const pRef = React.useRef(null);
  let [imageUrl, setImageUrl] = React.useState(banner);
  function CambiarFoto(e) {
    if (e.currentTarget.dataset.id == "electricidad") {
      setImageUrl(ejemploElectricidad);
    }
    if (e.currentTarget.dataset.id == "electronica") {
      setImageUrl(ejemploElectronico);
    }
    if (e.currentTarget.dataset.id == "electromecanica") {
      setImageUrl(ejemploElectromecanico);
    }
    if (e.currentTarget.dataset.id == "profesion") {
      setImageUrl(ejemploPracticas);
    }

    var imagenFondo = document.querySelector(".Img-Fon");
    imagenFondo.classList.remove("scale-in-animation");
    void imagenFondo.offsetWidth;
    imagenFondo.classList.add("scale-in-animation");
  }

  if (window.innerWidth > 1000) {
    return (
      <>
        <NavBar />
        <div id="div-root">
          <HomePageBanner style={{ position: "sticky" }} />
          <div id="container-infobox">
            <div
              onClick={() => navigate("/Consultas")}
              style={{ cursor: "pointer" }}
              className="infobox"
            >
              <div className="">
                <h2>
                  Si desea ser alumno del colegio, hace click acá para enviar su
                  gmail →
                </h2>
                <hr className="subrayado-global" />
              </div>
            </div>
            <div
              onClick={() => navigate("/Historia")}
              style={{ cursor: "pointer" }}
              className="infobox"
            >
              <div>
                <h2>Conocé más sobre el colegio y sus autoridades → </h2>
                <hr className="subrayado-global" />
              </div>
            </div>
            <div className="infobox">
              <div>
                <h2>Llamanos</h2>
                <hr
                  style={{ marginBottom: "15px" }}
                  className="subrayado-global"
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "15px",
                    alignItems: "center",
                  }}
                  className="container-contacto"
                >
                  <img className="logo-llmada" src={llamada} alt="" />
                  <div style={{ marginLeft: "10px" }}>
                    <p className="titulo-contacto">Telefono:</p>
                    <p>0220-4825312</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Event-Part">
            <div className="column">
              <div className="parrafo-container">
                <h2 className="text-2xl font-semibold mb-4 TitleEven">
                  Noticias de la Comunidad
                </h2>
                <hr className="subrayado-global" />
                <p className="text-gray-600 my-2 Descrip-Event">
                  Descubre eventos de nuestro colegio técnico industrial. Desde
                  competencias hasta conferencias y talleres especializados.
                </p>
                <button
                  onClick={() => navigate("/eventos")}
                  className="bg-blue-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded Button_general"
                >
                  Ver Noticias
                </button>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="banner-container">
                  <div
                    className="blurEffect"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <img
                      src={
                        tarjetas[1]?.imagen1 == ""
                          ? banner
                          : tarjetas[1]?.imagen1
                      }
                      style={{
                        height: "100%",
                        position: "absolute",
                      }}
                      className="imageBlur"
                    />
                  </div>
                </div>
                <div className="container">
                  <h2
                    style={{
                      fontWeight: "700",
                      fontSize: "25px",
                      lineHeight: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    {tarjetas[1]?.titulo}
                  </h2>
                  <p className="p-info">{tarjetas[1]?.descripcion}</p>
                  <Popup
                    trigger={
                      <button
                        style={{
                          bottom: "40px",
                          fontSize: "15px",
                          padding: "8px",
                          width: "180px",
                        }}
                        className="boton"
                        type="button"
                      >
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
                        <div className="header"> {tarjetas[1]?.titulo} </div>
                        <div style={{ height: "92%", overflow: "auto" }}>
                          <div className="content">
                            {tarjetas[1]?.descripcion}
                          </div>
                          <br />
                          <br />
                          {tarjetas[1]?.imagen1 != "" ? (
                            <div>
                              <img
                                src={tarjetas[1]?.imagen1}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[1]?.imagen2}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[1]?.imagen3}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
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
            </div>
            <div className="column">
              <div className="card">
                <div className="banner-container">
                  <div
                    className="blurEffect"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <img
                      src={
                        tarjetas[0]?.imagen1 == ""
                          ? banner
                          : tarjetas[0]?.imagen1
                      }
                      style={{
                        height: "100%",
                        position: "absolute",
                      }}
                      className="imageBlur"
                    />
                  </div>
                </div>
                <div className="container">
                  <h2
                    style={{
                      fontWeight: "700",
                      fontSize: "25px",
                      lineHeight: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    {tarjetas[0]?.titulo}
                  </h2>
                  <p className="p-info">{tarjetas[0]?.descripcion}</p>
                  <Popup
                    trigger={
                      <button
                        style={{
                          bottom: "40px",
                          fontSize: "15px",
                          padding: "8px",
                          width: "180px",
                        }}
                        className="boton"
                        type="button"
                      >
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
                        <div className="header"> {tarjetas[0]?.titulo} </div>
                        <div style={{ height: "92%", overflow: "auto" }}>
                          <div className="content">
                            {tarjetas[0]?.descripcion}
                          </div>
                          <br />
                          <br />
                          {tarjetas[0]?.imagen1 != "" ? (
                            <div>
                              <img
                                src={tarjetas[0]?.imagen1}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[0]?.imagen2}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[0]?.imagen3}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
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
            </div>
          </div>
          <div
            className="Img-Fon"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div
              onMouseLeave={() => setImageUrl(banner)}
              className="overlay-container"
              style={{ cursor: "pointer" }}
            >
              <div
                onMouseEnter={(e) => CambiarFoto(e)}
                data-id="electricidad"
                className="overlay-box"
                onClick={() => navigate("/especialidades?tipo=electricidad")}
              >
                <h3 className="overlay-text">ELECTRICIDAD</h3>
              </div>
              <div
                onMouseEnter={(e) => CambiarFoto(e)}
                data-id="electronica"
                className="overlay-box"
                onClick={() => navigate("/especialidades?tipo=electronica")}
              >
                <h3 className="overlay-text">ELECTRÓNICA</h3>
              </div>
              <div
                onMouseEnter={(e) => CambiarFoto(e)}
                data-id="electromecanica"
                className="overlay-box"
                onClick={() => navigate("/especialidades?tipo=electromecanica")}
              >
                <h3 className="overlay-text">ELECTROMECÁNICA</h3>
              </div>
              <div
                onMouseEnter={(e) => CambiarFoto(e)}
                data-id="profesion"
                className="overlay-box"
                onClick={() =>
                  navigate("/especialidades?tipo=profesionalizantes")
                }
              >
                <h3 className="overlay-text">PROFESIONALIZANTES</h3>
              </div>
            </div>
          </div>
        </div>
        <Footer oscuro={oscuro} />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <div id="div-root">
          <HomePageBanner />
          <div id="container-infobox">
            <div className="infobox" onClick={() => navigate("/login")}>
              <div className="">
                <h2>
                  Si sos alumno del colegio, hace click acá para ver los
                  comunicados →
                </h2>
                <hr className="subrayado-global" />
              </div>
            </div>
            <div className="infobox" onClick={() => navigate("/Historia")}>
              <div>
                <h2>Conocé más sobre el colegio y sus autoridades → </h2>
                <hr className="subrayado-global" />
              </div>
            </div>
            <div className="infobox">
              <div>
                <h2>Llamanos</h2>
                <hr
                  style={{ marginBottom: "15px" }}
                  className="subrayado-global"
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "15px",
                    alignItems: "center",
                  }}
                  className="container-contacto"
                >
                  <img className="logo-llmada" src={llamada} alt="" />
                  <div style={{ marginLeft: "10px" }}>
                    <p className="titulo-contacto">Dirección:</p>
                    <p>3346-4578</p>
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  className="container-contacto"
                >
                  <img className="logo-llmada" src={llamada} alt="" />
                  <div style={{ marginLeft: "10px" }}>
                    <p className="titulo-contacto">Preceptoria:</p>
                    <p ref={pRef} onClick={() => console.log(pRef.current.m)}>
                      3346-4578
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Event-Part">
            <div className="column">
              <div className="parrafo-container">
                <h2 className="text-2xl font-semibold mb-4 TitleEven">
                  Noticias de la Comunidad
                </h2>
                <hr className="subrayado-global" />
                <p className="text-gray-600 my-2 Descrip-Event">
                  Descubre eventos de nuestro colegio técnico industrial. Desde
                  competencias hasta conferencias y talleres especializados.
                </p>
                <button className="bg-blue-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded Button_general">
                  Ver Noticias
                </button>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div
                  style={{ backgroundImage: `url(${tarjetas[0]?.imagen1})` }}
                  className="banner-container"
                >
                  <img
                    height="100%"
                    src={
                      tarjetas[0]?.imagen1 == "" ? banner : tarjetas[0]?.imagen1
                    }
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="container">
                  <h2
                    style={{
                      fontWeight: "700",
                      fontSize: "25px",
                      lineHeight: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    {tarjetas[0]?.titulo}
                  </h2>
                  <p className="p-info">{tarjetas[0]?.descripcion}</p>
                  <Popup
                    trigger={
                      <button
                        style={{
                          marginTop: "20px",
                          fontSize: "15px",
                          padding: "8px",
                          width: "180px",
                          position: "relative",
                        }}
                        className="boton"
                        type="button"
                      >
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
                        <div className="header"> {tarjetas[0]?.titulo} </div>
                        <div style={{ height: "92%", overflow: "auto" }}>
                          <div className="content">
                            {tarjetas[0]?.descripcion}
                          </div>
                          <br />
                          <br />
                          {tarjetas[0]?.imagen1 != "" ? (
                            <div>
                              <img
                                src={tarjetas[0]?.imagen1}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[0]?.imagen2}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[0]?.imagen3}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
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
            </div>
            <div className="column">
              <div className="card">
                <div
                  style={{
                    backgroundImage: `url(${tarjetas[1]?.imagen1})`,
                    maxHeight: "500px",
                  }}
                  className="banner-container"
                >
                  <img
                    height="100%"
                    src={
                      tarjetas[1]?.imagen1 == "" ? banner : tarjetas[1]?.imagen1
                    }
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="container">
                  <h2
                    style={{
                      fontWeight: "700",
                      fontSize: "25px",
                      lineHeight: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    {tarjetas[1]?.titulo}
                  </h2>
                  <p className="p-info">{tarjetas[1]?.descripcion}</p>
                  <Popup
                    trigger={
                      <button
                        style={{
                          marginTop: "20px",
                          fontSize: "15px",
                          padding: "8px",
                          width: "180px",
                          position: "relative",
                        }}
                        className="boton"
                        type="button"
                      >
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
                        <div className="header"> {tarjetas[1]?.titulo} </div>
                        <div style={{ height: "92%", overflow: "auto" }}>
                          <div className="content">
                            {tarjetas[1]?.descripcion}
                          </div>
                          <br />
                          <br />
                          {tarjetas[1]?.imagen1 != "" ? (
                            <div>
                              <img
                                src={tarjetas[1]?.imagen1}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[1]?.imagen2}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
                                alt=""
                              />
                              <img
                                src={tarjetas[1]?.imagen3}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "700px",
                                }}
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
            </div>
          </div>
          <div id="img-sm">
            <img src={imageUrl} alt="" />
          </div>
          <div className="overlay-container">
            <div
              onClick={() => navigate("/especialidades?tipo=electricidad")}
              data-id="electricidad"
              className="overlay-box"
            >
              <h3 className="overlay-text">ELECTRICIDAD</h3>
            </div>
            <div
              onClick={() => navigate("/especialidades?tipo=electronica")}
              data-id="electronica"
              className="overlay-box"
            >
              <h3 className="overlay-text">ELECTRÓNICA</h3>
            </div>
            <div
              onClick={() => navigate("/especialidades?tipo=electromecanica")}
              data-id="electromecanica"
              className="overlay-box"
            >
              <h3 className="overlay-text">ELECTROMECÁNICA</h3>
            </div>
            <div
              onClick={() => navigate("/especialidades")}
              data-id="profesion"
              className="overlay-box"
            >
              <h3 className="overlay-text">PROFESIONALIZANTES</h3>
            </div>
            <Footer oscuro={oscuro} />
          </div>
        </div>
      </>
    );
  }
};
export default HomePage;
