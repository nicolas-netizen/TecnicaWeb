import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MapaFondo from "../../icons/MapaFondo.png";
import IconoTelefono from "../../../src/icons/IconoTelefono.png";
import IconoEmail from "../../../src/icons/IconoEmail.png";
import IconoAtencion from "../../../src/icons/IconoAtencion.png";
import IconoUbicacion from "../../../src/icons/IconoUbicacion.png";
import "./contacto.css";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [prefijo, setPrefijo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [motivo, setMotivo] = useState("");


  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.contacvalue);
  };

  

  return (
    <>
      <NavBar />
      <div>
        <section id="Primer-Contacto">
          <img style={{ width: "100%" }} src={MapaFondo} alt="Mapa" />
        </section>

        <section id="Primer-Segundo-Contacto">
          <div className="Texto">
            <div className="Titulo-contac">
              <h1>Contacto</h1>
              <hr className="subrayado" />
            </div>
            <p>
              Para contactarte con nuestro equipo de informes e inscripciones
              por favor utiliza el formulario o los teléfonos que se indican a
              continuación. Uno de nuestros asesores te contestará a la
              brevedad. También encontrarás abajo la ubicación de la institución
              en caso de querer realizar la consulta físicamente y ver
              personalmente con el colegio.
            </p>
          </div>
        </section>

        <section id="Segundo-Contacto">
          <div id="Cuadro-Llamanos">
            <div className="Llamanos">
              <p
                style={{
                  color: "white",
                  fontSize: "35px",
                  marginBottom: "5px",
                }}
              >
                LLamanos
              </p>
              <hr className="subrayado" />
            </div>

            {[
              {
                icon: IconoTelefono,
                title: "Dirección",
                phone: " 11 3346-4578",
              },
              {
                icon: IconoTelefono,
                title: "Preceptoria",
                phone: "11 3646-4578",
              },
              {
                icon: IconoEmail,
                title: "Email",
                email: "tecnica1merlo@abc.gob.ar",
              },
              {
                icon: IconoAtencion,
                title: "Atención",
                schedule:
                  "Lunes a Viernes de 09:00 a 21:30 hs Sábados de 09:00 a 16:00 hs",
              },
              {
                icon: IconoUbicacion,
                title: "Ubicación",
                location:
                  "Av.Calle Real 161, Merlo, Prov. de Buenos Aires CP 1722",
              },
            ].map((info, index) => (
              <div className="container-info" key={index}>
                <img style={{ width: "70px" }} src={info.icon} alt={info.title} />
                <div className="text">
                  <p className="titulos-llamanos">{info.title}:</p>
                  {info.phone && (
                    <a
                      href={`tel:${info.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visitar número de ${info.title}`}
                    >
                      <p className="texto">{info.phone}</p>
                    </a>
                  )}
                  {info.email && (
                    <a
                      href={`mailto:${info.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visitar ${info.email}`}
                    >
                      <p className="texto">{info.email}</p>
                    </a>
                  )}
                  {info.schedule && <p>{info.schedule}</p>}
                  {info.location && <p>{info.location}</p>}
                </div>
              </div>
            ))}
          </div>

          <div id="Cuadro-Preguntas">
            <form action="https://formsubmit.co/tecnica1merlo@abc.gob.ar"method="POST"
            > 
              <div className="nombre-apellido-contenedor">
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={nombre}
                  name="nombre"
                  onChange={(event) => handleInputChange(event, setNombre)}
                  style={{
                    height: "75px",
                    width: "49%",
                    borderRadius: "10px",
                  }}
                />

                <input
                  type="text"
                  placeholder="Ingresa tu Apellido"
                  value={apellido}
                  name="apellido"
                  onChange={(event) => handleInputChange(event, setApellido)}
                  style={{
                    height: "75px",
                    width: "49%",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div className="email-prefijo-telefono">
                <input
                  type="email"
                  placeholder="Ingresa tu Email" required
                  value={email}
                  name="email"
                  onChange={(event) => handleInputChange(event, setEmail)}
                  style={{
                    height: "75px",
                    width: "49%",
                    borderRadius: "10px",
                  }}
                />

                <input
                  type="text"
                  placeholder="Prefijo"
                  value={prefijo}
                  name="Prefijo"
                  onChange={(event) => handleInputChange(event, setPrefijo)}
                  style={{
                    height: "75px",
                    width: "14%",
                    borderRadius: "10px",
                  }}
                />

                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={telefono}
                  name="Telefono"
                  onChange={(event) => handleInputChange(event, setTelefono)}
                  style={{
                    height: "75px",
                    width: "32.5%",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div>
                <textarea
                  name="motivo"
                  cols="30"
                  rows="10"
                  placeholder="Motivo de consulta"
                  value={motivo}
                  onChange={(event) => handleInputChange(event, setMotivo)}
                  className="textareaContacto"
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "blue",
                  height: "62px",
                  width: "152px",
                  color: "white",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                Enviar
              </button>
              <input type="hidden" name="_autoresponse" value="Gracias por comunicarte. Te contactaremos pronto."></input>
              <input
                  type="hidden"
                  name="_template"
                  value="table"
                />
              <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:8081/gracias"
                />
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
