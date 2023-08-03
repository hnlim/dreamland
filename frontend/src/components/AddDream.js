import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import submitButton from "../images/submit-button.png";

function GetAllEmotions({ value, onChange }) {
  const [APIdata, setAPIData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/emotions").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <select
      className="add__dream--input block"
      onChange={onChange}
      value={value}
      required
    >
      <option value="" disabled>
        どう感じたか？
      </option>
      {APIdata.map((data) => {
        return (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        );
      })}
    </select>
  );
}

export default function AddDream() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [emotionId, setEmotionId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/dreams", { date, title, content, emotionId })
      .then((response) => {
        console.log(response.data);
        window.location = "/";
      });
  };

  return (
    <div className="add__dream">
      <form className="add__dream--form" onSubmit={handleSubmit}>
        <input
          className="add__dream--input block"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
        <input
          className="add__dream--input block"
          type="text"
          value={title}
          placeholder="タイトル..."
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          className="add__dream--input block"
          type="text"
          value={content}
          placeholder="内容..."
          onChange={(event) => setContent(event.target.value)}
        ></input>
        <GetAllEmotions
          value={emotionId}
          onChange={(event) => setEmotionId(event.target.value)}
        />
        <button type="submit" className="button">
          <img width="30px" height="30px" src={submitButton} alt=""></img>
        </button>
      </form>
    </div>
  );
}
