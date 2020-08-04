import React from "react"
import contactData from "./contactData"

function Contact(props){
    const comps = contactData.map(x => 
        <div>
            <h1>Name: {x.name}</h1>
            <h2>Phone Num: {x.ph}</h2>
            <h3>Email: {x.email}</h3>
        </div>
    )
    return (
        <div>
            {comps}
        </div>
    );
}

export default Contact