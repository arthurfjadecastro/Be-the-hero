import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LinkWithTextIcon = props => {
  const { route, icon, text } = props;
  return (
    <Link to={route}>
      {icon}
      <label>{text}</label>
    </Link>
  );
};

export default LinkWithTextIcon;
