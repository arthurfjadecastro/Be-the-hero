import React, { useState, useEffect } from "react";
import logoImg from "../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import IndexRouter from "../IndexRouter/indexRouter";
import { FiPower, FiTrash2 } from "react-icons/fi";
import useIncidents from "./useIncidents";
import useDeleteIncident from "./useDeleteIncident";
import { useDelayedEffect, useIf } from "../Hooks";
import { toast } from "react-toastify";
import "./style.css";

const Incident = () => {
  const ongName = localStorage.getItem("ongName");
  const history = useHistory();
  // const [incidents, setIncidents] = useState([]);
  const [incidents, incidentsError] = useIncidents();
  const [incidentsAfterDelete, setIncidentsAfterDelete] = useState([]);
  const [deleteIncident, [response, error]] = useDeleteIncident();

  useDelayedEffect(() => {
    setIncidentsAfterDelete(incidents);
  }, [incidents]);

  const handleDeleteIncident = id => {
    const foo = incidentsAfterDelete.filter(incident => incident.id !== id);
    setIncidentsAfterDelete(foo);
    deleteIncident(id);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push(IndexRouter.logon);
  };

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
          {incidentsAfterDelete.map(incident => {
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
                  onClick={() => handleDeleteIncident(incident.id)}
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
