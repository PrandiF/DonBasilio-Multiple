import Reveal from "../Reveal";
import "./SacarTurno.scss";
import ModalCalendly from '../ModalCl/ModalCalendly';
import { peluqueros } from "./dataPeluqueros";
import { useState } from "react";

const SacarTurno = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section id="SACARTURNO">
      <img src='./BackgroundRustic.jpg' alt='imgS'className='imgBackground'/>
      <div className="textH2">
        <Reveal >
          <h2>- SACAR TURNO -</h2>
        </Reveal>
      </div>
      <div className="cards">
        {peluqueros.map((peluquero)=> (
          <div className="card">
            <img
              src={peluquero.foto}
              alt={peluquero.nombre}
              className="imgBackCard"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isHovered && (
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`infoHover ${isHovered ? 'visible' : ''}`}>
                <h3>{peluquero.nombre}</h3>
                <ModalCalendly url={peluquero.url} />
              </div>
            )}
        </div>
        ))}
      </div>
    </section>
  );
};
 
export default SacarTurno;
