import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import CharacterDetails from "./components/CharacterDetails";
import Council from "./components/Council";
import Header from "./components/Header";
import Graveyard from "./components/Graveyard";
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

  const handleGraveyard = () => {
    setView("graveyard");
  };

  return (
    <div className="App">
      <Header
        onCouncil={handelCouncil}
        onClickCharacter={handleCharacter}
        characters={characterData}
        onCharacterDetails={handleCharacterDetails}
        onGraveyard={handleGraveyard}
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
      {view === "graveyard" && <Graveyard characterData={characterData} />}
    </div>
  );
}

export default App;
