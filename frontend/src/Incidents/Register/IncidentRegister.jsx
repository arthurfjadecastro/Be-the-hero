import React from "react";
import "./style.css";
import { ImgWithTitleAndDescription } from "../../Home/components/ImgComponents";
import { LinkWithTextIcon } from "../../Home/components/Links";
import IndexRouter from "../../IndexRouter/indexRouter";
import logoImg from "../../assets/logo.svg";
import { FaArrowLeft } from "react-icons/fa";

const IncidentRegister = () => {
  return (
    <div className="new-incident-container">
      <div className="content">
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
        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncidentRegister;
