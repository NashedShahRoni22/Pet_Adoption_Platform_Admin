import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-end gap-2 my-20'>
            <p className='text-5xl font-extrabold text-white'>Loading</p>
            <div className='h-6 w-6 rounded-full bg-white animate-bounce'></div>
            <div className='h-6 w-6 rounded-full bg-white'></div>
            <div className='h-6 w-6 rounded-full bg-white animate-bounce'></div>
        </div>
    );
};

export default Loader;