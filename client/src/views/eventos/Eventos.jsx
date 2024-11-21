import "./eventos.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Tarjetas } from "../components/tarjetas/tarjetas";
import image18 from "../../icons/image 18.png";
import TarjetaDataService from "../../services/TarjetaService";
import imgtecnicanoticas from "../../icons/imgtecnicanoticas 1.png"

export function PageEventos() {
  const [tarjetas, setTarjetas] = React.useState([]);
  const arrayRandom = ["hola", "hola2", "hola3"];
  const retrieveTarjetas = () => {
    TarjetaDataService.getAll()
      .then((response) => {
        setTarjetas(response.data.reverse());
        // const tarjetasMapeadas = tarjetas.map((t) => {
        //   <Tarjetas
        //     tarjetaId={t.id}
        //     imagenUrl={""}
        //     titulo={t.titulo}
        //     descripcion={t.descripcion}
        //   />;
        // });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  React.useEffect(() => {
    retrieveTarjetas();
  }, []);

  React.useLayoutEffect(() => {
    const ulNavbar = document.querySelector("#ulNavbar");
    ulNavbar.children[2].children[0].style.color = "rgb(26 86 219)";
    // console.log(ulNavbar.children[3].style.backgroundColor);
  }, []);

  return (
    <>
      <NavBar />
      <div className="main">
        <img src={imgtecnicanoticas} alt="ImagenEventos"  className="img-principal"/>
        <div id="descripcion-eventos">
          <h1 className="titulo"> Noticias de la comunidad</h1>
          <hr className="subrayado" />
          <p>
            En E.E.S.T. N°1 se pondrán a disposición un gran número de eventos e
            informes de los cuales a continuación se lograran ver los próximos
            que están por venir
          </p>
        </div>
        <div className="ParteCuadros" style={{ margin: "0px" }}>
          <div className="CuadrosEventos">
            {tarjetas.map((t) =>
              t.tipoTarjeta === true ? (
                <Tarjetas
                  tarjetaId={t.id}
                  imagen1={t.imagen1}
                  imagen2={t.imagen2}
                  imagen3={t.imagen3}
                  titulo={t.titulo}
                  descripcion={t.descripcion}
                  tipoTarjeta={t.tipoTarjeta}
                />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
