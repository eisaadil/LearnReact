import React from "react"

function Contact(props){
    return (
        <div>
            <h1>Name: {props.name} </h1>
            <h2>Phone Num: {props.phoneNum}</h2>
            <h3>Email: {props.email}</h3>
        </div>
    );
}

export default Contact