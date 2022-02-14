import React from "react";

const CardMonster = ({ monster }) => {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img src={`https://robohash.org/${monster.id}set=set2`} />
        </div>
        <div className="content center aligned">
          <div className="header">{monster.name}</div>
          <div className="description">{monster.email} </div>
        </div>
      </div>
    </div>
  );
};

export default CardMonster;
