import React, { useState, useEffect } from 'react';
import ApplicantFormModal from '../components/ApplicantFormModal';

const Jobs = () => {
  const [applicantFormShowing, setApplicantFormShowing] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setApplicantFormShowing(false);
      }
    });
  }, []);

  const showApplicantForm = () => {
    setApplicantFormShowing(true);
  };

  const hideApplicantForm = () => {
    setApplicantFormShowing(false);
  };

  return (
    <main className={'text-white text-xl max-h-full '}>
      {applicantFormShowing && (
        <ApplicantFormModal onHide={hideApplicantForm} />
      )}
      <h1 className='text-center font-bold text-3xl mt-6 mb-8 bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent'>
        Look for the best jobs around:{' '}
      </h1>

      <div className={' bg-zinc-600 mx-auto w-3/4 rounded-lg p-8'}>
        <ul className='flex flex-col gap-6'>
          <li
            className={
              'relative flex justify-between items-center px-6 py-4 bg-slate-800 rounded-md before:content-["Remote"] before:bg-red-500 before:absolute before:-top-2 before:-right-2 before:px-1'
            }
          >
            <div>
              <h1 className='font-bold text-2xl'>
                Solidity Engineer-<span>$20000</span>
              </h1>
              <div className={'flex gap-4 mt-2'}>
                <span
                  className={'bg-slate-300 text-black text-sm p-1 font-bold'}
                >
                  Node Js
                </span>
                <span
                  className={'bg-slate-300 text-black text-sm p-1 font-bold'}
                >
                  Ethers Js
                </span>
                <span
                  className={'bg-slate-300 text-black text-sm p-1 font-bold'}
                >
                  Solidity
                </span>
                <span
                  className={'bg-slate-300 text-black text-sm p-1 font-bold'}
                >
                  Hardhat
                </span>
                <span
                  className={'bg-slate-300 text-black text-sm p-1 font-bold'}
                >
                  Typescript
                </span>
              </div>
            </div>

            <button
              onClick={showApplicantForm}
              className={
                'px-3 py-1 font-bold rounded-sm hover:cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-2'
              }
            >
              Apply
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Jobs;
