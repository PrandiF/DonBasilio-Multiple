import './SobreMi.scss'
import React from 'react'
import Reveal from '../Reveal';

const SobreMi = () => {
  return (
    <section id='SOBREMI'>
        <div className='fix'>
            <div className='cardSM'>
              <h2>- SOBRE MI -</h2>
              <div>
                <Reveal>
                  <p>
                    Mi nombre es <span>Alan Muñoz</span> y tengo 28 años. Soy un peluquero con experiencia y pasión por mi trabajo.
                    Desde hace 9 años, he estado cortando el pelo en <span>Darregueira</span>, un pequeño pueblo de la provincia de Buenos Aires en Argentina.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    La peluquería donde trabajo es más que un simple negocio para mí. Es un espacio donde puedo ejercer mi creatividad y habilidades para crear peinados y cortes personalizados para cada cliente.
                    Me encanta hablar con mis clientes mientras les corto el pelo y conocer sus historias y experiencias de vida. Muchas veces, estas conversaciones se convierten en amistades duraderas.
                  </p>
                </Reveal>
                <div className='pDisplay'>
                  <Reveal>
                    <p>
                      Además de ser un peluquero en Darregueira, también he participado en eventos de moda y peluquería en toda la provincia, lo que me ha permitido expandir mis habilidades y mantenerme actualizado con las últimas tendencias y estilos.
                    </p>
                  </Reveal>
                </div>
                <Reveal>
                  <p>
                    Cortar el pelo es mi pasión y me enorgullece poder hacer mi trabajo con excelencia en Darregueira. No solo estoy agradecido por tener una clientela fiel, sino que también disfruto de la sensación de ser parte de una comunidad unida.
                    Espero seguir creciendo como peluquero y seguir cortando el pelo en Darregueira por muchos años más.
                  </p>
                </Reveal>   
              </div>
              
            </div>
        </div>
        
    </section>
  )
}

export default SobreMi