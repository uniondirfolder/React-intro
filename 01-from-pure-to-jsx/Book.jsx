import React from "react"

const Book =(props) =>{
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.year}</p>
            <p>{props.price}</p>
        </div>
    );
}

export { Book };
