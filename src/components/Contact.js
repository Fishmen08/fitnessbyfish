import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../Firebase";
import gymbg from '../images/gymbg.jpg';

export default function Contact() {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const notesRef = useRef();
    const collectionRef = collection(db, 'contactInquiry');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setSuccess('');
            const docRef = await addDoc(collectionRef, {
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value,
                notes: notesRef.current.value
            }).then(() => {
            console.log(docRef)
            nameRef.current.value = '';
            phoneRef.current.value = '';
            emailRef.current.value = '';
            notesRef.current.value = '';
            setSuccess('Your details have been submitted')
        })
        } catch (err) {
            console.log(err)
            setError('Something went wrong, please refresh and try again')
        }
    }

    return (
        <div id='contact-page' className='w-screen h-screen bg-cover bg-center pt-24' style={{backgroundImage: `url(${gymbg})`}}>
            <div className='w-5/6 max-w-xl mx-auto text-white rounded border-2' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <div className="w-2/3 mx-auto pt-8 pb-8">
                    <h3 className='text-xl font-bold'>Location</h3>
                    <a href='https://www.google.com/maps/dir//BossFit+Port+Melbourne,+2%2F250+Bay+St,+Port+Melbourne+VIC+3207,+Australia/@-37.8190369,144.9038309,13z/data=!3m1!5s0x6ad667eb6f4c456f:0x4f3cd039bc1b54cd!4m8!4m7!1m0!1m5!1m1!1s0x6ad667ec7383b9d7:0x8d0723140ab18065!2m2!1d144.9430465!2d-37.8382312' target='_blank' rel='noreferrer'>Level 2, 250 Bay Street, Port Melbourne, Vic, 3027</a>
                    <p>Phone: 0433 811 508</p>
                    <p>Email: fitnessbyfish@hotmail.com</p>
                    <a href='https://www.facebook.com/fitnessbyfishpt' target='_blank'  rel="noreferrer">Facebook</a>
                    <br />
                    <a href='https://www.instagram.com/a_fisher_08' target='_blank'  rel="noreferrer">Instagram</a>
                </div>
            </div>
            <div className='w-5/6 mx-auto mt-4 pb-6 rounded border-2 max-w-xl' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <form className='mx-auto w-2/3 pt-6 space-y-2' onSubmit={handleSubmit}>
                    <h3 className='text-white font-bold text-lg'>Leave your contact information</h3>
                    <fieldset>
                        <label htmlFor="name" className='text-white block'>Name</label>
                        <input className='w-full p-1' type='text' id='name' name='name' ref={nameRef} required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="phone" className='text-white block'>Phone</label>
                        <input className='w-full p-1' type='phone' id='phone' name='phone' ref={phoneRef} required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email" className='text-white block'>Email</label>
                        <input className='w-full p-1' type='email' id='email' name='email' ref={emailRef} required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='notes' className='text-white block'>Notes</label>
                        <textarea className='w-full p-1' id='notes' name='notes' ref={notesRef} ></textarea>
                    </fieldset>
                    <fieldset>
                        <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-2' type='submit'>Submit</button>
                    </fieldset>
                    <p className='text-center'><span className='text-green-500'>{success}</span><span className='text-red-500'>{error}</span></p>
                </form>
            </div>
            
            
        </div>
    )
    
}