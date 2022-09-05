import React, { useRef, useState } from "react";
// import { getAuth } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { useAuth } from "./AuthContext";
import gymbg from '../images/gymbg.jpg';

export default function UpdateProfile() {
    // const auth = getAuth();
    const {updateName, updateUserEmail, currentUser, changePassword} = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    let navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        let promises = [];
        setLoading(true);
        setError('');
        
        if (passwordRef.current.value){
            promises.push(changePassword(passwordRef.current.value));
        }
        if (emailRef.current.value !== currentUser.email && emailRef.current.value) {
            promises.push(updateUserEmail(emailRef.current.value));
        }
        if (nameRef.current.value !== currentUser.displayName && nameRef.current.value) {
            promises.push(updateName(nameRef.current.value));
        }

        Promise.all(promises).then(() => {
            
            navigate('/dashboard')
        }).catch((err) => {
            console.log(err);
            setError('Failed to update details')
        }).finally(() => {
            setLoading(false)
        });
        
        
        // .then(() => {
        //     console.log('password changed')
        //     passwordRef.current.value = '';
        //     confirmPasswordRef.current.value = '';
        // }).catch((err) => console.log(err))
    //     const promises = [];
    //     promises.push(updateName)
    //     try{
    //     setUpdate('')
    //     setError('')
    //     await updateName(nameRef.current.value);
    //     console.log(currentUser.name)
    //     await updateUserEmail(emailRef.current.value)
    //     .then(() => {
    //         console.log(currentUser.email)
    //     }).catch((err) => console.log(err));
    //     if (passwordRef.current.value !== confirmPasswordRef.current.value) {
    //         setError('Passwords do not match')
    //     }
    //     if (passwordRef.current.value !== confirmPasswordRef.current.value) {
    //     await changePassword(passwordRef.current.value).then(() => {
    //         console.log(currentUser)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    //     }   
    //     setUpdate(`Name has been changed to ${nameRef.current.value}`)
    //     } catch {
    //         setError('Unable to change name')
    //     }
        
    }

    // function nameChange(n) {
    //     updateProfile(auth.currentUser, {
    //         displayName: n
    //     }).then(() => {
    //         console.log(auth.currentUser)
    //         setUpdate(`Name changed to ${n}`)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    return (
        <div className='w-screen h-screen bg-cover bg-center pt-24' style={{backgroundImage: `url(${gymbg})`}}>
            <form className='w-96 lg:w-2/4 xl:w-1/3 mx-auto border-2 rounded-xl text-white ' style={{backgroundColor: 'rgba(0,0,0,0.8)'}} >
                
                <fieldset className='w-5/6 mx-auto mt-6'>
                    <label>Name</label>
                    <input type='text' ref={nameRef} placeholder={currentUser.displayName} className='w-full mt-4 p-2 border-2 rounded text-black' />
                </fieldset>
                <fieldset className='w-5/6 mx-auto mt-6'>
                    <label>Email</label>
                    <input type='email' ref={emailRef} placeholder={currentUser.email} className='w-full mt-4 p-2 border-2 rounded text-black' />
                </fieldset>
                <fieldset className='w-5/6 mx-auto mt-6'>
                    <label>New Password</label>
                    <input type='password' ref={passwordRef} className='w-full mt-4 p-2 border-2 rounded text-black' />
                </fieldset>
                <fieldset className='w-5/6 mx-auto mt-6'>
                    <label>Confirm New Password</label>
                    <input type='password' ref={confirmPasswordRef} className='w-full mt-4 p-2 border-2 rounded text-black' />
                </fieldset>
                <fieldset className='w-5/6 mx-auto mt-6'>
                    <p>{error}</p>
                </fieldset>
                {/* <fieldset>
                    <label>Phone</label>
                    <input type='number' ref={phoneRef} />
                </fieldset> */}
                <fieldset className='w-5/6 mx-auto text-center mb-12'>
                    <button disabled={loading} className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2' onClick={onSubmit}>Submit</button>
                    <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2' onClick={() => {navigate('/dashboard')}}>Dashboard</button>
                </fieldset>
            </form>
        </div>
    )
}