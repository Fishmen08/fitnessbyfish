import React from "react";
import { useAuth } from "./AuthContext";

export default function TableData(props) {
    // console.log(props)
    const deets = props.details
    // console.log(deets);
    const {deleteExercise} = useAuth();
    const collectionRef = props.collectionRef;

    const handleClick = (e) => {
        e.preventDefault();
        const id = deets.id;
        deleteExercise(collectionRef, id);
        console.log(`${deets} was deleted`)
    }

    return (
        <tr className='border-b-2 capitalize'>
            <td>{deets.date}</td>
            <td>{deets.exercise}</td>
            <td>{deets.weight}</td>
            <td>{deets.sets}</td>
            <td>{deets.reps}</td>
            <td><button onClick={handleClick}>X</button></td>
        </tr>
    )
}