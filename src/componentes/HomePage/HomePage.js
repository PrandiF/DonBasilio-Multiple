import './HomePage.scss'
import Reveal from '../Reveal';
import Typewriter from '../Typewriter';
import ModalCl from '../ModalCl/ModalClients';

const HomePage = () =>{
    return(
        <section id='HOME'>
            <div className='div-img'>
                <img src='./IMG_3330.webp' alt='imgS'className='imgS'/>
                <img src='./IMG_3331.webp' alt='imgS'className='imgResponsive'/> 
            </div>
            <Reveal>
                <div className='sm-content'>
                    <div className='content-left'>
                        <div className='typewriter'>
                            <div className='title'>
                                <h1 className='don'>DON</h1>
                                <h1 className='basilio'>BASILIO</h1>
                            </div>
                            <div className='responsiveDesktop'>
                                <Typewriter />
                            </div>
                            <div className='responsiveMobile'>
                                <h3>
                                    UN LUGAR DEDICADO A LA IMAGEN DE ELLOS.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='content-right'>
                        <a data-scroll="SACARTURNO" href="#SACARTURNO" className="active button2">
                            SACAR TURNO
                        </a>
                        <ModalCl />
                    </div>
                </div>
            </Reveal>
            
        </section>
    )
}

export default HomePage