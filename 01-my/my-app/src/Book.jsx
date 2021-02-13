import React from 'react';

const Book =(props) =>{
    return(
        <div className={props.name} data-text="">
            <h2>Hello, {props.name ? <span>{props.name}</span> : "Hi!"}</h2>
            <h2>{props.name}</h2>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <p>{props.children}</p>
        </div>
    );
}

export { Book };
