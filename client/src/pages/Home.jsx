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
/* import { IoClose } from "react-icons/io5"; */

export const Home = () => {
  return (
    <>
      {/* Head */}
      <header className='header' id='inicio'>
        <div className='contenedor head'>
          <h1>Candy Pony</h1>
          <p className='copy'>Convertimos tus sueños en realidad</p>
        </div>
      </header>
      {/* Comienzo de Main */}
      <main>
        {/* Servicios */}
        <section className='services contenedor' id='servicio'>
          <h2 className='subtitulo'>Nuestro Servicio</h2>
          <div className='contenedor-servicio'>
            <img src={niños} alt='Imagen de Niño en Cumpleaños animada' />
            <div className='checklist-servicio'>
              <div className='service'>
                <h3 className='n-service'>
                  <span className='number'>1</span>Eventos de cumpleaños
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  aliquam consequatur excepturi sit facere accusamus tenetur,
                  sapiente dolorum sequi consectetur.
                </p>
              </div>
              <div className='service'>
                <h3 className='n-service'>
                  <span className='number'>2</span>Stand de Glitter
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  aliquam consequatur excepturi sit facere accusamus tenetur,
                  sapiente dolorum sequi consectetur.
                </p>
              </div>
              <div className='service'>
                <h3 className='n-service'>
                  <span className='number'>3</span>Sublimados
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
          {/*  <section className='imagen-light'>
          <IoClose className='close' />
          <img src='' alt='' className='agregar-imagen' />
        </section> */}
          <section className='contenedor' id='expertos'>
            <h2 className='subtitulo'>Expertos en:</h2>
            <section className='experts'>
              <div className='cont-experts'>
                <img src='' alt='' />
                <h3 className='n-expert'>Creatividad</h3>
              </div>
            </section>
          </section>
        </section>
      </main>
      <footer id='contacto'>
        <div className='contenedor footer-content'>
          <div className='contact-us'>
            <h2 className='brand'>Candy Pony</h2>
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
      </footer>
    </>
  );
};
