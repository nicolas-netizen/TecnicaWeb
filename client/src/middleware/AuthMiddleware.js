import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioService from "../services/UsuarioService";

const AuthMiddleware = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const verificarAutenticacion = async () => {
      try {
        const response = await UsuarioService.verificarAutenticacion();
        if (!response.data.autenticado) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error al verificar la autenticación:", error);
      }
    };

    verificarAutenticacion();
  }, [navigate]);

  return children;
};

export default AuthMiddleware;
