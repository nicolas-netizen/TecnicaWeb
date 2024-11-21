import http from "../http-common";

const getAll = () => {
  return http.get("/tarjetas");
};

const get = (id) => {
  return http.get(`/tarjetas/${id}`);
};

const create = (data) => {
  return http.post("/tarjetas", data);
};

const update = (id, data) => {
  return http.put(`/tarjetas/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/tarjetas/${id}`);
};

const removeAll = () => {
  return http.delete(`/tarjetas`);
};

const findByTitle = (titulo) => {
  return http.get(`/tarjetas?titulo=${titulo}`);
};

const TarjetaService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TarjetaService;
