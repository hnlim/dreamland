import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import GetAllDreams from "./components/GetAllDreams";
import addButton from "./images/add-button.png";
import closeButton from "./images/close-button.png";

export default function App() {
  const [toggleAdd, setToggleAdd] = useState(false);

  const handleClick = () => {
    setToggleAdd((current) => !current);
  };

  return (
    <>
      <div>
        <Outlet />
      </div>
      {toggleAdd ? (
        <Header
          title="ドリームランド"
          buttonImage={closeButton}
          buttonLink={`/`}
          isEditable={false}
          onClick={handleClick}
        />
      ) : (
        <Header
          title="ドリームランド"
          buttonImage={addButton}
          buttonLink={`/add`}
          isEditable={false}
          onClick={handleClick}
        />
      )}

      <GetAllDreams />
    </>
  );
}
