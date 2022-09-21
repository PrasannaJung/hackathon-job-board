import { ConnectButton } from '@rainbow-me/rainbowkit';

import React from 'react';
  
const WalletButton = () => {
  return (
    <div className='fixed right-6 bottom-10'>
      <ConnectButton />
    </div>
  );
};

export default WalletButton;
