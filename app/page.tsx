"use client"

import Orders from '@/components/Orders';
import Accordion from '@/components/Accordion';
import Carousel from '@/components/Carousel';
import ReviewCard from '@/components/ReviewCard';
import HexDiv from '@/components/HexDiv';
import { useEffect, useState } from 'react';

const steps = [
  'Browse the catalog and find what you need',
  'Fill in the form to inquire about your thing',
  "We'll contact you to iron out the details",
  'Your Item will be delivered to you'
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
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Orders />
      <section className="w-full" id="howItWorks">
        <h2 className="mb-10">How it works</h2>
        <div className="flex bg-zinc-200 w-full justify-center text-white">
          <div className="w-3/4 flex flex-col lg:flex-row items-stretch -my-3 lg:my-0">
            {steps && steps.map((step, i) => (
              <HexDiv key={i} direction={screenWidth > 1024 ? 'right' : 'down'}>
                <div className="relative flex flex-col lg:flex-row items-center h-full py-12  px-8 ">
                  <h3 className="opacity-30 text-5xl lg:absolute top-2 left-4">{i + 1}</h3>
                  <p className="text-center text-3xl">{step}</p>
                </div>
              </HexDiv>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex max-w-screen-sm mx-auto flex-col py-20 px-10 lg:px-0" id="faq">
        <h2>FAQ</h2>
        <div>
          <Accordion items={faq} />
        </div>
      </section>

      {/* About us */}
      <section className="w-full bg-blue-900 text-white mb-20" style={{ backgroundImage: 'url(/images/hero-bg.webp' }} id="aboutUs">
        <div className="w-full px-10 py-12 lg:py-20 bg-blue-900/80 flex justify-center">
          <div className="flex flex-col lg:flex-row w-full max-w-screen-xl">
            <div className="w-full lg:w-1/2 mb-10 px-8 lg:mb-0">
              <h2>About Us</h2>
              <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <ul>
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
            <div className="w-full lg:w-1/2 lg:px-8">
              <Carousel>
                {reviews.map((review, i) => <ReviewCard key={i} {...review} />)}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-md mx-auto mb-20" id="contactUs">
        <h2>Contact Us</h2>
        <ul className="flex flex-col gap-10 md:flex-row justify-around max-w-screen-xl">
          <li>
            <h3>Santa Mónica</h3>
            <hr className="w-10 bg-blue-800 h-0.5 border-none"/>
            <p>Address</p>
            <p>Phone</p>
          </li>
          <li>
            <h3>Tijuana</h3>
            <p>Address</p>
            <p>Phone</p>
          </li>
        </ul>
      </section>
      <footer className="max-w-screen-lg mx-auto w-full px-4 lg:px-0">
        <p className="border-t-2 border-blue-800 w-full py-3">© 2024 Equip Link Pro. All rights reserved.</p>
      </footer>
    </main>
  )
}
