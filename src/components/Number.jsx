import { Redirect } from '@reach/router';
import React from 'react';

const Number = props => {
    return (
        <div>
            {
                isNaN(props.num) ? <h1>The word is: {props.num}</h1> : <h1>The number is: {props.num}</h1>
            }
        </div>
    )
}

export default Number;