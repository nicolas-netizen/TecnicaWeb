import "./intranet.css";
import React from "react";
import NavBarIntranet from "../components/NavBarIntranet";

export default function Intranet() {
  const [usuario, setUsuario] = React.useState("");

  React.useEffect(() => {
    setUsuario(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <NavBarIntranet />
      <div
        style={{
          width: "100vw",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "50px",
            marginBottom: "10px",
            maxWidth: "40%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <h2 style={{ fontSize: "30px" }}>
            Bienvenido a la consola,{" "}
            <span style={{ fontWeight: "600" }}>{usuario.nombre}</span>
          </h2>
          <p>
            Desde esta consola o panel de control se pueden crear, editar,
            visualizar y borrar usuarios y tarjetas. Los usuarios son
            administradores de la página que pueden acceder a esta consola para
            actualizarla y las tarjetas representan dos elementos cruciales de
            la página: las noticias o eventos del colegio y los informes de la
            cooperadora. Puede acceder a las diferentes funcionalidades del
            panel de control desde la barra de navegación en la parte superior
            de la página. Tenga en cuenta que{" "}
            <span style={{ fontWeight: "600" }}>
              solo super usuarios tienen los permisos requeridos para
              administrar otros usuarios
            </span>
            .
          </p>
          <p style={{ marginTop: "10px" }}>
            <span style={{ fontWeight: "600" }}>
              Instrucciones para crear un usuario o tarjeta:
            </span>{" "}
            Desde la barra de navegación, haga click en "añadir usuario" o
            "añadir tarjeta" respectivamente. Llene el formulario con los datos
            necesarios y haga click en "crear". Si todo salió correctamente,
            debería aparecer un popup explicando que se creó el usuario/tarjeta.
            Si no aparece el popup y tampoco se creó el usuario/tarjeta, intente
            otra vez unos minutos más tarde (es posible que la conexion con el
            servidor sea lenta).
          </p>
          <p style={{ marginTop: "10px" }}>
            <span style={{ fontWeight: "600" }}>
              Instrucciones para editar un usuario o tarjeta:
            </span>{" "}
            Desde la barra de navegación, haga click en "Lista usuario" o "Lista
            tarjeta" respectivamente. Ambas páginas son parecidas, un con
            buscador y una lista ordenada de usuarios/tarjetas. Para lograr una
            experiencia más intuitiva, los usuarios, las tarjetas de noticias y
            las tarjetas de informes de cooperadora tienen colores diferentes.
            Puede seleccionar cualquiera de estos usuarios/tarjetas haciendo
            click sobre el mismo, lo que despliega información adicional y la
            capacidad de editar el objeto. Si le da click al botón de "Editar",
            se desplegá una página con todos los datos del usuario/tarjeta.
            Realice los cambios necesarios y apriete "Actualizar" para guardar
            los cambios
          </p>
          <p style={{ marginTop: "10px" }}>
            <span style={{ fontWeight: "600" }}>
              Instrucciones para borrar un usuario o tarjeta:
            </span>{" "}
            Siga las instrucciones especificadas para editar un usuario o
            tarjeta, pero en vez de apretar "Actualizar" apriete "Borrar".
          </p>
        </div>
      </div>
    </>
  );
}
