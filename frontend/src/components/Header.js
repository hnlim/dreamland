import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function HeaderButton({ link, src, onClick }) {
  return (
    <Link to={link}>
      <button className="button" onClick={onClick}>
        <img width="30px" height="30px" src={src} alt=""></img>
      </button>
    </Link>
  );
}

export default function Header({
  title,
  buttonImage,
  buttonLink,
  bgColor,
  isEditable,
  onChange,
  onClick,
}) {
  return (
    <header className="header">
      {isEditable ? (
        <input
          className="header__title"
          type="text"
          value={title}
          onChange={onChange}
          style={bgColor}
        ></input>
      ) : (
        <h1 className="header__title" style={bgColor}>
          {title}
        </h1>
      )}
      <HeaderButton link={buttonLink} src={buttonImage} onClick={onClick} />
    </header>
  );
}
