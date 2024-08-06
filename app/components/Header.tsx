"use client";

import { useState } from 'react';
import Image from "next/image";
import { kavoon } from '../fonts';

// Components
import Menu from './Menu'

// Assets
import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='col-span-full min-h-[8dvh] flex justify-between items-center'>
      <p className={`${kavoon.className} text-xl`}>Ethefund</p>

      <nav className='hidden md:block'>
        <ul className='flex'>
          <li className='mx-2'><a href="/proposals" className='p-1'>Proposals</a></li>
          <li className='mx-2'><a href="" className='p-1'>Partcipate</a></li>
          <li className='mx-2'><a href="" className='p-1'>Analytics</a></li>
        </ul>
      </nav>

      <div className='hidden md:block'>
        <a href="" className='mx-5 p-1'>Admin</a>
        <button className='bg-bluewood-300 text-white font-bold w-28 border-2 border-bluewood-300 rounded p-2 hover:bg-mint-300 hover:text-bluewood-300 transition-all'>Connect</button>
      </div>

      <button className='md:hidden' onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
        <Image src={isOpen ? close : hamburger} alt="Side menu button" />
      </button>

      {isOpen && <Menu />}
    </header>
  );
}
