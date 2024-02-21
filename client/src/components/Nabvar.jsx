import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/candylogo.png";

function Nabvar() {
  const path = useLocation().pathname;
  return (
    <Navbar fluid rounded>
      {/* MARCA */}
      <Navbar.Brand href='https://briandevs.com'>
        <img src={logo} className='mr-3   w-20' alt='Candy  Logo' />
      </Navbar.Brand>
      {/* LOGIN */}
      <div className='space-x-2 flex md:hidden'>
        <Link to='/signin'>
          <Button gradientDuoTone='purpleToPink'>Ingresar</Button>
        </Link>
        <Navbar.Toggle />

        {/* TOGLER */}
      </div>
      {/* NAVBAR */}
      <Navbar.Collapse className='text-center '>
        <Navbar.Link as={"div"}>
          <Link
            className={`link-custom-color ${path === "/" ? "link-activo" : ""}`}
            to='/'
          >
            Inicio
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            className={`link-custom-color ${
              path === "/about" ? "link-activo" : ""
            }`}
            to='/about'
          >
            Sobre nosotros
          </Link>
        </Navbar.Link>

        <Navbar.Link as={"div"}>
          <Link
            className={`link-custom-color ${
              path === "/contact" ? "link-activo" : ""
            }`}
            to={"/contact"}
          >
            Contacto
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            className={`link-custom-color ${
              path === "/services" ? "link-activo" : ""
            }`}
            to='/services'
          >
            Servicios
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='space-x-2 hidden md:flex'>
        <Link to='/signin'>
          <Button gradientDuoTone='purpleToPink'>Ingresar</Button>
        </Link>
        {/* TOGLER */}
      </div>
    </Navbar>
  );
}
export default Nabvar;
