import React, { useEffect } from "react";
import "./cooperadora.css";
import { Tarjetas } from "../components/tarjetas/tarjetas";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import image25 from "../../icons/image 25.png";
import image29 from "../../icons/image 29.png";
import { Chart } from "react-google-charts";
import banner from "../../icons/Banner.jpeg";
import TarjetaDataService from "../../services/TarjetaService";

export function PageCoperadora() {
  const [tarjetas, setTarjetas] = React.useState([]);
  const [data, setData] = React.useState();
  let jsonData = {};
  let dataString = "setData([[`Gasto`, `Cantidad de dinero`],";
  let contador = 0;

  const retrieveTarjetas = () => {
    TarjetaDataService.getAll()
      .then((response) => {
        console.log(response);
        setTarjetas(response.data.reverse());
        let filteredData = response.data.filter((x) => x.tipoTarjeta == false);
        try {
          jsonData = JSON.parse(filteredData[0].grafico);
          jsonData = JSON.parse(jsonData);
        } catch {}
        console.log(filteredData[0].grafico);
        console.log(jsonData);
        if (contador == 0) {
          for (const [key, value] of Object.entries(jsonData)) {
            dataString = dataString + `["${key}", ${value}],`;
          }
          dataString = dataString + "])";
          eval(dataString);
        }
        contador++;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    retrieveTarjetas();
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  React.useLayoutEffect(() => {
    const ulNavbar = document.querySelector("#ulNavbar");
    ulNavbar.children[1].children[0].style.color = "rgb(26 86 219)";
  }, []);

  let oscuro;

  const options = {
    titlePosition: "none",
    pieSliceText: "value",
    chartArea: { width: "90%", height: "80%", top: 30 },
    pieHole: 0.45,
    is3D: false,
    legend: { bottom: 0, position: "bottom" },
  };

  return (
    <>
      <NavBar />
      <div className="main">
        <img src={image25} alt="imagen" />

        <div className="PrimerParte">
          <h1 className="titulo" style={{ fontWeight: "700" }}>
            Cooperadora Institucional
          </h1>
          <hr className="subrayado" />
          <p>
            La Cooperadora de la E.E.S.T. N°1 de Merlo es una organización
            conformada por padres, docentes, y miembros comprometidos de la
            comunidad que comparten la visión de brindar una educación técnica
            pública de calidad. Trabajamos juntos para recaudar fondos y
            recursos que fortalezcan la experiencia educativa de nuestros
            estudiantes y contribuyan a mejorar las instalaciones, adquirir
            equipamiento tecnológico, promover actividades extracurriculares y
            ofrecer becas. Tu apoyo y participación en la Cooperadora son
            esenciales para el crecimiento y el éxito de nuestra escuela.
          </p>
          <br />
          <br />
        </div>
        <div className="Rueda">
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
          />
        </div>
        <div className="UltimaParte">
          <div className="CuadrosCooperadora">
            {tarjetas.map((t) =>
              t.tipoTarjeta === false ? (
                <Tarjetas
                  tarjetaId={t.id}
                  imagen1={t.imagen1}
                  imagen2={t.imagen2}
                  imagen3={t.imagen3}
                  titulo={t.titulo}
                  descripcion={t.descripcion}
                  tipoTarjeta={t.tipoTarjeta}
                  grafico={t.grafico}
                />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
        <Footer oscuro={(oscuro = false)} />
      </div>
    </>
  );
}
