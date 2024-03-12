"use client"
import { useState } from 'react';

const CopyNumberButton = ({ number }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(number);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div>
      
      <button onClick={copyToClipboard} className='text-center bg-blue-900 w-60 m-auto text-white text-xs p-2 mt-5 rounded-2xl'>
        {isCopied ? 'Copied!' : 'Copy Account Number'}
      </button>
    </div>
  );
};

export default CopyNumberButton;
