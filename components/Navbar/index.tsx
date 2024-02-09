"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerBtn from './HamburgerBtn';

interface navItem {
  href: string;
  title: string;
}

interface Props {
  navItems: navItem[];
}

const Navbar = ({ navItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const main = document.querySelector('main');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      if (main) {
        main.classList.add('h-screen', 'overflow-hidden');
        document.addEventListener('keydown', handleKeyDown);
      }
    } else {
      if (main) {
        main.classList.remove('h-screen', 'overflow-hidden');
        document.removeEventListener('keydown', handleKeyDown);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return <div className="flex py-2 px-4 justify-between items-center w-full bg-white z-20">
    <Link href="/" title="Equip Link Pro" className="flex items-center gap-4 text-2xl font-bold z-20">
      <span onClick={() => isOpen && setIsOpen(false)} className="flex items-center gap-4 font-heading font-bold">
        <Image src="/images/logo.svg" alt="Equip Link Pro" height="32" width="30" className="h-auto w-14" />
        Equip Link Pro
      </span>
    </Link>
    <div className="flex gap-4 h-full">
      <nav className={`${isOpen ? 'h-full' : 'h-0 lg:h-full'} w-full bg-white fixed top-0 left-0  z-10 overflow-hidden transition-all duration-300  lg:relative lg:z-0`}>
        <div className="p-10 pt-20 lg:p-0 lg:pt-0 flex flex-col lg:flex-row lg:bg-transparent gap-x-4 font-bold text-blue-900">
          {navItems.map(({ href, title }) => (
            <Link key={href} href={href} title={title}>
              <span onClick={() => isOpen && setIsOpen(false)}>{title}</span>
            </Link>
          ))}
        </div>
      </nav>
      <HamburgerBtn cb={setIsOpen} isOpen={isOpen} />
    </div>
  </div>

}

export default Navbar;
