import React, { useReducer } from "react";
import "./style.css";
import { ImgWithTitleAndDescription } from "../../Home/components/ImgComponents";
import { LinkWithTextIcon } from "../../Home/components/Links";
import IndexRouter from "../../IndexRouter/indexRouter";
import logoImg from "../../assets/logo.svg";
import { FaArrowLeft } from "react-icons/fa";
import { reducer, initialState, SET_NEW_INCIDENT_FIELDS } from "./Reducer";
import useCreateIncident from "./useCreateIncident";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
import { useDelayedEffect } from "../../Hooks";

const IncidentRegister = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState());
  const [postIncident, [response, error]] = useCreateIncident({ ...state });

  useDelayedEffect(() => {
    if (response !== null) {
      toast.success("😄 Cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => history.push(IndexRouter.incident)
      });
    }
  }, [response]);

  const handleCreateIncident = async e => {
    e.preventDefault();
    await postIncident();
  };

  return (
    <div className="new-incident-container">
      <div className="content">
        <ToastContainer></ToastContainer>
        <section>
          <ImgWithTitleAndDescription
            img={logoImg}
            title="Cadastrar novo caso"
            description="Cadastre um depoimento em prol de ajudar você e o próximo, repasse a palavra"
          />

          <LinkWithTextIcon
            route={IndexRouter.incident}
            icon={<FaArrowLeft size={16} color="#E02041" />}
            text={"Voltar"}
          />
        </section>
        <form onSubmit={handleCreateIncident}>
          <input
            onChange={e =>
              dispatch({
                type: SET_NEW_INCIDENT_FIELDS,
                value: e.target.value,
                name: "title"
              })
            }
            placeholder="Título do caso"
          />
          <textarea
            onChange={e =>
              dispatch({
                type: SET_NEW_INCIDENT_FIELDS,
                value: e.target.value,
                name: "description"
              })
            }
            placeholder="Descrição"
          />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncidentRegister;
