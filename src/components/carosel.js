import React from "react";
import './carosel.css';

export const CaroselItem = ({children, width}) => {
    return (
        <div id='carosel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

export default function Carosel({ children }) {
    return (
        <div id='carosel'>
            <div id='inner' style={{ transform: 'traslateX(-0%)' }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </div>
        </div>
    )
}

