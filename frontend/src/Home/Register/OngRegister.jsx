import React, { useReducer } from "react";
import logoImg from "../../assets/logo.svg";
import { LinkWithTextIcon } from "../components/Links";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import IndexRouter from "../../IndexRouter/indexRouter";
import { ImgWithTitleAndDescription } from "../components/ImgComponents";
import useCreateOng from "./useCreateOng";
import { reducer, initialState, SET_ONG_FIELDS } from "./Reducer";
import "./style.css";

const styleInputUF = {
  width: 80
};

const OngRegister = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState());
  //create ong access
  const [postOng, [createOng, ongCreateError]] = useCreateOng({ ...state });

  const handleRegister = async e => {
    e.preventDefault();
    postOng();
    alert("Cadastrado com sucesso");
    history.push(IndexRouter.logon);
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <ImgWithTitleAndDescription
            img={logoImg}
            title="Cadastro"
            description="Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os grupos de A.A mais próximos de sua região."
          />

          <LinkWithTextIcon
            route={IndexRouter.logon}
            icon={<FaArrowLeft size={16} color="#E02041" />}
            text={"Voltar"}
          />
        </section>
        <form onSubmit={handleRegister}>
          <input
            onChange={e =>
              dispatch({
                type: SET_ONG_FIELDS,
                name: "name",
                value: e.target.value
              })
            }
            placeholder="Nome da ONG"
          />
          <input
            onChange={e =>
              dispatch({
                type: SET_ONG_FIELDS,
                name: "email",
                value: e.target.value
              })
            }
            type="email"
            placeholder="E-mail"
          />
          <input
            onChange={e =>
              dispatch({
                type: SET_ONG_FIELDS,
                name: "whatsapp",
                value: e.target.value
              })
            }
            placeholder="WhatsApp"
          />
          <div className="input-group">
            <input
              onChange={e =>
                dispatch({
                  type: SET_ONG_FIELDS,
                  name: "city",
                  value: e.target.value
                })
              }
              placeholder="Cidade"
            />
            <input
              onChange={e =>
                dispatch({
                  type: SET_ONG_FIELDS,
                  name: "uf",
                  value: e.target.value
                })
              }
              placeholder="UF"
              style={styleInputUF}
            />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default OngRegister;
