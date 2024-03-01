import React, { useState } from "react";
import { data } from "../../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <form className="input-container">
        <input
          type="search"
          placeholder="Search Player..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="card-container">
        {data
          .filter((a) =>
            a.name.toLowerCase().includes(search.trim().toLowerCase())
          )
          .map((player, index) => {
            return <PlayerCard key={index} {...player} />;
          })}
      </div>
    </>
  );
};

export default CardContainer;
