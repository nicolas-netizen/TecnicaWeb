import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./home.css";
import paginaFondo from "../../icons/Banner.jpeg";
import { Routes, Route, useNavigate } from "react-router-dom";

const HomePageBanner = () => {
  const navigate = useNavigate();
  const imageRef = React.useRef(null);
  return (
    <div
      className="imageBanner"
      style={{
        height: `${imageRef.current?.height}`,
      }}
    >
      <div className="imagen-fondo"></div>
      {/* <img
        ref={imageRef}
        src={paginaFondo}
        alt="Background"
        className="imagen-fondo"
        style={{ width: "100%", height: "auto" }}
      /> */}
      <div className="container-infoH">
        <p className="texto-banner">
          Forjando Habilidades técnicas{" "}
          <span id="title-span">y profesionales desde 1958</span>
        </p>
        <button
          className="Button_general"
          style={{
            marginTop: "10px",
            padding: "9px 27px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/Consultas")}
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default HomePageBanner;
