import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MapaFondo from "../../icons/MapaFondo.png";
import IconoAtencion from "../../icons/IconoAtencion.png";
import IconoEmail from "../../icons/IconoEmail.png";
import IconoUbicacion from "../../icons/IconoUbicacion.png";
import { useNavigate } from 'react-router-dom';
import "./gracias.css";

export function Gracias() {
    const navigate = useNavigate(); // Cambiado a useNavigate

    function redireccionarAEvento() {
        navigate("/Eventos"); // Cambiado a navigate
    }

    return (
        <>
            <NavBar />
            <div>
                <section id="Agradecimiento">
                    <section id="Primer-Contacto">
                        <img className="responsive-image" style={{ width: "100%" }} src={MapaFondo} alt="MapaFondo" />
                    </section>

                    <div id="Gracias">
                        <h1>¡Gracias por escribirnos!</h1>
                        <hr className="subrayado" />
                        <p className="Texto">
                            Un asesor de <span className="strong">La Técnica 1</span> te contactará pronto.
                        </p>
                        <p className="TextoNegrita">
                            Nuestros horarios de atención son de Lunes a Viernes de 09:00 a 21:30 hs y Sábados de 09:00 a 16:00 hs.
                        </p>
                    </div>
                </section>

                <section id="Info">
                    <div className="TextoAfuera Ptexto">
                        <p>Queremos que no te quedes afuera</p>
                    </div>

                    <div id="Afuera">
                        <div>
                            <img className="responsive-image" src={IconoAtencion} alt="IconoAtencion" />
                            <a href="tel:3646-4578" target="_blank" title="Visitar número">
                                <p>3646-4578</p>
                            </a>
                        </div>
                        <div>
                            <img className="responsive-image" src={IconoEmail} alt="IconoEmail" />
                            <a href="mailto:tecnica1merlo@abc.gob.ar" target="_blank" title="Visitar tecnica1merlo@abc.gob.ar">
                                <p>tecnica1merlo@abc.gob.ar</p>
                            </a>
                        </div>
                        <div>
                            <img className="responsive-image" src={IconoUbicacion} alt="IconoUbicacion" />
                            <p>Av. Calle Real 161, Merlo</p>
                        </div>
                    </div>
                </section>

                <section id="Visita">
                    <div className="TextoAfuera PTexto">
                        <h1>Visita nuestros eventos</h1>
                        <hr className="subrayado" />
                        <p>Mira una selección de trabajos de alumnos de carreras y cursos.</p>
                        <button onClick={redireccionarAEvento} style={{
                            backgroundColor: "blue",
                            height: "62px",
                            width: "152px",
                            color: "white",
                            borderRadius: "10px",
                        }}>Visitar</button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Gracias;
