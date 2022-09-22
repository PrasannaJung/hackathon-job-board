import React from 'react';
import CloseButton from './UI/CloseButton';
import img from '../public/bg.png';

const Backdrop = props => {
  return (
    <div
      onClick={props.onHide}
      className='fixed inset-0 z-10 bg-black bg-opacity-10 backdrop-blur-sm'
    ></div>
  );
};

const ApplicantForm = props => {
  return (
    <div
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className='bg-gradient-to-r from-violet-500 to-fuchsia-500 z-20 fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 px-3 py-6 w-1/3 bg-black bg-opacity-70 bg-blend-overlay'
    >
      <form className='flex mx-auto flex-col w-3/4 '>
        <label htmlFor='name'>Your Name:</label>
        <input
          className={'outline-none p-1 rounded-sm text-black'}
          type='text'
          name='name'
          id='name'
        />
        <input className='my-4' type='file' name='resume' id='resume' />

        <button
          className={'mt-3 bg-sky-500 mx-auto px-2 py-1 font-bold'}
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
      <ApplicantForm onHide={props.onHide} />
      <Backdrop onHide={props.onHide} />
    </>
  );
};

export default FormModal;
