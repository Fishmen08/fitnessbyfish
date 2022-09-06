import { addDoc, collection, getDocs, limit } from "firebase/firestore";
import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from 'react-router-dom';
import { db } from "../Firebase";
import { useAuth } from "./AuthContext";
import gymbg from '../images/gymbg.jpg';

export default function Dashboard() {
    const {currentUser} = useAuth();
    let navigate = useNavigate();
    const weightRef = useRef();
    const [weight, setWeight] = useState();
    const [date, setDate] = useState();
    const dbForWeight = `${currentUser.uid}weight`
    const collectionRef = collection(db, dbForWeight);
    // const uid = currentUser.email;
    // console.log(currentUser.email)

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const docRef = addDoc(collectionRef, {
                weight: weightRef.current.value,
                date: date
            })
            console.log(docRef.id)
            weightRef.current.value = '';
            setDate('');
        } catch {
            console.log('Error adding weight')
        }
    }

    // const getData = async () => {
    //     const getWeight = await getDocs(collectionRef,
    //         limit(1));
            
        
    //     getWeight.forEach(item => {
    //         setWeight(item.data())
    //     })
    // }


        // console.log(weight)
    //     docs.forEach(item => {
    //         // console.log(item)
    //         setWeight(details => {
    //             return [...details, {...item.data(), id: item.id}]
    //         })
    // })
    

    useEffect(() => {
        const getData = async () => {
            const getWeight = await getDocs(collectionRef,
                limit(1));
                
            
            getWeight.forEach(item => {
                setWeight(item.data())
            })
        }
        getData();
    }, [collectionRef])

    return (
        <div className='pt-24 w-screen h-screen bg-center bg-cover' style={{backgroundImage: `url(${gymbg})`}}>
            <div className='w-1/2 mx-auto p-10 text-white rounded border-2' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <div className='flex'>
                <div className='w-1/2'>
                    <h2 className='text-2xl'>{currentUser.displayName ? `Hello ${currentUser.displayName}` : ''}</h2>
                    <p>{currentUser.email}</p>
                </div>
                <div className='w-1/2 flex'>
                    <div className='mr-12'>
                        <p className='font-bold'>Weight Tracker</p>
                        <p>Previous weight:</p>
                        <p>Date: {weight && weight.date}</p>
                        <p>Weight: {weight && weight.weight}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className='font-bold'>Record Weight</label>
                        <fieldset>
                            <input className='text-black' type='date' onChange={(e) => setDate(e.target.value)} required />
                        </fieldset>
                        <fieldset className='mt-2'>
                            <label htmlFor="weight">Weight</label>
                            <input className='border-2 w-12 ml-4 text-black' type='number' name='weight' id='weight' ref={weightRef} required />
                        </fieldset>
                        <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-48 mt-2 mb-2' type='submit'>Add</button>
                    </form>
                </div>
                </div>
                {/* <button onClick={() => navigate('/update-profile')} className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2'>Update Profile</button> */}
                <button onClick={() => navigate('/workouts')} className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2'>Log a workout</button>
            </div>
        </div>
    )
}