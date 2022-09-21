import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { userAgent } from 'next/server';

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
      <button
        onClick={props.onOpen}
        className={
          'px-4 py-2 font-bold text-2xl rounded-sm hover:cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500'
        }
      >
        Post job
      </button>
    </header>
  );
};

export default Navigation;
