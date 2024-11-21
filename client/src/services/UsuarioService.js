import http from "../http-common";

const getAll = () => {
  return http.get("/usuarios");
};

const get = (id) => {
  return http.get(`/usuarios/${id}`);
};

const create = (data) => {
  return http.post("/usuarios", data);
};

const update = (id, data) => {
  return http.put(`/usuarios/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/usuarios/${id}`);
};

const removeAll = () => {
  return http.delete(`/usuarios`);
};

const findByNombre = (nombre) => {
  return http.get(`/usuarios?nombre=${nombre}`);
};

const verificarUsuario = (nombre, contraseña) => {
  return http.get(
    `/usuarios/verificarUsuario?nombre=${nombre}&contraseña=${contraseña}`
  );
};
const UsuarioService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByNombre,
  verificarUsuario,
};

export default UsuarioService;
