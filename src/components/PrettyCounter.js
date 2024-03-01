import React, { useState } from 'react';
import '../App.css';

const PrettyCounter = (props) => {
    
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1)
    }

    const decrease = () => {
        setCount(count-1)
    }

    return (
        <div>
            <div>My Pretty Counter</div>
            <button class = "button" onClick={decrease}>
                -
            </button>
            <div class = "count">{count}</div>
            <button class = "button" onClick={increase}>
                +
            </button>
        </div>
    );
}

export default PrettyCounter;