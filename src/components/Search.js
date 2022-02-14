import React, { useState } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const filteredMonsters = () => {
    props.monsters.filter((monster) => {
      monster.name.toLowerCase().includes(term.toLowerCase());
    });
  };
  return (
    <div className="ui icon input" style={{ margin: "1em auto" }}>
      <i className="search icon"></i>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Monsters"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        filteredMonsters={() => filteredMonsters()}
      />
    </div>
  );
};
export default Search;
