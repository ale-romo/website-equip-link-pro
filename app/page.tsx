"use client"

import Orders from '@/components/Orders';
import Accordion from '@/components/Accordion';
import Carousel from '@/components/Carousel';
import ReviewCard from '@/components/ReviewCard';
import HexDiv from '@/components/HexDiv';
import { useEffect, useState } from 'react';

const workings = [
  {
    title: 'Explore las listas mensuales',
    content: 'Reciba nuestras listas mensuales de equipos con una variedad de equipo y maquinaria de construcción semi nueva.'
  },
  {
    title: 'Información detallada',
    content: 'Acceda a detalles completos, incluyendo horas registradas y precios competitivos, para tomar decisiones informadas.'
  },
  {
    title: 'Adquisición sin problemas',
    content: 'Simplifique su proceso de adquisición de equipos al conectarse directamente con nosotros. Nosotros nos encargamos de la logística, para que pueda centrarse en lo que hace mejor: construir el éxito.'
  },
]

const values = [
  {
    title: 'Transparencia',
    content: 'Creemos en la divulgación completa. Cada equipo en nuestras listas viene con información detallada sobre su historial de uso, garantizando una transparencia total en su proceso de toma de decisiones.'
  },
  {
    title: 'Garantía de Calidad',
    content: 'Nos enorgullece proporcionar equipos de primera calidad y bien mantenidos. Nuestros rigurosos procesos de inspección garantizan que reciba maquinaria confiable que cumple con los más altos estándares de la industria.'
  },
  {
    title: 'Precios Competitivos',
    content: 'Su presupuesto es importante. Nuestro compromiso con precios justos y competitivos asegura que no solo obtenga equipos de calidad, sino que también disfrute de soluciones rentables que contribuyan a la rentabilidad de su proyecto.'
  },
  {
    title: 'Ahorro de Tiempo',
    content: 'Entendemos la urgencia en la industria de la construcción. Con nuestras listas mensuales, puede identificar rápidamente el equipo que necesita sin la molestia de búsquedas extensas, ahorrándole tiempo valioso en el proceso de adquisición.'
  },
]
const reviews = [
  {
    img: '/images/ratings/rating.webp',
    author:'Ing. Jvulio Cardenas',
    company: 'Casas Geo',
    quote: 'Gracias al equipo de Equip Link Pro por hacer mis suenos realidad',
    rating: 3,
  },
  {
    img: '/images/ratings/rating.webp',
    author:'Ing. Jvulio Cardenas',
    company: 'Casas Geo',
    quote: 'Gracias al equipo de Equip Link Pro por hacer mis suenos realidad',
    rating: 5,
  },
  {
    img: '/images/ratings/rating.webp',
    author:'Ing. Jvulio Cardenas',
    company: 'Casas Geo',
    quote: 'Gracias al equipo de Equip Link Pro por hacer mis suenos realidad',
    rating: 4,
  },
  {
    img: '/images/ratings/rating.webp',
    author:'Ing. Jvulio Cardenas',
    company: 'Casas Geo',
    quote: 'Gracias al equipo de Equip Link Pro por hacer mis suenos realidad',
    rating: 3,
  },
]

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    updateScreenWidth();

    // Attach event listener for screen width changes
    window.addEventListener('resize', updateScreenWidth);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <>
      <Orders />

      <section className="w-full mb-20" id="proceso">
        <h2>¿Cómo funciona EquipLinkPro?</h2>
        <div className="flex bg-slate-300 w-full justify-center">
          <div className="w-3/4 flex flex-col lg:flex-row items-stretch -my-3 lg:my-0 -mb-10 lg:mb-0">
            {workings && workings.map((item, i) => (
              <div key={i} className="w-full lg:w-1/3">
                <HexDiv direction={screenWidth > 1024 ? 'right' : 'down'}>
                  <div className="relative flex flex-col items-center gap-5 justify-center h-full py-5 px-10">
                    <h3 className="text-2xl font-heading text-amber-400">{item.title}</h3>
                    <p className="text-sm text-white">{item.content}</p>
                  </div>
                </HexDiv>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex max-w-screen-sm mx-auto flex-col mb-20 px-10 lg:px-0" id="por-que">
        <h2>¿Por qué elegir EquipLinkPro?</h2>
        <div>
          <Accordion items={values} />
        </div>
      </section>

      <section className="w-full text-white mb-20 px-10 py-12 lg:py-20 flex justify-center relative" style={{ backgroundImage: 'url(/images/hero-bg.webp' }} id="nosotros">
        <div className="w-full h-full absolute left-0 top-0 opacity-80  primary-gradient"></div>
        <div className="flex flex-col lg:flex-row w-full max-w-screen-xl z-10">
          <div className="w-full lg:w-1/2 mb-10 px-8 lg:mb-0">
            <h2 className="text-amber-300">Acerca de EquipLinkPro</h2>
            <p className="mb-5">Una solución innovadora que transformará la forma en que adquiere equipos de construcción</p>
            <p className="mb-5">En <b>EquipLinkPro</b>, comprendemos el papel fundamental que desempeñan los equipos en el éxito de sus proyectos. Por eso, hemos desarrollado un enfoque revolucionario para la intermediación de equipos. Nuestras listas mensuales de equipos cuentan con una selección cuidadosa de maquinaria funcional y bien mantenida, cada una con las horas de uso registradas meticulosamente.</p>
          </div>
          <div className="w-full lg:w-1/2 px-10">
            <Carousel>
              {reviews.map((review, i) => <ReviewCard key={i} {...review} />)}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="max-w-screen-md mx-auto mb-20 flex flex-col w-full items-center" id="contacto">
        <h2 className="text-amber-400">Contáctanos</h2>
        <p className="mb-6 text-xl text-center">¿Listo para experimentar una nueva era en la adquisición de equipos de construcción?</p>
        <p className="mb-20 text-xl text-center">Comuníquese con nosotros hoy mismo para discutir cómo EquipLinkPro puede ser su socio de confianza en el éxito de su empresa.</p>
        <ul className="flex flex-col gap-10 md:flex-row justify-around mb-20">
          <li className="flex flex-col gap-3">
            <h3>Santa Mónica</h3>
            <hr className="w-10 bg-amber-300 h-0.5 border-none"/>
            <p>1904 11th St, Santa Monica, CA 90404</p>
            <p><a className="hover:underline font-medium text-blue-800" href="tel:(619) 221-4343">+1(310)720-3279</a></p>
            <p><a className="hover:underline font-medium text-blue-800" href="mailto:dmartinez@equiplinkpro.com">dmartinez@equiplinkpro.com</a></p>
          </li>
          <li className="flex flex-col gap-3">
            <h3>Tijuana</h3>
            <hr className="w-10 bg-amber-300 h-0.5 border-none"/>
            <p>1904 11th St, Santa Monica, CA 90404</p>
            <p><a className="hover:underline font-medium text-blue-800" href="tel:(619) 221-4343">+1(310)720-3279</a></p>
            <p><a className="hover:underline font-medium text-blue-800" href="mailto:dmartinez@equiplinkpro.com">dmartinez@equiplinkpro.com</a></p>
          </li>
        </ul>
        <p className="text-xl text-center w-2/3">Gracias por considerar a <b>EquipLinkPro.</b> Esperamos con interés la oportunidad de apoyar sus esfuerzos en la construcción. Quedamos a sus ordenes para cualquier duda o aclaración.</p>
      </section>

      <footer className="max-w-screen-lg mx-auto w-full px-4 lg:px-0">
        <p className="border-t-2 border-amber-400 w-full py-3">© 2024 Equip Link Pro. All rights reserved.</p>
      </footer>
    </>
  )
}
