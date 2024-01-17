"use client"

import Orders from '@/components/Orders';
import Accordion from '@/components/Accordion';
import Carousel from '@/components/Carousel';
import ReviewCard from '@/components/ReviewCard';
import HexDiv from '@/components/HexDiv';

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Orders />
      <section className="w-full">
        <h2>How it works</h2>
        <div className="flex bg-zinc-200 w-full justify-center text-white">
          <div className="w-3/4 flex items-stretch">
            {steps && steps.map((step, i) => (
              <HexDiv key={i}>
                <div className="relative flex items-center h-full py-12  px-8">
                  <h3 className="opacity-30 text-5xl absolute top-2 left-4">{i}</h3>
                  <p className="text-center text-3xl">{step}</p>
                </div>
              </HexDiv>
            ))}
          </div>
        </div>
      </section>
      <section className="w-2/3 flex flex-col">
        <h2>FAQ</h2>
        <Accordion items={faq} />
      </section>
      <section className="flex bg-blue-900 text-white">
        <div className="w-1/2">
          <h2>About Us</h2>
          <p>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
        <div className="w-1/2 px-8">
          <Carousel>
            {reviews.map((review, i) => <ReviewCard key={i} {...review} />)}
          </Carousel>
        </div>

      </section>
      <section>
        <h2>Contact Us</h2>
        <ul>
          <li>
            <h3>Santa Mónica</h3>
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
    </main>
  )
}
