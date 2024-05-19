import "./Player.css";
import back_arrow_icon from "../../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGRhYTA5YTBhOTE5YmIwZmNhNzE5ZDNjMTNiMjVmNiIsInN1YiI6IjY2NDkyNDY4ZGVjY2IyOGNjNDdjNzBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrB52jT9NEXlBbtecz9qEy066jSeVDmzk17OLgFSQ5Q",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img src={back_arrow_icon} onClick={()=>navigate("/")} alt="Back" />
      {apiData.key && (
        <iframe
          width="80%"
          height="900"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
      <div className="player-info">
        <p>
          Trailer name : <span>{apiData.name}</span>
        </p>
        <p>
          Url Key : <span>{apiData.key}</span>
        </p>
        <p>
          Published At : <span>{apiData.published_at.slice(0, 10)}</span>
        </p>
        <p>
          Video Type : <span>{apiData.type}</span>
        </p>
      </div>
    </div>
  );
}

export default Player;
