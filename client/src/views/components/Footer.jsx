import React from "react";
import image5 from "../../icons/image 5.png";
import image6 from "../../icons/image 6.png";
import ubicacion from "../../icons/ubicacion.png";
import facebook from "../../icons/facebook-icon-white-png.png";
import { Navigate } from "react-router-dom";
import "./Footer.css";

export default function Footer(oscuro) {
  const navigateFacebook = () => {
    window.location.href = 'https://www.facebook.com/people/Educaci%C3%B3n-F%C3%ADsica-T%C3%A9cnica-1-Merlo/100070201712551/';
  };

  const navigateUbicacion = () => {
    window.location.href = 'https://maps.app.goo.gl/vpKa4auETsfWahA27';
  };
  if (oscuro.oscuro == true) {
    return (
      <>
        <div
          className="cuerpo oscuro"
          style={{
            display: "flex",
            alignItems: "center", 
          }}
        >
          <p>
            E.E.S.T N°1 MERLO | AV. CALLE REAL 161 | TEL: (0220) 482-5312 /
            485-1383 / 485-8185 | GMAIL: tecnica1merlo@abc.gob.ar
          </p>
          <div
            className="imagenes oscuro"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              onClick={ navigateUbicacion }
              style={{ cursor: "pointer" }}
              src={ubicacion}
              alt=""
            />
            <img
              onClick={ navigateFacebook }
              src={facebook}
              alt=""
              style={{
                height: "21px",
                width: "21px",
                marginLeft: "1vh",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className="cuerpo"
        >
          <p>
            E.E.S.T N°1 MERLO | AV. CALLE REAL 161 | TEL: (0220) 482-5312 /
            485-1383 / 485-8185 | GMAIL: tecnica1merlo@abc.gob.ar 
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="imagenes"
          >
            <img
              onClick={ navigateUbicacion }
              style={{ cursor: "pointer" }}
              src={image6}
              alt=""
            />
            <img
              onClick={ navigateFacebook }
              src={image5}
              alt=""
              style={{ marginLeft: "1vh", cursor: "pointer" }}
            />
          </div>
        </div>
      </>
    );
  }
}
