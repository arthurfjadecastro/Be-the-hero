import axios from "axios";
import { Ongs, Incidents } from "../config.json";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

//Ongs
const createOng = ong => {
  return api.post(Ongs.urlOngs, ong);
};

const createSession = ong => {
  return api.post(Ongs.urlSession, ong);
};

//Incidents
const getIncidents = () => {
  const ongId = localStorage.getItem("ongId");

  return api.get(Incidents.urlIncidents, {
    headers: {
      Authorization: ongId
    }
  });
};

const deleteIncident = async id => {
  const ongId = localStorage.getItem("ongId");
  console.log(Incidents.urlDeleteIncident + id);
  return await api.delete(Incidents.urlDeleteIncident + id, {
    headers: {
      Authorization: ongId
    }
  });
};

export default {
  createOng,
  createSession,
  getIncidents,
  deleteIncident
};
