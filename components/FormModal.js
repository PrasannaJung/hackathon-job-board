import React from 'react';
import CloseButton from './UI/CloseButton';

const Backdrop = props => {
  return (
    <div
      onClick={props.onHide}
      className='fixed inset-0 z-10 bg-black bg-opacity-10 backdrop-blur-sm'
    ></div>
  );
};

const Form = props => {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 z-20 fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 px-3 py-6 w-1/3'>
      <form className='flex mx-auto flex-col w-3/4 '>
        <CloseButton
          onHide={props.onHide}
          classes={'absolute top-2 right-2 text-sm h-10 hover:cursor-pointer'}
        />

        <label htmlFor='company'>Company/Hirer Name:</label>
        <input
          className={'outline-none p-1 rounded-sm text-black'}
          type='text'
          name='company'
          id='company'
        />

        <label htmlFor='pos'>Position</label>
        <select
          name='pos'
          id='pos'
          className='text-black outline-none p-1 rounded-sm'
        >
          <option value='intern'>Intern</option>
          <option value='junior'>Junior</option>
          <option value='senior'>Senior</option>
        </select>

        <label htmlFor='salary'>Salary</label>
        <input
          className='outline-none p-1 rounded-sm text-black'
          type='number'
          name='salary'
        />
        <p>Is your job remote? </p>
        <div className={'flex items-center gap-4'}>
          <div className={'flex gap-1 items-center'}>
            <input type='radio' name='location' id='yes' />
            <label htmlFor='yes'>Yes</label>
          </div>
          <div className={'flex gap-1'}>
            <input type='radio' name='location' id='no' />
            <label htmlFor='no'>No</label>
          </div>
        </div>

        <p>Skillsets you are looking for: </p>
        <div>
          <div>
            <input type='checkbox' name='nodejs' id='nodejs' />
            <label htmlFor='nodejs'>Node Js</label>
          </div>
          <div>
            <input type='checkbox' name='js' id='js' />
            <label htmlFor='js'>Javascript</label>
          </div>
          <div>
            <input type='checkbox' name='ethers' id='ethers' />
            <label htmlFor='ethers'>Ethers Js</label>
          </div>
          <div>
            <input type='checkbox' name='solidity' id='solidity' />
            <label htmlFor='solidity'>Solidity</label>
          </div>
          <div>
            <input type='checkbox' name='hardhat' id='hardhat' />
            <label htmlFor='hardhat'>Hardhat</label>
          </div>
          <div>
            <input type='checkbox' name='ts' id='ts' />
            <label htmlFor='ts'>Typescript</label>
          </div>
          <div>
            <input type='checkbox' name='react' id='react' />
            <label htmlFor='reacr'>React Js</label>
          </div>
        </div>

        <button
          className={
            'mt-3 bg-gradient-to-r from-violet-700 to-fuchsia-900 mx-auto px-2 py-1 font-bold'
          }
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const FormModal = props => {
  return (
    <>
      <Form onHide={props.onHide} />
      <Backdrop onHide={props.onHide} />
    </>
  );
};

export default FormModal;
