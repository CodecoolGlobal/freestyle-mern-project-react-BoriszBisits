import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import Council from "./components/Council";
import Header from "./components/Header";
import Dragonfire from "./components/Dragondfire";
import "./App.css";

function App() {
  const [characterData, setCharacterData] = useState(null);
  const [character, setCharacter] = useState(null);
  const [view, setView] = useState("characters");

  const getData = async () => {
    fetch("/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacterData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function handleAddMemberToCouncil(addMember) {
    fetch(`/api/council/${addMember.name}`, { method: "POST" });
    addMember.councilMember = true;
    setView("council");
  }

  function handleKill(character) {
    character.isAlive = false;
    fetch(`/api/character/${character.name}`, { method: "POST" });
    setView("characters");
  }
  
  function renderDeathByFire(character){
    character.isAlive = false;
    setView("characters");

  }

  const handleCharacterDetails = (character) => {
    setCharacter(character);
    setView("characterDetails");
  };

  const handelCouncil = () => {
    setView("council");
  };

  const handleCharacter = () => {
    setView("characters");
  };
  const handleDragonFire = () => {
    setView("dragonfire");
  };

  return (
    <div className="App">
      <Header
        onDragonfire={handleDragonFire}
        onCouncil={handelCouncil}
        onClickCharacter={handleCharacter}
        characters={characterData}
        onCharacterDetails={handleCharacterDetails}
      />
      {view === "characters" && characterData && (
        <Characters
          characters={characterData}
          onCharacterDetails={handleCharacterDetails}
        />
      )}
      {view === "characterDetails" && (
        <CharacterDetails
          character={character}
          onAddMemberToCouncil={handleAddMemberToCouncil}
          onKill={handleKill}
        />
      )}
      {view === "council" && (
        <Council characters={characterData} onKill={handleKill} />
      )}
      {view === "dragonfire" && (
        <Dragonfire characters={characterData}  renderDeathByFire={renderDeathByFire}  onCharacterDetails={handleCharacterDetails} />
      )}
    </div>
  );
}

export default App;
