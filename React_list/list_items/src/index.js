import React from 'react';
import ReactDOM from 'react-dom';

const name = "Rizwan"
const currentDate = new Date().toLocaleDateString
const currentTime = new Date().toLocaleTimeString

ReactDOM.render( <
    >
    <
    h1 > Salaam, My name is { name } < /h1> <
    h4 > Current Time is { currentTime } < /h4> <
    h4 > Current Date is { currentDate } < /h4>

    <
    />,
    document.getElementById("root")
);