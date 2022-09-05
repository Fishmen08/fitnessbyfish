import React from "react";
import gymbg from '../images/gymbg.jpg';

export default function Location() {
    return (
        <div id='contact-page' className='w-screen bg-cover bg-center pt-24 pb-24' style={{backgroundImage: `url(${gymbg})`}}>
            <div className='w-5/6 max-w-xl mx-auto text-white rounded border-2' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <div className="w-2/3 mx-auto pt-8 pb-8">
                    <h3 className='text-xl font-bold'>Location</h3>
                    <a href='https://www.google.com/maps/dir//BossFit+Port+Melbourne,+2%2F250+Bay+St,+Port+Melbourne+VIC+3207,+Australia/@-37.8190369,144.9038309,13z/data=!3m1!5s0x6ad667eb6f4c456f:0x4f3cd039bc1b54cd!4m8!4m7!1m0!1m5!1m1!1s0x6ad667ec7383b9d7:0x8d0723140ab18065!2m2!1d144.9430465!2d-37.8382312' target='_blank'>Bossfit, Level 2, 250 Bay Street, Port Melbourne, Vic, 3027</a>
                    <p>Phone: 0433 811 508</p>
                    <p>Email: fitnessbyfish@hotmail.com</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
                <div className='mx-auto w-fit mb-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.942714191354!2d144.94085781582993!3d-37.83822694321757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667ec7383b9d7%3A0x8d0723140ab18065!2sBossFit%20Port%20Melbourne!5e0!3m2!1sen!2sau!4v1662335876933!5m2!1sen!2sau" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}