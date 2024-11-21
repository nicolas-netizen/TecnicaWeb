import React, { useState } from "react";
import logoTecnica1Chico from "../../icons/logoTecnica1Chico.png";
import logoConsulta from "../../icons/logoConsulta.png";
import "./NavBar.css";
import { Navigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import flechaNavbar from "../../icons/flechaNavbar.png";

const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const windowSize = React.useRef([window.innerWidth, window.innerHeight]);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1, // Ajusta el valor según sea necesario
  };

  function NavBarHidden() {
    return (
      <div
        className="navbar hidden w-full xl:block lg:w-auto"
        id="navbar-default"
      >
        <ul
          id="ulNavbar"
          className="text-xl font-semibold flex flex-col justify-center items-center p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <Popup
              trigger={(open) => (
                <button
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  La Institucion{" "}
                  <img
                    src={flechaNavbar}
                    style={{
                      width: "10px",
                      height: "10px",
                      marginTop: "10px",
                      marginLeft: "5px",
                      marginRight: "1vw",
                    }}
                    alt=""
                  />
                </button>
              )}
              position="bottom center"
              closeOnDocumentClick
            >
              <ul style={{ zIndex: "10000" }}>
                <li>
                  <a href="Historia">Historia</a>
                </li>
                <li>
                  <a href="Especialidades">Especialidades</a>
                </li>
                <li>
                  <a href="#">Biblioteca Virtual</a>
                </li>
              </ul>
            </Popup>
          </li>
          <li>
            <a
              href="Cooperadora"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
            >
              Cooperadora
            </a>
          </li>
          <li>
            <a
              href="Eventos"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
            >
              Noticias
            </a>
          </li>
          <li>
            <a
              href="Login"
              style={{ marginRight: "190px" }}
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
            >
              Intranet
            </a>
          </li>
          <li
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          >
            <a
              href="Consultas"
              className="bg-blue-600 block py-2 pl-3 pr-4 text-white hover:bg-blue-700 lg:border-0 lg:p-0"
              style={{
                display: "flex",
                alignItems: "center",
                height: "83px",
                fontSize: "18px",
                paddingRight: "10px",
                paddingLeft: "10px",
                marginTop: "-28px",
                marginRight: "-12px",
              }}
            >
              <img style={{ width: "55px" }} src={logoConsulta} alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ marginBottom: "-8px" }}>Envia tu</p>
                <p>consulta</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }

  function NavBarShown(props) {
    return (
      <div className="navbar w-full xl:block xl:w-auto" id="navbar-default">
        <ul
          id="ulNavbarSecond"
          className="font-medium flex flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="Cooperadora"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
            >
              Cooperadora
            </a>
          </li>
          <li>
            <a
              href="Historia"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
            >
              La institución
            </a>
          </li>
          <li>
            <a
              href="Especialidades"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
            >
              Especialidades
            </a>
          </li>
          <li>
            <a
              href="Eventos"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
            >
              Noticias
            </a>
          </li>
          <li>
            <a
              href="Login"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
            >
              Intranet
            </a>
          </li>
          <li>
            <a
              href="Consultas"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
            >
              Envia tu consulta
            </a>
          </li>
        </ul>
      </div>
    );
  }

  if (isActive) {
    return (
      <nav
        style={navStyle}
        className="navbar w-full bg-white border-gray-200 dark:bg-gray-900"
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center">
            <img
              src={logoTecnica1Chico}
              className="img-banner h-13 mr-3"
              alt="Flowbite Logo"
              href="/"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tecnica N°1 de Merlo
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            id="burgerButton"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="true"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <NavBarShown />
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        style={navStyle}
        className="navbar w-full bg-white border-gray-200 dark:bg-gray-900"
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-3">
          <a href="/" className="flex items-center">
            <img
              src={logoTecnica1Chico}
              className="img-banner h-13 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tecnica N°1 de Merlo
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            id="burgerButton"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="true"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <NavBarHidden />
        </div>
      </nav>
    );
  }
};

export default NavBar;
