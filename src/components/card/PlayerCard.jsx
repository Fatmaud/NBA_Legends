import { useState } from "react";
import "./Card.scss";

const PlayerCard = ({ img, name, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="player-container" onClick={() => setShowImage(!showImage)}>
      {showImage ? (
        <div className="img-container">
          <img src={img} alt="" />
          <p>{name}</p>
        </div>
      ) : (
        <div className="statistics-container">
          <ul>
            {statistics.map((item, i) => (
              <li key={i}>
                {i === 0 ? "🏀" : i === 1 ? "🚩" : i === 2 ? "🤝" : "🏅"}
                {item}
              </li>
            ))}
          </ul>
          <p>{name}</p>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
