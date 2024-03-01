import { useState } from "react";
import "./Card.scss";

const PlayerCard = ({ img, name, statistics }) => {
  //!player CardContainer.jsx te, map ten object olarak olarak buraya geliyor. O yüzden karsilarken süslüyle bir tur dest. ediyrz. Bu nedenle diger propertyleri daha props u karsilarken dest. edemiyorz. Ancak asagidaki sekilde yapabilirz. Ya da parent componetten spread ile gönderiririz. Süslülerden ckarak childa gelir. Ancak bu sekilde props da dest. yaparak kullanabiliriz.
  //const { img, name, statistics, id } = player;

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
