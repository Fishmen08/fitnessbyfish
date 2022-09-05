import React from "react";
import adamwide from '../images/adam-wide.jpg';

export default function About () {
    return (
        <div id='about-page' className='block w-screen mt-24 justify-center text-center'>
            <div className=''>
                <img src={adamwide} alt='adam' className='h-96 rounded-xl m-4 mx-auto' />
            </div>
            <div className='lg:max-w-2xl m-4 md:max-w-lg max-w-md mx-auto'>
                <h2 className='font-bold text-xl'>Adam Fisher</h2>
                <p>Adam is the founder of Fitness By Fish Personal Training. He has a strong passion for health, fitness and optimising performance. As an educator and coach Adam has over 7 years experience in the health and fitness industry. Adam has a University degree in Exercise science along with qualifications through FMA Strength and Conditioning, Australian Strength and Conditioning Association, CHEK institute and much more. Adam loves helping people realise what their body is truly capable of when they put the right amount of effort in with the correct knowledge.</p>
                <p>Adam has been putting his experience into practice on himself over the years to understand what it takes to get the best results out of your training. His interests include Indoor and Outdoor Rock Climbing, Hiking and Trekking etc.....
                </p>
            </div>
        </div>
    )
}