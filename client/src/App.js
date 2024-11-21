import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./views/components/NavBar";
import HomePage from "./views/home/HomePage";
import PageHistoria from "./views/historia/Historia";
import { PageCoperadora } from "./views/cooperadora/cooperadora";
import { PageEspecialidades } from "./views/especialidades/especialidades";
import { PageEventos } from "./views/eventos/Eventos";
import PageConsultas from "./views/Contacto/Contacto";
import PageGracias from "./views/gracias/gracias";
import PageIntranet from "./views/intranet/Intranet";
import PageLogin from "./views/login/Login";
import ScrollToTop from "./views/components/scrollToTop";
import PageUsuarios from "./views/listaUsuarios/ListaUsuarios";
import PageTarjetas from "./views/listaTarjetas/ListaTarjetas";
import PageAñadirUsuario from "./views/añadirUsuario/AñadirUsuario";
import PageAñadirTarjeta from "./views/añadirTarjeta/AñadirTarjeta";
import PageUsuarioEdit from "./views/listaUsuarios/Usuario.jsx";
import PageTarjetaEdit from "./views/listaTarjetas/Tarjeta.jsx";
import React from "react";

function App() {
  let user;

  function PrivateRoute() {
    try {
      user = JSON.parse(localStorage.getItem("user"));
    } catch {
      console.log("ERROR");
    }
    console.log(user);
    return user ? <Outlet /> : <Navigate to="/login" replace />;
  }

  function EsSuperUsuario() {
    try {
      user = JSON.parse(localStorage.getItem("user"));
    } catch {
      console.log("ERROR");
    }
    console.log(user);
    return user.esSuperUsuario ? (
      <Outlet />
    ) : (
      <Navigate to="/intranet" replace />
    );
  }

  function AnonymousRoute() {
    localStorage.removeItem("user");
    return <Outlet />;
  }

  return (
    <Router>
      <ScrollToTop />
      {/* {user ? <button>Sign Out</button> : <button>Sign In</button>} */}
      <Routes>
        <Route element={<AnonymousRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="Historia" element={<PageHistoria />} />
          <Route path="Especialidades" element={<PageEspecialidades />} />
          <Route path="Cooperadora" element={<PageCoperadora />} />
          <Route path="Eventos" element={<PageEventos />} />
          <Route path="Consultas" element={<PageConsultas />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="Gracias" element={<PageGracias />} />
          <Route path="*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="Intranet" element={<PageIntranet />} />
          <Route path="Tarjetas" element={<PageTarjetas />} />
          <Route path="AñadirTarjeta" element={<PageAñadirTarjeta />} />
          <Route path="/Tarjetas/:id" element={<PageTarjetaEdit />} />
          <Route element={<EsSuperUsuario />}>
            <Route path="Usuarios" element={<PageUsuarios />} />
            <Route path="AñadirUsuario" element={<PageAñadirUsuario />} />
            <Route path="/Usuarios/:id" element={<PageUsuarioEdit />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
