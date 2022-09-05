import React, { useEffect, useRef, useState } from "react";
import { collection, addDoc, getDocs, query, where, limit } from 'firebase/firestore';
import { useAuth } from "./AuthContext";
import { db } from "../Firebase";
import Table from "./Table";
import gymbg from '../images/gymbg.jpg';

export default function Workouts() {
    const {currentUser} = useAuth()
    const collectionRef = collection(db, currentUser.uid);
    const [date, setDate] = useState();
    const exerciseNameRef = useRef();
    const weightRef = useRef();
    const setsRef = useRef();
    const repsRef = useRef();
    const sortRef = useRef();
    const [selectSort, setSelectSort] = useState('');
    const [details, setDetails] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
        const docRef = addDoc(collectionRef, {
            date: date,
            exercise: exerciseNameRef.current.value.toLowerCase(),
            weight: weightRef.current.value.toLowerCase(),
            sets: setsRef.current.value.toLowerCase(),
            reps: repsRef.current.value.toLowerCase()
        });
        console.log('doc written with ID:', docRef.id);
        exerciseNameRef.current.value = '';
        weightRef.current.value = '';
        setsRef.current.value = '';
        repsRef.current.value = '';
        } catch (e) {
            console.log('error adding doc', e)
        }
    }

    const handleSortSubmit = (e) => {
        e.preventDefault();
        setDetails([]);
        queryForDocuments(selectSort.toLowerCase(), sortRef.current.value.toLowerCase())
        // .then(() => {
        //     setDetails(other);
        // })
    }
    
    const queryForDocuments = async (selectValue, sortValue) => {
        const customerQuery = query(collectionRef,
            where(selectValue, '==', sortValue),
            limit(20)
        );
        
        const querySnapshot = await getDocs(customerQuery);
            
        querySnapshot.forEach(item => {
            setDetails(details => {
                return [...details, item.data()]
            });
            // other.push(item.data())
            // console.log(item.data());
        })

    }

    const getData = async () => {
        
        const docs = await getDocs(collectionRef,
            limit(20));

        setDetails([]);

        docs.forEach(item => {
            // console.log(item)
            setDetails(details => {
                return [...details, {...item.data(), id: item.id}]
            })
            

        })



        // onSnapshot(collectionRef, (data) => {
        //     setDetails(data.docs.map(item => {
        //         return item.data();
        //     }))
            // })

            // setDA(data.docs.map(item => {
            //     return item.data();
            // }))
            // console.log(data.docs.map((item) => {
            //     return {...item.data()}
            // }))
        
        // setTimeout(() => {
        //     console.log(details)
        //     console.log(dA);
        // }, 5000)
        
        }
    
    // const querySnapshot = getDocs(collection);
        // querySnapshot.forEach(doc => {
        //     console.log(doc);
        // })
    
    useEffect(() => {
        const run = async () => {
            
            const docs = await getDocs( collection(db, currentUser.uid),
                limit(20));
        
            setDetails([]);
        
            docs.forEach(item => {
                // console.log(item)
                setDetails(details => {
                return [...details, {...item.data(), id: item.id}]
                })
                    
        
            }) 
        }
        run();
    }, [currentUser.uid])


    return (
        <div className='pt-20 w-screen text-center h-screen bg-cover bg-center' style={{backgroundImage: `url(${gymbg})`}}>
            <div className='w-1/3 mx-auto pb-12 rounded-xl text-white border-2' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
            <h2 className='text-xl pt-8 mb-2'>Workouts</h2>
            <h3>Add Exercise</h3>
            <form className='w-1/2 mx-auto text-start mt-4' onSubmit={handleSubmit}>
                <fieldset className='mb-2'>
                    <label htmlFor="date">Date </label>
                    <input className='text-black' type='date' id='date' name='date' onChange={(e) => setDate(e.target.value)} required />
                </fieldset>
                <fieldset className='mb-2'>
                    <label htmlFor="e1-name">Exercise Name </label>
                    <input className='text-black' type='text' id='e1-name' name='e1-name' ref={exerciseNameRef} required />
                </fieldset>
                <fieldset className='mb-2'>
                    <label htmlFor="e1-w">Weight </label>
                    <input className='text-black' type='text' id='e1-w' name='e1-w' ref={weightRef} required />
                </fieldset>
                <fieldset className='mb-2'>
                    <label htmlFor="e1-s">Sets </label>
                    <input className='text-black' type='text' id='e1-s' name='e1-s' ref={setsRef} required />
                </fieldset>
                <fieldset className='mb-2'>
                    <label htmlFor="e1-r">Reps </label>
                    <input className='text-black' type='text' id='e1-r' name='e1-r' ref={repsRef} required />
                </fieldset>
                <fieldset>
                    <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-1/3 mt-2 mb-2' type='submit'>Submit</button>
                </fieldset>
            </form>
            </div>
            <div className='w-1/2 mx-auto pb-12 rounded-xl text-white mt-4 border-2' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <h3 className='text-xl pt-2'>Previous Workouts</h3>
            <form className='w-2/3 mx-auto text-start pt-4' onSubmit={handleSortSubmit}>
                <fieldset className='text-black mb-2'>
                    <select id='select' name='sort' onChange={(e) => setSelectSort(e.target.value)}>
                        <option>Sort options</option>
                        <option value='date'>Date</option>
                        <option value='exercise'>Exercise</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="sort">Sort parameter</label>
                    <input type={selectSort === 'date' ? 'date' : 'text'} className='border-2 text-black ml-4' id='sort' name='sort' ref={sortRef} />
                </fieldset>
                <fieldset>
                    <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-1/4 mt-4 mb-2' type='submit'>Sort</button>
                    <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-1/4 mt-4 mb-2 ml-4' type='button' onClick={getData}>Clear / Refresh</button>
                </fieldset>
            </form>
            {/* <button className='text-lg bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-4 rounded w-full mt-6 mb-2' onClick={() => console.log(other)}>Submit</button> */}
            <div className='w-full'>
                <Table details={details} collectionRef={collectionRef} />  
            </div>
            </div>
        </div>
    )
}