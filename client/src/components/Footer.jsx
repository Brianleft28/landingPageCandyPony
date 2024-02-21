import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { BiLogoTiktok } from "react-icons/bi";

export const Footer = () => {
  return (
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
  );
};
