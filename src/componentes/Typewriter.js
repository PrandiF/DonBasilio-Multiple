import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'DONDE LA ELEGANCIA SE ENCUENTRA CON LA INNOVACION.',
        1500,
        'UN LUGAR DEDICADO A LA IMAGEN DE ELLOS.',
        1500
      ]}
      wrapper='span'
      speed={60}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
