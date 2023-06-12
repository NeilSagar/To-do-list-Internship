import { useState } from "react";

function Heading(){
    const myFormat={
        day:"numeric",
        month: 'long',
        year: 'numeric'
        };
    const [currdate,setCurrDate]=useState(new Date().toLocaleString('en-US', myFormat));

    setInterval(() => {
        setCurrDate(new Date().toLocaleString('en-US',myFormat ));
    }, 60000);
    
    return (
        <h1 className="task-heading">{currdate}</h1>
    );
}

export default Heading;