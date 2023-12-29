"use client"

import Image from 'next/image'
import Orders from '../../components/Orders';

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
      <section>
        <h2>FAQ</h2>
        <ul>
          <li>
            <h3>Question</h3>
            <p>Answer</p>
          </li>
          <li>
            <h3>Question</h3>
            <p>Answer</p>
          </li>
          <li>
            <h3>Question</h3>
            <p>Answer</p>
          </li>
        </ul>
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
