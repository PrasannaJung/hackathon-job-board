import Link from 'next/link';
import React from 'react';

const Members = () => {
  return (
    <div className='mt-24 flex justify-between w-3/5 mx-auto'>
      <div className='rounded-sm px-6 py-3 bg-slate-800 shadow-custom'>
        <div className='pb-4 flex flex-col justify-center items-center gap-5 border-b-2 border-white'>
          <img
            className={' max-w-2/4 rounded-full'}
            src='/images/one.jpg'
            alt=''
          />
          <h3 className='text-2xl font-bold'>Ritik</h3>
        </div>

        <div className='mt-4'>
          <p>Contributions to the project: </p>
          <ul className=' marker:text-sky-400 list-disc list-inside'>
            <li>Solidity</li>
            <li>Hardhat</li>
            <li>Filecoin</li>
          </ul>
        </div>

        <p className={'text-center font-bold bg-sky-500 mt-4 p-1'}>
          <Link href=''>Contact Me</Link>
        </p>
      </div>
      <div className='rounded-sm px-6 py-3 bg-slate-800 shadow-custom'>
        <div className='pb-4 flex flex-col justify-center items-center gap-5 border-b-2 border-white'>
          <img
            className={' max-w-2/4 rounded-full'}
            src='/images/two.jpg'
            alt=''
          />
          <h3 className='text-2xl font-bold'>Rahul Singh</h3>
        </div>

        <div className='mt-4'>
          <p>Contributions to the project: </p>
          <ul className=' marker:text-sky-400 list-disc list-inside'>
            <li>Solidity</li>
            <li>Hardhat</li>
            <li>Filecoin</li>
          </ul>
        </div>

        <p className={'text-center font-bold bg-sky-500 mt-4 p-1'}>
          <Link href=''>Contact Me</Link>
        </p>
      </div>
      <div className='rounded-sm px-6 py-3 bg-slate-800 shadow-custom'>
        <div className='pb-4 flex flex-col justify-center items-center gap-5 border-b-2 border-white'>
          <img
            className={' max-w-2/4 rounded-full'}
            src='/images/three.jpg'
            alt=''
          />
          <h3 className='text-2xl font-bold'>Prasanna Jung</h3>
        </div>

        <div className='mt-4'>
          <p>Contributions to the project: </p>
          <ul className=' marker:text-sky-400 list-disc list-inside'>
            <li>Solidity</li>
            <li>Hardhat</li>
            <li>Filecoin</li>
          </ul>
        </div>

        <p className={'text-center font-bold bg-sky-500 mt-4 p-1'}>
          <Link href=''>Contact Me</Link>
        </p>
      </div>
    </div>
  );
};

export default Members;
