import { useState } from "react";

function Heading(){
    const [currdate,setCurrDate]=useState(new Date().toLocaleString('en-US', {
        day:"numeric",
        month: 'long',
        year: 'numeric'
        }));

    setInterval(() => {
        setCurrDate(new Date().toLocaleString('en-US', {
            day:"numeric",
            month: 'long',
            year: 'numeric'
            }));
    }, 60000);
    
    return (
        <h1 className="task-heading">{currdate}</h1>
    );
}

export default Heading;