import React from 'react';

const Color = props => {
    return (
        <div>
            <h1 style={{color:props.text, backgroundColor: props.background}}>The word is: {props.word}</h1>
        </div>
    )
}

export default Color;