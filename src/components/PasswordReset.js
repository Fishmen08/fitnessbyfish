import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import gymbg from '../images/gymbg.jpg';
import { useAuth } from "./AuthContext";

export default function PasswordReset() {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            setSuccess('')
            await resetPassword(emailRef.current.value)
            setSuccess('Check your email for more information')
            setLoading(false)
        } catch {
            setError('Not a valid email please try again');
        }
    }


    return (
        <div className='w-screen h-screen bg-cover bg-center pt-24' style={{backgroundImage: `url(${gymbg})`}}>
            <form className='w-96 lg:w-2/4 xl:w-1/3 mx-auto border-2 rounded-xl text-white pb-8' style={{backgroundColor: 'rgba(0,0,0,0.8)'}} onSubmit={handleSubmit}>
                
                    <fieldset className='w-5/6 mx-auto mt-6'>
                        <label htmlFor="email" className='block'>Email</label>
                        <input type='email' id='email' name='email' ref={emailRef} required className='w-full mt-4 p-2 border-2 rounded text-black' />
                        <p id='error' className='text-red-500 mt-2'>{error}</p><p className='text-green-500 mt-2'>{success}</p>
                    </fieldset>
                    <fieldset className='w-5/6 mx-auto text-center text-blue-400'>
                    <button type='submit' disabled={loading} className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2'>Reset Password</button>
                    {/* <Link className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded mt-6 mb-2' to='/login' >Login</Link> */}
                    </fieldset>
            </form>
        </div>
    )
}