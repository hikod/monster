import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import CardList from "./components/CardList";

const App = () => {
  const [monsterList, setMonsterList] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";
  const fetchData = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMonsterList(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ui container">
      <Search filteredMonsters={filteredMonsters} monsters={monsterList} />
      <CardList monsters={monsterList} />
    </div>
  );
};
export default App;
