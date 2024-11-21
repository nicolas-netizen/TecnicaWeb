import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./especialidades.css";
import bannerEspecialidades from "../../icons/bannerEspecialidades.png";
import lightbulb from "../../icons/lightbulb.png";
import chipComputadora from "../../icons/chipComputadora.png";
import brazoRobotico from "../../icons/brazoRobotico.png";
import imagenGlobo from "../../icons/cuadricula-del-globo.png"
import image34 from "../../icons/image 34.png"

export function PageEspecialidades() {
  const ElectricidadRef = useRef(null);
  const ElectronicaRef = useRef(null);
  const ElectromecanicaRef = useRef(null);
  const ProfesionalizantesRef = useRef(null);

  React.useLayoutEffect(() => {
    const ulNavbar = document.querySelector("#ulNavbar");
    ulNavbar.children[0].children[0].style.color = "rgb(26 86 219)";
    console.log(ulNavbar.children[0].style.backgroundColor);
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get("tipo");
    if (tipo == "electricidad") {
      ElectricidadRef.current?.scrollIntoView({
        block: "center",
      });
    } else if (tipo == "electronica") {
      ElectronicaRef.current?.scrollIntoView({
        block: "center",
      });
    } else if (tipo == "electromecanica") {
      ElectromecanicaRef.current?.scrollIntoView({
        block: "center",
      });
    } else if (tipo == "profesionalizantes") {
      ProfesionalizantesRef.current?.scrollIntoView({
        block: "center",
      });
    }
  }, []);

  if (window.innerWidth > 900) {
    return (
      <>
        <NavBar />
        <div className="main">
          <img id="banner" src={image34} alt="" className="img-especialidades" />
          <section id="descripcion-especialidades">
            <h1 className="titulo">Especialidades</h1>
            <hr className="subrayado" />
            <p>
              En la E.E.S.T Nº1 de Merlo presentamos una amplia gama de
              especialidades las cuales han sido cuidadosamente diseñadas para
              proporcionar a nuestros estudiantes una formación sólida y
              completa en el ámbito técnico. Nuestro enfoque se centra en
              brindar una educación de calidad, promoviendo el desarrollo de
              habilidades técnicas especializadas, el pensamiento crítico, la
              creatividad y el trabajo en equipo. A través de estas
              especialidades, nuestros estudiantes adquirirán las competencias
              necesarias para enfrentar los desafíos del mundo laboral y
              destacarse en sus respectivos campos.
            </p>
          </section>
          <section id="container-tarjetas">
            <div ref={ElectricidadRef} className="tarjeta">
              <div className="tarjeta-visual electricista">
                <div>
                  <h2>Electricidad</h2>
                  <p>
                    Áreas de competencia: Empresas de servicios eléctricos.
                    Laboratorios de mediciones eléctricas de calibración,
                    mantenimiento y reparación. Infraestructura rural, urbana y
                    edificios.
                  </p>
                </div>
                <img src={lightbulb} alt="" />
              </div>
              <div className="tarjeta-descripcion electricista">
                <div>
                  <p>
                    Diseño e instalación de componentes y productos electrónicos
                    en diversos entornos.
                  </p>
                  <hr />
                  <p>
                    Mantenimiento y reparación de equipos electrónicos y
                    electromecánicos.
                  </p>
                  <hr />
                  <p>
                    Solución de problemas técnicos en áreas industriales y de
                    telecomunicaciones.
                  </p>
                  <hr />
                  <p>
                    Supervisión y coordinación de la producción y montaje de
                    equipos electromecánicos.
                  </p>
                  <hr />
                  <p>
                    Aplicación de tecnologías avanzadas como la robótica y la
                    automatización en la Industria 4.0.
                  </p>
                  <hr />
                  <button>Descargar plan de estudos</button>
                </div>
              </div>
            </div>
            <div ref={ElectronicaRef} className="tarjeta electronica">
              <div className="tarjeta-descripcion electronica">
                <div>
                  <p>
                    Diseño de sistemas eléctricos para diversas aplicaciones
                    industriales y de telecomunicaciones.
                  </p>
                  <hr />
                  <p>
                    Operación y evaluación de sistemas eléctricos para
                    garantizar su eficiencia y seguridad.
                  </p>
                  <hr />
                  <p>
                    Instalación y supervisión de equipos eléctricos en proyectos
                    de construcción e infraestructura.
                  </p>
                  <hr />
                  <p>
                    Mantenimiento y reparación de sistemas eléctricos en
                    industrias, empresas de servicios y laboratorios.
                  </p>
                  <hr />
                  <p>
                    Gestión y comercialización de soluciones eléctricas,
                    brindando asesoramiento técnico y soporte a clientes.
                  </p>
                  <hr />
                  <button>Descargar plan de estudos</button>
                </div>
              </div>
              <div className="tarjeta-visual electronica">
                <div>
                  <h2>Electrónica</h2>
                  <p>
                    Áreas de competencia: Electrónica industrial,
                    telecomunicaciones, instrumentos, ámbitos de control,
                    gestión y comercialización.
                  </p>
                </div>
                <img src={chipComputadora} alt="" />
              </div>
            </div>
            <div ref={ElectromecanicaRef} className="tarjeta">
              <div className="tarjeta-visual electromecanica">
                <div>
                  <h2>Electromecánica</h2>
                  <p>
                    Áreas de competencia: Electrónica industrial,
                    telecomunicaciones, instrumentos, ámbitos de control,
                    gestión y comercialización.
                  </p>
                </div>
                <img src={brazoRobotico} alt="" />
              </div>
              <div className="tarjeta-descripcion electromecanica">
                <div>
                  <p>
                    Proyectar, diseñar y montar sistemas electrónicos tanto
                    analógicos como digitales.
                  </p>
                  <hr />
                  <p>
                    Realizar ensayos, mediciones y mantenimiento integral de
                    equipos electrónicos.
                  </p>
                  <hr />
                  <p>
                    Instalar y programar redes electrónicas, asegurando su
                    correcto funcionamiento y configuración.
                  </p>
                  <hr />
                  <p>
                    Participar en emprendimientos selecciónando, asesorarndo y
                    comercializando equipos electrónicos.
                  </p>
                  <hr />
                  <p>
                    Aplicar tecnologías de vanguardia, como inteligencia
                    artificial, robótica y programación.
                  </p>
                  <hr />
                  <button>Descargar plan de estudos</button>
                </div>
              </div>
            </div>
            <div ref={ProfesionalizantesRef} className="tarjeta profesionalizante">
              <div className="tarjeta-descripcion profesionalizante">
                <div>
                  <p>
                  Desarrollo de sistemas adaptados a aplicaciones industriales y de telecomunicaciones.
                  </p>
                  <hr />
                  <p>
                  Garantía de eficiencia y seguridad en sistemas eléctricos.
                  </p>
                  <hr />
                  <p>
                  Participación en proyectos de construcción y supervisión de instalaciones eléctricas.
                  </p>
                  <hr />
                  <p>
                  Diagnóstico y solución de problemas en sistemas eléctricos industriales.
                  </p>
                  <hr />
                  <p>
                  Asesoramiento técnico y soporte a clientes en la implementación de soluciones eléctricas.
                  </p>
                  <hr />
                </div>
              </div>
              <div className="tarjeta-visual profesionalizante">
                <div>
                  <h2>Profesionalizantes  </h2>
                  <p>
                    Áreas de competencia: Electrónica industrial, electricidad, mantenimiento electromecánico, diseño de circuitos, robótica, gestión de proyectos, seguridad eléctrica</p>
                </div>
                <img src={imagenGlobo} alt="" />
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <div className="main">
          <img id="banner" src={bannerEspecialidades} alt="" />
          <section id="descripcion-especialidades">
            <h1>Especialidades</h1>
            <hr className="subrayado" />
            <p>
              En la E.E.S.T Nº1 de Merlo presentamos una amplia gama de
              especialidades las cuales han sido cuidadosamente diseñadas para
              proporcionar a nuestros estudiantes una formación sólida y
              completa en el ámbito técnico. Nuestro enfoque se centra en
              brindar una educación de calidad, promoviendo el desarrollo de
              habilidades técnicas especializadas, el pensamiento crítico, la
              creatividad y el trabajo en equipo. A través de estas
              especialidades, nuestros estudiantes adquirirán las competencias
              necesarias para enfrentar los desafíos del mundo laboral y
              destacarse en sus respectivos campos.
            </p>
          </section>
          <section id="container-tarjetas">
            <div ref={ElectricidadRef} className="tarjeta">
              <div className="tarjeta-visual electricista">
                <div>
                  <div>
                    <h2>Electricidad</h2>
                    <img src={lightbulb} alt="" />
                  </div>
                  <p>
                    Áreas de competencia: Empresas de servicios eléctricos.
                    Laboratorios de mediciones eléctricas de calibración,
                    mantenimiento y reparación. Infraestructura rural, urbana y
                    edificios.
                  </p>
                </div>
              </div>
              <div className="tarjeta-descripcion electricista">
                <div>
                  <p>
                    Diseño e instalación de componentes y productos electrónicos
                    en diversos entornos.
                  </p>
                  <hr />
                  <p>
                    Mantenimiento y reparación de equipos electrónicos y
                    electromecánicos.
                  </p>
                  <hr />
                  <p>
                    Solución de problemas técnicos en áreas industriales y de
                    telecomunicaciones.
                  </p>
                  <hr />
                  <p>
                    Supervisión y coordinación de la producción y montaje de
                    equipos electromecánicos.
                  </p>
                  <hr />
                  <p>
                    Aplicación de tecnologías avanzadas como la robótica y la
                    automatización en la Industria 4.0.
                  </p>
                  <hr />
                  <button>Descargar plan de estudos</button>
                </div>
              </div>
            </div>
            <div ref={ElectronicaRef} className="tarjeta electronica">
              <div className="tarjeta-visual electronica">
                <div>
                  <div>
                    <h2>Electrónica</h2>
                    <img src={chipComputadora} alt="" />
                  </div>
                  <p>
                    Áreas de competencia: Electrónica industrial,
                    telecomunicaciones, instrumentos, ámbitos de control,
                    gestión y comercialización.
                  </p>
                </div>
              </div>
              <div className="tarjeta-descripcion electronica">
                <div>
                  <p>
                    Diseño de sistemas eléctricos para diversas aplicaciones
                    industriales y de telecomunicaciones.
                  </p>
                  <hr />
                  <p>
                    Operación y evaluación de sistemas eléctricos para
                    garantizar su eficiencia y seguridad.
                  </p>
                  <hr />
                  <p>
                    Instalación y supervisión de equipos eléctricos en proyectos
                    de construcción e infraestructura.
                  </p>
                  <hr />
                  <p>
                    Mantenimiento y reparación de sistemas eléctricos en
                    industrias, empresas de servicios y laboratorios.
                  </p>
                  <hr />
                  <p>
                    Gestión y comercialización de soluciones eléctricas,
                    brindando asesoramiento técnico y soporte a clientes.
                  </p>
                  <hr />
                  <button>Descargar plan de estudos</button>
                </div>
              </div>
            </div>
            <div ref={ElectromecanicaRef} className="tarjeta">
              <div className="tarjeta-visual electromecanica">
                <div>
                  <div>
                    <h2>Electromecánica</h2>
                    <img src={brazoRobotico} alt="" />
                  </div>
                  <p>
                    Áreas de competencia: Electrónica industrial,
                    telecomunicaciones, instrumentos, ámbitos de control,
                    gestión y comercialización.
                  </p>
                </div>
              </div>
              <div className="tarjeta-descripcion electromecanica">
                <div>
                  <p>
                    Proyectar, diseñar y montar sistemas electrónicos tanto
                    analógicos como digitales.
                  </p>
                  <hr />
                  <p>
                    Realizar ensayos, mediciones y mantenimiento integral de
                    equipos electrónicos.
                  </p>
                  <hr />
                  <p>
                    Instalar y programar redes electrónicas, asegurando su
                    correcto funcionamiento y configuración.
                  </p>
                  <hr />
                  <p>
                    Participar en emprendimientos selecciónando, asesorarndo y
                    comercializando equipos electrónicos.
                  </p>
                  <hr />
                  <p>
                    Aplicar tecnologías de vanguardia, como inteligencia
                    artificial, robótica y programación.
                  </p>
                  <hr />
                  <button>Descargar plan de estudos</button>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}
