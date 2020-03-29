import React, { useState, useEffect } from "react";
import logoImg from "../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import IndexRouter from "../IndexRouter/indexRouter";
import { FiPower, FiTrash2 } from "react-icons/fi";
import adminService from "../Network/AdminService/httpService";
import { ResponseError } from "../Hooks";
// import useIncidents from "./useIncidents";
import "./style.css";

const Incident = () => {
  const ongName = localStorage.getItem("ongName");
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);

  useEffect(async () => {
    const response = await adminService.getIncidents();
    if (response.status !== 200) {
      throw new ResponseError(
        `Erro ao obter os indcidentes: ${response.status}`
      );
    }

    setIncidents(response.data);
  }, []);

  const handleDeleteIncident = async id => {
    try {
      // await adminService.deleteIncident(id);
      // if (clinicDeleted) {
      //   setIncidents(incidents.filter(incident => incident.id !== id));
      // }
    } catch (err) {
      alert("Erro ao deletar caso, tenta novamente");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    // return <Link to="/" />;
    history.push(IndexRouter.incident);
  };

  // const [incidents, incidentsError] = useIncidents();

  // if (incidents !== null) {
  //   console.log(incidents);
  // }

  return (
    <>
      <div className="incident-container">
        <header>
          <img src={logoImg} alt="logoImg" />
          <span>Bem vindo ao {ongName}</span>
          <Link className="button" to={IndexRouter.newIncident}>
            Cadastrar novo caso
          </Link>

          <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos cadastrados</h1>
        <ul>
          {incidents.map(incident => {
            return (
              <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>
                <strong>{incident.title}</strong>
                <p>{incident.description}</p>
                <p>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(2500)}
                </p>
                <button
                  // onClick={handleDeleteIncident(incident.id)}
                  type="button"
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Incident;
