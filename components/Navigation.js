import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navigation = props => {
  const router = useRouter();

  return (
    <header className={'flex justify-between items-center px-6 py-4'}>
      <h2>LOGO</h2>
      <nav>
        <ul className={'flex gap-12 text-2xl'}>
          <li
            className={`hover:cursor-pointer hover:text-gray-100 ${
              router.pathname === '/' ? ' border-purple-600 border-b-2' : ''
            }`}
          >
            <Link href='/'>Home</Link>
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-100 ${
              router.pathname === '/jobs' ? ' border-purple-600 border-b-2' : ''
            }`}
          >
            <Link href='/jobs'>Jobs</Link>
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-100 ${
              router.pathname === '/about'
                ? ' border-purple-600 border-b-2'
                : ''
            }`}
          >
            <Link href='/about'>About</Link>
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-100 ${
              router.pathname === '/members'
                ? ' border-purple-600 border-b-2'
                : ''
            }`}
          >
            <Link href='/members'>Members</Link>
          </li>
        </ul>
      </nav>
      <ConnectButton />
    </header>
  );
};

export default Navigation;
