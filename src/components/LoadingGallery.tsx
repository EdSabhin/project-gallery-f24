import React, { useEffect } from 'react';

const LoadingGallery = ({ hidden, setHidden }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 6000);
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className={`flex flex-col justify-center items-center gap-5 moving-gradient`}>
      <h1 className="cormorant-sc-regular text-4xl text-gradient-animation">
            Loading Gallery
      </h1>
      <p className='cormorant-sc-light text-3xl text-gradient-animation'>Ω</p>
    </div>
  );
};

export default LoadingGallery;

