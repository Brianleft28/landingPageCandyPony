import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { BiLogoTiktok } from "react-icons/bi";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export const Footerr = () => {
  return (
    <Footer container>
      <Footer.Copyright href='#' by='Briansito™' year={2024} />
      <Footer.LinkGroup>
        <Footer.Link>
          <Link to='/'>Inicio</Link>
        </Footer.Link>
        <Footer.Link>
          <Link to='/contact'>Contacto</Link>
        </Footer.Link>
        <Footer.Link>
          <Link to='/services'>Servicios</Link>
        </Footer.Link>
        <Footer.Link to='/shop'>
          <Link>Tienda</Link>
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
