"use client";

import { useState } from 'react';
import Image from "next/image";
import { kavoon } from '../fonts';

import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react';

// Components
import Menu from './Menu';
import Link from './links/Link';

// Assets
import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount()

  return (
    <header className='col-span-full min-h-[8dvh] flex justify-between items-center'>
      <p className={`${kavoon.className} text-xl`}>Ethefund</p>

      <nav className='hidden md:block'>
        <ul className='flex'>
          <li className='mx-2'><Link text={"Proposals"} link={"/proposals"} /></li>
          <li className='mx-2'><Link text={"Participate"} link={"/participate"} /></li>
          <li className='mx-2'><Link text={"Analytics"} link={"/analytics"} /></li>
        </ul>
      </nav>

      <div className='hidden md:block'>
        <a href="" className='mx-5 p-1'>Admin</a>
        <button onClick={() => open()} className="bg-bluewood-300 text-white font-bold w-32 border-2 border-bluewood-300 rounded p-2 hover:bg-mint-300 hover:text-bluewood-300 transition-all">
          {isConnected ? (
            <>
              {`${address.slice(0, 5)}...${address.slice(38)}`}
            </>
          ) : (
            <>
              Connect
            </>
          )}
        </button>
      </div>

      <button className='md:hidden' onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
        <Image src={isOpen ? close : hamburger} alt="Side menu button" />
      </button>

      {isOpen && <Menu />}
    </header>
  );
}
