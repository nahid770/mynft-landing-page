import React from 'react';

const HowItWork = () => {
    return (
        <div className='my-16 md:my-24'>
            <h2 className=' text-3xl md:text-5xl text-center font-poppins text-white'>How It Works</h2>
            <div data-aos-duration="2500" data-aos="flip-left" className=' mx-auto text-center mt-10'>

                <iframe  className='mx-auto w-full md:h-[515px]' src="https://www.youtube.com/embed/h5NvTTOlOtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default HowItWork;