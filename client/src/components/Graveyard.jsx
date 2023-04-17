import React, { useState } from "react";

function Graveyard({ characterData }) {
  const [deadCharacters, setdeadCharacters] = useState(characterData);

  function resurrectCharacter(id) {
    fetch(`/api/graveyard/?ressurectCharacterId=${id}`, {
      method: "PATCH",
    });
    updateCharacterData(id);
  }

  function updateCharacterData(id) {
    characterData.map((element) => {
      if (element._id === id) {
        element.isAlive = true;
        setdeadCharacters([...characterData]);
    }
});
  }

  return (
    <div>
      {deadCharacters &&
        deadCharacters.map(
          (character) =>
            !character.isAlive && (
              <h1 key={character._id}>
                {character.name}
                <button
                  onClick={() => {
                    resurrectCharacter(character._id);
                  }}
                >
                  Resurrect
                </button>
              </h1>
            )
        )}
    </div>
  );
}

export default Graveyard;
