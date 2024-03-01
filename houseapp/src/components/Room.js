import React from 'react';
import Counter from './Counter.js';
import Counter1 from './Counter1.js';
import Counter2 from './Counter2.js';
import Counter3 from './Counter3.js';
import '../App.css';
import PrettyCounter from './PrettyCounter.js';

const Room = (props) => (
    <div>
        My Room : {" "}
        {props.name}
        <Counter></Counter>
        <PrettyCounter></PrettyCounter>
    </div>
) 

export default Room;