import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { BiLogoTiktok } from "react-icons/bi";
import { Button, Card } from "flowbite-react";
/* img */
import minnie from "../assets/minnie.jpeg";
import sophia from "../assets/princesa.jpeg";
import dragon from "../assets/dragon.jpeg";
import cars from "../assets/cars.jpeg";
import maya from "../assets/maya.jpeg";
import vaca from "../assets/vacalola.jpeg";
import pool from "../assets/pool.jpeg";
import spiderman from "../assets/spiderman.jpg";
import roblox from "../assets/roblox.jpeg";
import { IoClose } from "react-icons/io5";

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
      <main>
        {/* Servicios */}
        <h3>Algunos de nuestros servicios...</h3>
        <div className='servicios flex flex-wrap flex-row'>
          {/* Card de servicios | 1*/}
          <Card
            className='max-w-sm'
            imgSrc={minnie}
            imgAlt='Evento de Minnie Mouse'
            horizontal
          >
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Evento de Minnie Mouse
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone='purpleToPink' outline fill>
              <a href='#'> Seguir leyendo</a>
            </Button>
          </Card>
          {/* Card de servicios | 2*/}
          <Card
            className='max-w-sm'
            imgSrc={sophia}
            imgAlt='Evento de la princes Sophia'
            horizontal
          >
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Evento de la princesa Sophia
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone='purpleToPink' outline fill>
              <a href='#'> Seguir leyendo</a>
            </Button>
          </Card>
          {/* Card de servicios | 3*/}
          <Card
            className='max-w-sm'
            imgSrc={dragon}
            imgAlt='Evento de entrenando a mi dragón'
            horizontal
          >
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Evento de entrenando a mi dragón
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button gradientDuoTone='purpleToPink' outline fill>
              <a href='#'> Seguir leyendo</a>
            </Button>
          </Card>
        </div>
        <section className='gallery' id='portafolio'>
          <div className='contenedor'>
            <h2 className='subtitulo'>Galeria</h2>
            <div className='contenedor-galeria'>
              <img src={cars} alt='Cars' className='img-galeria' />
              <img src={maya} alt='Maya y el Oso' className='img-galeria' />
              <img src={vaca} alt='Vaca lola' className='img-galeria' />
              <img src={pool} alt='Pool Party' className='img-galeria' />
              <img src={spiderman} alt='Spiderman' className='img-galeria' />
              <img src={roblox} alt='Roblox' className='img-galeria' />
            </div>
          </div>
        </section>
        {/*  <section className='imagen-light'>
          <IoClose className='close' />
          <img src='' alt='' className='agregar-imagen' />
        </section> */}
      </main>

      {/* Redes */}
      <a target='_blank' href='https://facebook.com'>
        <FaSquareFacebook />
      </a>
      <a target='_blank' href='https://instagram.com'>
        <TiSocialInstagram />
      </a>
      <a target='_blank' href='https://tiktok.com'>
        <BiLogoTiktok />
      </a>
    </>
  );
};
