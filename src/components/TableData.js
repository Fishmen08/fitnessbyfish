import React, { useState } from "react";
import { useAuth } from "./AuthContext";

export default function TableData(props) {
    const deets = props.details
    const {deleteExercise} = useAuth();
    const [deleted, setDeleted] = useState(false)
    const collectionRef = props.collectionRef;

    const handleClick = (e) => {
        e.preventDefault();
        if (deleted) return;
        const id = deets.id;
        deleteExercise(collectionRef, id);
        console.log(`${deets} was deleted`)
        setDeleted(true)
    }

    return (
        <tr className='border-b-2 capitalize'>
            <td>{deets.date}</td>
            <td>{deets.exercise}</td>
            <td>{deets.weight}</td>
            <td>{deets.sets}</td>
            <td>{deets.reps}</td>
            <td><button onClick={handleClick}>{deleted ? '-' : 'X'}</button></td>
        </tr>
    )
}