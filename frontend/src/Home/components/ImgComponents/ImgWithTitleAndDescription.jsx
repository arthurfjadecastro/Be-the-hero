import React from "react";
import "./style.css";

const ImgWithTitleAndDescription = props => {
  const { img, title, description } = props;
  return (
    <>
      <img src={img} alt="logoImg" />
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default ImgWithTitleAndDescription;
