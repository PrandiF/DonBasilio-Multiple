import React from 'react'
import "./HairdresserCard.scss"
import fabri1 from "./fabri1.jpg";


function HairdresserCard() {
  return (
    <div id="card">
      <img src={fabri1} className="profileImg" />
      <p className="name">Fabricio Zangrando</p>
    </div>
  );
}

export default HairdresserCard