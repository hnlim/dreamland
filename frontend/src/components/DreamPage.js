import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import Header from "./Header";
import closeButton from "../images/close-button.png";

function DeleteDream({ id, bgColor }) {
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3001/dreams/${id}`)
      .then((window.location = "/"));
  };
  return (
    <button
      className="delete__dream--button block"
      onClick={handleClick}
      style={bgColor}
    >
      削除
    </button>
  );
}

function EditDream({ isEditable, onEditClick, onDoneClick, bgColor }) {
  const handleClick = () => {
    if (isEditable) {
      if (onDoneClick) {
        onDoneClick();
      }
    } else {
      if (onEditClick) {
        onEditClick();
      }
    }
  };
  return (
    <button
      className="edit__dream--button block"
      onClick={handleClick}
      style={bgColor}
    >
      {isEditable ? "完了" : "編集"}
    </button>
  );
}

export default function DreamPage() {
  const dreamData = useLoaderData();
  const [title, setTitle] = useState(dreamData.title);
  const [content, setContent] = useState(dreamData.content);
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleDoneClick = () => {
    axios
      .put(`http://localhost:3001/dreams/${dreamData.id}`, { title, content })
      .then((response) => {
        console.log(response.data);
        setIsEditable(false);
      });
  };

  let backgroundColor;
  switch (dreamData.emotionId) {
    case 1:
      // happy
      backgroundColor = "#F4FF73";
      break;
    case 2:
      // sad
      backgroundColor = "#73CDFF";
      break;
    case 3:
      // angry
      backgroundColor = "#FF6341";
      break;
    default:
      backgroundColor = "#ebebeb";
  }

  return (
    <div className="wrapper">
      <Header
        title={title}
        buttonImage={closeButton}
        buttonLink={`/`}
        bgColor={{ backgroundColor }}
        isEditable={isEditable}
        onChange={(event) => setTitle(event.target.value)}
      />
      <section className="content">
        <div
          className="dream__page"
          style={{ boxShadow: `inset 0px 0px 50px 10px ${backgroundColor}` }}
        >
          <span className="dream__page--date">{dreamData.date}</span>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="dream__page--content"
            readOnly={!isEditable}
          ></textarea>
        </div>
      </section>
      <footer className="footer">
        <EditDream
          isEditable={isEditable}
          onEditClick={handleEditClick}
          onDoneClick={handleDoneClick}
          bgColor={{ backgroundColor }}
        />
        <DeleteDream id={dreamData.id} bgColor={{ backgroundColor }} />
      </footer>
    </div>
  );
}
