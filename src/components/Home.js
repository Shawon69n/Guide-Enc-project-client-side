import React from 'react';
import Package from './Package';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <div className='flex items-center justify-evenly mb-48'>
                <Slider></Slider>
                <div>
                    <h1 className='font-bold  text-5xl text-black'>Let's go and explore the wild</h1>
                    <p className='mt-5 font-semibold text-black'>We have been guiding people on their vacation / tour for a decade. <br /> We are recognized for our service in this field.</p>
                </div>
            </div>
            <Package></Package>
        </div>
    );
};

export default Home;