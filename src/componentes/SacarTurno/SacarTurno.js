import Reveal from "../Reveal";
import "./SacarTurno.scss";
import ModalCalendly from '../ModalCl/ModalCalendly';
import { peluqueros } from "./dataPeluqueros";
import { useState } from "react";

const SacarTurno = () => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = (index) => {
    setIsHovered(index);
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
        {peluqueros.map((peluquero, index)=> (
          // <div onMouseEnter={() => handleCardSelect(index)} onMouseLeave={() => handleCardSelect(null)} className={`${cardSelect === null ? 'cardVisible' : cardSelect === index ? 'cardVisible' : 'cardHidden'}`} key={index}>
          <div className={`${isHovered === null ? 'cardVisible' : isHovered === index ? 'cardVisible' : 'cardHidden'}`} key={index}>
            <img
              src={peluquero.foto}
              alt={peluquero.nombre}
              className="imgBackCard"
              onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(null)}
            />
            <div onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(null)} className={`${isHovered === index ? 'infoHoverVisible'  : 'infoHoverHidden'}`}>
              <h3>{peluquero.nombre}</h3>
              <ModalCalendly url={peluquero.url} />
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};
 
export default SacarTurno;
