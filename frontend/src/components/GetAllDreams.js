import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

function SingleDream({ id, date, title, emotionId }) {
  let backgroundColor;
  switch (emotionId) {
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
    <div className="dream__single block" style={{ backgroundColor }}>
      <Link to={`/${id}`}>
        <span className="dream__single--date">{date}</span>
        <h3 className="dream__single--title">{title}</h3>
      </Link>
    </div>
  );
}

export default function GetAllDreams() {
  const [APIdata, setAPIData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/dreams").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <section className="content">
      {APIdata.map((data) => {
        return (
          <SingleDream
            key={data.id}
            id={data.id}
            date={data.date}
            title={data.title}
            emotionId={data.emotionId}
          />
        );
      })}
    </section>
  );
}
