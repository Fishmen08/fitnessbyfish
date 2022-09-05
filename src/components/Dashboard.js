import { addDoc, collection, getDocs, limit } from "firebase/firestore";
import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from 'react-router-dom';
import { db } from "../Firebase";
import { useAuth } from "./AuthContext";

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
            // console.log(docRef.id)
            weightRef.current.value = '';
            setDate('');
        } catch {
            console.log('Error adding weight')
        }
    }

    const getData = async () => {
        const getWeight = await getDocs(collectionRef,
            limit(1));
            
        
        getWeight.forEach(item => {
            setWeight(item.data())
        })
        // console.log(weight)
    //     docs.forEach(item => {
    //         // console.log(item)
    //         setWeight(details => {
    //             return [...details, {...item.data(), id: item.id}]
    //         })
    // })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='pt-20 w-screen'>
            <div className='w-2/3 mx-auto pt-10'>
                <div className='flex'>
                <div className='w-1/2'>
                    <h2 className='text-xl'>{currentUser.displayName ? `Hello ${currentUser.displayName}` : ''}</h2>
                    <p>{currentUser.email}</p>
                </div>
                <div className='w-1/2'>
                    <p className='font-bold'>Weight Tracker</p>
                    <p>Previous weight:</p>
                    <p>Date: {weight && weight.date}</p>
                    <p>Weight: {weight && weight.weight}</p>
                    <form onSubmit={handleSubmit}>
                        <label>Record Weight</label>
                        <br />
                        <input type='date' onChange={(e) => setDate(e.target.value)} required />
                        <br />
                        <label htmlFor="weight">Weight</label>
                        <input className='border-2 w-12 ml-4' type='number' name='weight' id='weight' ref={weightRef} required />
                        <br />
                        <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-48 mt-2 mb-2' type='submit'>Add</button>
                    </form>
                </div>
                </div>
                <button onClick={() => navigate('/update-profile')} className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2'>Update Profile</button>
                <button onClick={() => navigate('/workouts')} className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2'>Workouts</button>
            </div>
        </div>
    )
}