import React from "react";
import TableData from "./TableData";

export default function Table(props) {
    let deets = props.details;
    deets.sort((a,b) => {
        return new Date(b.date) - new Date(a.date);
    })

    
    return (
            <table className='table-auto w-4/5 mx-auto text-lg border-white border-2'>
                <tbody>
                <tr className='border-b-2 border-white'>
                    <th>Date</th>
                    <th>Exercise</th>
                    <th>Weight</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Delete</th>
                </tr>
                {deets.map((item) => {
                    return (<TableData key={item.id} details={item} collectionRef={props.collectionRef} />)
                })}
                </tbody>
                
                
            </table>
    )
}