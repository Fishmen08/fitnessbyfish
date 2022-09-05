import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gymbg from '../images/gymbg.jpg';
import {app} from '../Firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useAuth } from "./AuthContext";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login, currentUser} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/dashboard', {replace: true})
        } catch {
            setError('Login or password is incorrect');
        }
    }
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     try {
    //         setError('');
    //         setLoading(true);
    //         await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
    //         onAuthStateChanged(auth, (user) => {
    //             if (user) {
                    
    //             }
    //         })
    //         navigate('/dashboard', {replace: true})
    //     } catch {
    //         setError('Email or password is incorrect')
    //     }
    //     setLoading(false);
        
        // .then((userCredentials) => {
        //     console.log(userCredentials);
        //     setLogin(true);
        // })
        // setLoading(false);
        
    // }


    return (
        <div className='w-screen h-screen bg-cover bg-center pt-24' style={{backgroundImage: `url(${gymbg})`}}>
            <form className='w-96 lg:w-2/4 xl:w-1/3 mx-auto border-2 h-96 rounded-xl text-white ' style={{backgroundColor: 'rgba(0,0,0,0.8)'}} onSubmit={handleSubmit}>
                
                    <fieldset className='w-5/6 mx-auto mt-6'>
                        <label htmlFor="email" className='block'>Email</label>
                        <input type='email' id='email' name='email' ref={emailRef} required className='w-full mt-4 p-2 border-2 rounded text-black' />
                    </fieldset>
                    <fieldset className='w-5/6 mx-auto mt-6'>
                        <label htmlFor="password" className='block'>Password</label>
                        <input type='password' id='password' name='password' ref={passwordRef} required className='w-full mt-4 p-2 border-2 rounded text-black' />
                        <p id='error' className='text-red-500 mt-2'>{error}</p>
                    </fieldset>
                    <fieldset className='w-5/6 mx-auto text-center text-blue-400'>
                    <button type='submit' disabled={loading} className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2'>Login</button>
                    <Link to='/' >Forgot Password?</Link>
                    </fieldset>
            </form>
        </div>
    )
}