import React from "react";
import CardMonster from "./CardMonster";

const CardList = ({ monsters }) => {
  return (
    <div className="ui four column grid ">
      {monsters.map((item) => {
        return <CardMonster key={item.id} monster={item} />;
      })}
    </div>
  );
};
export default CardList;
