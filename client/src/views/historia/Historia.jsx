import "./historia.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import image33 from "../../icons/image 33.png";
import image31 from "../../icons/image 31.png";

export default function Historia() {
  React.useLayoutEffect(() => {
    const ulNavbar = document.querySelector("#ulNavbar");
    ulNavbar.children[0].children[0].style.color = "rgb(26 86 219)";
    // console.log(ulNavbar.children[3].style.backgroundColor);
  }, []);
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="img-1">
          <img
            src={image33}
            alt="ImagenDeLaEscuela"
            style={{ width: "100%" }}
          />
        </div>
        <div className="PrimerTexto">
          <h1 className="titulo">E.E.S.T Nº1 de Merlo: Acerca de nosotros</h1>
          <hr className="subrayado" />
          <p className="texto-1">
            La Escuela de Educación Técnica N° 1 se encuentra en el centro de
            Merlo, en el barrio fundacional llamado "El Pueblito", rodeada de
            comercios y con fácil acceso a través de transporte público. Atrae a
            estudiantes de barrios periféricos y distritos cercanos, algunos de
            los cuales provienen de hogares con escasos recursos. La escuela
            cuenta con el apoyo de la comunidad y goza de prestigio en el
            distrito. Tiene una rica historia, habiendo evolucionado desde la
            Escuela Industrial de Merlo (ETIM) y habiendo experimentado varios
            cambios en su dirección a lo largo de los años. La escuela se
            enorgullece de sus logros y trabaja arduamente para brindar una
            educación técnica de calidad.
          </p>
        </div>
        <div className="SegundaParte">
          <h1 className="titulo-2">E.E.S.T Nº1 de Merlo</h1>
          <div className="containerCuadros">
            <div className="HistoriaCuadros">
              <h2 className="subTitulos">Tecnologia</h2>
              <p>
                Incorporamos permanentemente nuevas tecnologías a los planes de
                estudio con el fin de que nuestro alumnado se destaque y sepa
                utilizar todo tipo de herramientas digitales y tradicionales.
              </p>
            </div>
            <div className="HistoriaCuadros">
              <h2 className="subTitulos">Empleo</h2>
              <p>
                {" "}
                Los alumnos de la escuela están bien preparados para ingresar al
                mercado laboral en roles técnicos y contribuir de manera
                significativa en sus respectivas industrias.
              </p>
            </div>
            <div className="HistoriaCuadros">
              <h2 className="subTitulos">Profesionales</h2>
              <p>
                Nuestros docentes tuvieron acceso a importantes cursos de
                capacitación sobre Automatización y Robótica Industrial y hemos
                brindado Capacitación Tecnológica a importantes empresas de la
                zona.
              </p>
            </div>
          </div>
        </div>
        <div className="TerceraParte">
          <h1 className="titulo">Historia de la institución</h1>
          <hr className="subrayado" />
          <p className="texto-1">
            La historia de la Escuela de Educación Técnica N° 1 tiene sus
            inicios en el año 1958, cuando la comunidad de Merlo expresó su
            deseo y necesidad de contar con una Escuela de Enseñanza Técnica.
            Trabajaron arduamente para lograr este objetivo y, finalmente, en
            1962, el Ministerio de Educación de la Provincia de Buenos Aires
            emitió la Resolución N° 00422/62 que dio lugar a la creación de la
            Escuela Industrial de Merlo (ETIM). <br /> <br /> La ETIM comenzó a
            funcionar en un edificio ubicado en la Avenida Vergara 161, el cual
            actualmente alberga la E.E.T. N° 1. Su primer Director organizador
            fue el Ingeniero Francisco Enrique Urondo, y los instructores de los
            talleres, en su mayoría provenientes del Ferrocarril Belgrano de
            Libertad, adaptaron una antigua casa de la familia Trueba para dar
            lugar a la escuela. <br /> <br />
            En 1981, la E.E.T.N° 1 celebró la graduación de su Primera Promoción
            de Técnicos en Electrónica. Durante la década del 90, se llevaron a
            cabo varias mejoras en la infraestructura, como la inauguración de
            seis aulas en planta alta, la instalación de laboratorios de
            Computación y Físico-Química, la renovación de los sanitarios y la
            construcción de una sala de biblioteca y un salón comedor. <br />{" "}
            <br />A partir del año 2000, el colegio experimentó una
            transformación significativa con la inauguración de un nuevo
            edificio. Desde entonces, nos enfocamos en mejorar la calidad
            educativa y consolidar la identidad institucional. Obtuvimos
            reconocimientos destacados en olimpíadas, concursos y eventos
            académicos, especialmente en el campo de la automatización
            industrial.{" "}
          </p>
          <div className="Final">
            <img
              src={image31}
              alt="Imagen de autoridades"
              style={{ height: "75%" }}
            />
            <div className="SegundoFinal">
              <h1 className="titulo">Listado Autoridades</h1>
              <hr className="subrayado" />
              <ul>
                <li>Director: Lojo Facundo</li>
                <li>Vicedirector: Hernandes Natalia</li>
                
                <li>Vicedirector: Vallejos Facundo</li>
                <li>Secretaria: Veronica Veron</li>
                <li>Jefes de taller: Romano Sergio<li className="li-pequeño">Ibarra Ariel</li> <li className="li-pequeño">Bielli Nahuel</li> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
