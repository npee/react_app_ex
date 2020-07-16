import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Clock = () => {

    const [date, setDate] = useState(new Date());

    const tick = () => setDate(() => new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    );
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
