/* img */
import minnie from "../assets/minnie.jpeg";
import cars from "../assets/cars.jpeg";
import vaca from "../assets/vacalola.jpeg";
import sophia from "../assets/princesa.jpeg";
import spiderman from "../assets/spiderman.jpg";
import roblox from "../assets/roblox.jpeg";
import niños from "../assets/niños.png";
import { IoClose } from "react-icons/io5";
/* Experts img */
import economia from "../assets/economia.png";
import logistica from "../assets/logistica.png";
import creatividad from "../assets/creatividad.png";
import { Service } from "../components/Service";

export const Home = () => {
  return (
    <>
      {/* Head */}
      <header className='header' id='inicio'>
        <div className='contenedor head'>
          <h1 className='title'>Convertimos tus sueños en realidad</h1>
          <p className='copy'>Servicio de evento Candy Pony</p>
        </div>
      </header>
      {/* Comienzo de Main */}
      <main>
        {/* Servicios */}
        <section className='contenedor' id='servicio'>
          <h2 className='subtitulo'>Nuestro Servicio</h2>
          <div className='contenedor-servicio'>
            <img src={niños} alt='Imagen de Niño en Cumpleaños animada' />
            <div className='checklist-servicio'>
              <Service
                p={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam consequatur excepturi sit facere accusamus tenetur, sapiente dolorum sequi consectetur."
                }
                number={"1"}
                h3={"Eventos"}
              />
              <Service
                p={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam consequatur excepturi sit facere accusamus tenetur, sapiente dolorum sequi consectetur."
                }
                number={"2"}
                h3={"Stand de Glitter"}
              />
              <Service
                p={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam consequatur excepturi sit facere accusamus tenetur, sapiente dolorum sequi consectetur."
                }
                number={"3"}
                h3={"Sublimados"}
              />
            </div>
          </div>
          {/* Galeria */}
          <section className='gallery' id='portafolio'>
            <div className='contenedor'>
              <h2 className='subtitulo'>Galeria</h2>
              <div className='contenedor-galeria'>
                <img src={cars} alt='Cars' className='img-galeria' />
                <img src={minnie} alt='Maya y el Oso' className='img-galeria' />
                <img src={vaca} alt='Vaca lola' className='img-galeria' />
                <img src={sophia} alt='Pool Party' className='img-galeria' />
                <img src={spiderman} alt='Spiderman' className='img-galeria' />
                <img src={roblox} alt='Roblox' className='img-galeria' />
              </div>
            </div>
          </section>

          <section className='imagen-light'>
            <IoClose color='white' className='close' />
            <img src={cars} alt='asd' className='agregar-imagen' />
          </section>
          {/* Expertos en */}
          <section className='contenedor' id='expertos'>
            <h2 className='subtitulo'>Expertos en:</h2>
            <section className='experts'>
              <div className='cont-experts'>
                <img src={creatividad} alt='Logo de Creatividad' />
                <h3 className='n-expert font-semibold'>Creatividad</h3>
              </div>
              <div className='cont-experts'>
                <img src={logistica} alt='Logo de Logistica' />
                <h3 className='n-expert font-semibold'>Logística</h3>
              </div>
              <div className='cont-experts'>
                <img src={economia} alt='Logo de Economia' />
                <h3 className='n-expert font-semibold'>Cuidar tu economia</h3>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};
