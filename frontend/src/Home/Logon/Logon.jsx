import React, { useReducer } from "react";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FaSignInAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { LinkWithTextIcon } from "../components/Links";
import IndexRouter from "../../IndexRouter/indexRouter";
import { reducer, initialState, SET_ID_FIELD } from "./Reducer";
import useCreateSession from "./useCreateSession";

const Logon = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState());
  const [postSession, [response, error]] = useCreateSession({
    ...state
  });

  const handleLogin = e => {
    e.preventDefault();
    postSession();
  };

  if (response !== null) {
    if (response && response.data.name) {
      localStorage.setItem("ongId", state.id);
      localStorage.setItem("ongName", response.data.name);
      history.push(IndexRouter.incident);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logoImg" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Sua ID"
            onChange={e =>
              dispatch({
                type: "SET_ID_FIELD",
                value: e.target.value,
                name: "id"
              })
            }
          />
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
        <LinkWithTextIcon
          route={IndexRouter.newOng}
          icon={<FaSignInAlt size={16} color="#E02041" />}
          text={"Não tenho cadastro"}
        />
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Logon;
