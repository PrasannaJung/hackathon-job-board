import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import FormModal from './FormModal';

const Layout = props => {
  return (
    <div className={'min-h-screen bg-slate-900 text-white'}>
      <Navigation />

      {props.children}
    </div>
  );
};

export default Layout;
