import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import FormModal from './FormModal';

const Layout = props => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setFormIsVisible(false);
      }
    });
  }, []);

  const showFormHandler = () => {
    setFormIsVisible(true);
  };

  const hideFormHandler = () => {
    setFormIsVisible(false);
  };

  return (
    <div className={'min-h-screen bg-slate-900 text-white'}>
      <Navigation onOpen={showFormHandler} />
      {formIsVisible && <FormModal onHide={hideFormHandler} />}
      {props.children}
    </div>
  );
};

export default Layout;
