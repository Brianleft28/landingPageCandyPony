import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { BiLogoTiktok } from "react-icons/bi";
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
        <sectcion className='contenedor' id='servicio'>
          <h2 className='subtitulo'>Nuestro Servicio</h2>
          <div className='contenedor-servicio'>
            <img src={niños} alt='Imagen de Niño en Cumpleaños animada' />
            <div className='checklist-servicio'>
              <div className='service'>
                <h3 className='n-service'>
                  <span className='number'>1</span> Eventos de cumpleaños
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  aliquam consequatur excepturi sit facere accusamus tenetur,
                  sapiente dolorum sequi consectetur.
                </p>
              </div>
              <div className='service'>
                <h3 className='n-service'>
                  <span className='number'>2</span> Stand de Glitter
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  aliquam consequatur excepturi sit facere accusamus tenetur,
                  sapiente dolorum sequi consectetur.
                </p>
              </div>
              <div className='service'>
                <h3 className='n-service'>
                  <span className='number'>3</span> Sublimados
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  aliquam consequatur excepturi sit facere accusamus tenetur,
                  sapiente dolorum sequi consectetur.
                </p>
              </div>
            </div>
          </div>

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
        </sectcion>
      </main>

      <footer id='contacto'>
        <div className='contenedor footer-content'>
          <div className='contact-us'>
            <h2 className='brand font-semibold'>Candy Pony</h2>
            <p>Somos expertos en la creación de tu evento</p>
          </div>
          <div className='social-media'>
            <a href='./' className='social-media-icon'>
              <FaSquareFacebook />
            </a>
            <a href='./' className='social-media-icon'>
              <TiSocialInstagram />
            </a>
            <a href='./' className='social-media-icon'>
              <BiLogoTiktok />
            </a>
          </div>
        </div>
        <div className='line'></div>
      </footer>
    </>
  );
};
