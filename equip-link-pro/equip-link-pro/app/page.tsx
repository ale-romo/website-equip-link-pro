"use client"

import Orders from '@/components/Orders';
import Accordion from '@/components/Accordion';

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

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Orders />
      <section>
        <h2>How it works</h2>
        <ul>
          <li>
            <h3>Step Title</h3>
            {/* <Image src={''} alt={''} /> */}
            <p>Description</p>
          </li>
          <li>
            <h3>Step Title</h3>
            {/* <Image src={''} alt={''} /> */}
            <p>Description</p>
          </li>
          <li>
            <h3>Step Title</h3>
            {/* <Image src={''} alt={''} /> */}
            <p>Description</p>
          </li>
        </ul>
      </section>
      <section className="w-2/3 flex flex-col">
        <h2>FAQ</h2>
        <Accordion items={faq} />
      </section>
      <section>
        <h2>About Us</h2>
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
