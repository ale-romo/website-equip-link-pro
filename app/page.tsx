"use client"

import Orders from '@/components/Orders';
import Accordion from '@/components/Accordion';
import Carousel from '@/components/Carousel';
import ReviewCard from '@/components/ReviewCard';
import HexDiv from '@/components/HexDiv';
import { useEffect, useState } from 'react';

const steps = [
  'Find your equipment in our catalog',
  'Fill in the form to place a request',
  "We'll contact you to iron out the details",
  'Your equipment is delivered'
]

const faq = [
  {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit?',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
  },
  {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit?',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
  },
  {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit?',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
  },
  {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit?',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
  },
  {
    title: 'Sed ut perspiciatis unde omnis iste natus error sit?',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
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

      <section className="w-full mb-20" id="howItWorks">
        <h2>4 steps to quality and savings</h2>
        <div className="flex primary-gradient w-full justify-center">
          <div className="w-3/4 flex flex-col lg:flex-row items-stretch -my-3 lg:my-0 -mb-10 lg:mb-0">
            {steps && steps.map((step, i) => (
              <div key={i} className="w-full lg:w-1/4">
                <HexDiv direction={screenWidth > 1024 ? 'right' : 'down'}>
                  <div className="relative flex flex-col lg:flex-row items-center h-full py-10 px-5">
                    <p className="text-center text-xl font-medium text-blue-950">{step}</p>
                  </div>
                </HexDiv>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex max-w-screen-sm mx-auto flex-col mb-20 px-10 lg:px-0" id="faq">
        <h2>FAQ</h2>
        <div>
          <Accordion items={faq} />
        </div>
      </section>

      <section className="w-full text-white mb-20 px-10 py-12 lg:py-20 flex justify-center relative" style={{ backgroundImage: 'url(/images/hero-bg.webp' }} id="aboutUs">
        <div className="w-full h-full absolute left-0 top-0 opacity-80  primary-gradient"></div>
        <div className="flex flex-col lg:flex-row w-full max-w-screen-xl z-10">
          <div className="w-full lg:w-1/2 mb-10 px-8 lg:mb-0">
            <h2 className="text-gold-600">About Us</h2>
            <p className="mb-5">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>
                Lorem Ipsum has been the industry&apos;s .
              </li>
              <li>
                Lorem Ipsum has been the industry&apos;s .
              </li>
              <li>
                Lorem Ipsum has been the industry&apos;s .
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 px-10">
            <Carousel>
              {reviews.map((review, i) => <ReviewCard key={i} {...review} />)}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="max-w-screen-md mx-auto mb-20" id="contactUs">
        <h2>Contact Us</h2>
        <ul className="flex flex-col gap-10 md:flex-row justify-around max-w-screen-xl">
          <li className="flex flex-col gap-3">
            <h3>Tijuana</h3>
            <hr className="w-10 bg-gold-400 h-0.5 border-none"/>
            <p>1904 11th St, Santa Monica, CA 90404</p>
            <p><a className="hover:underline font-medium text-blue-950" href="tel:(619) 221-4343">(619) 221-4343</a></p>
            <p><a className="hover:underline font-medium text-blue-950" href="mailto:dmartinez@equiplinkpro.com">dmartinez@equiplinkpro.com</a></p>
          </li>
          <li className="flex flex-col gap-3">
            <h3>Tijuana</h3>
            <hr className="w-10 bg-gold-400 h-0.5 border-none"/>
            <p>1904 11th St, Santa Monica, CA 90404</p>
            <p><a className="hover:underline font-medium text-blue-950" href="tel:(619) 221-4343">(619) 221-4343</a></p>
            <p><a className="hover:underline font-medium text-blue-950" href="mailto:dmartinez@equiplinkpro.com">dmartinez@equiplinkpro.com</a></p>
          </li>
        </ul>
      </section>

      <footer className="max-w-screen-lg mx-auto w-full px-4 lg:px-0">
        <p className="border-t-2 border-gold-600 w-full py-3">© 2024 Equip Link Pro. All rights reserved.</p>
      </footer>
    </>
  )
}
