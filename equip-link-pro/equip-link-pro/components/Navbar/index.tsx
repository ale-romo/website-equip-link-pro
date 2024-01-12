"use client"

import { useState } from "react";
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

  return <div className="flex p-4 justify-between items-center">
    <Link href="/" title="Equip Link Pro" className="flex items-center gap-4 text-2xl font-bold z-20">
      <Image src="/images/logo.svg" alt="Equip Link Pro" height="32" width="30" />
      Equip Link Pro
    </Link>
    <div className="flex gap-4">
      <nav className={`${isOpen ? 'h-full' : 'h-0 lg:h-full'} w-full fixed top-0 left-0  z-10 overflow-hidden transition-all duration-300  lg:relative lg:z-0`}>
        <div className="p-10 pt-20 lg:p-0 lg:pt-0 flex flex-col lg:flex-row bg-white lg:bg-transparent gap-x-4">
          {navItems.map(({ href, title }) => (
            <Link key={href} href={href} title={title}>{title}</Link>
          ))}
        </div>
      </nav>
      <HamburgerBtn cb={setIsOpen} isOpen={isOpen} />
    </div>
  </div>

}

export default Navbar;
