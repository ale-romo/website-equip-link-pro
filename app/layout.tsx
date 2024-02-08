import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Palanquin_Dark, Roboto } from '@next/font/google';

const headingFont = Palanquin_Dark({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-heading',
});
const contentFont = Roboto({
  weight: ['400', '500','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-content',
});


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const navItems = [
    {
      href: '#home',
      title: 'Home',
    },
    {
      href: '#howItWorks',
      title: 'How it works',
    },
    {
      href: '#faq',
      title: 'FAQ',
    },
    {
      href: '#AboutUs',
      title: 'About Us',
    },
    {
      href: '#ContactUs',
      title: 'Contact Us',
    }
  ]


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(headingFont)
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${contentFont.variable} font-content`}>
        <Navbar navItems={navItems}/>
        <main className="flex min-h-screen flex-col items-center justify-between pt-18">
          {children}
        </main>
      </body>
    </html>
  )
}
