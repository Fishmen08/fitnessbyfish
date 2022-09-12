import React from "react";
import gymbg from '../images/gymbg.jpg';

export default function MainPage () {
    return (
            <div id='main-page' className='h-screen w-full bg-cover bg-center flex z-0 justify-center items-center' style={{backgroundImage: `url(${gymbg})`}}>
                <div className='bg-black flex items-center rounded-xl text-center max-w-md sm:max-w-fit'>
                    <h1 className='xl:text-6xl lg:text-5xl text-3xl p-12 text-green-500 roboto'>Fitness By Fish Personal Training</h1>
                </div>
            </div>
    )
}