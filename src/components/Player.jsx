import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handelEditing = e => {
    setIsEditing(editing => !editing);
    // console.log(isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChange = e => {
    setPlayerName(e.target.value);
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={e => handelEditing(e)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
