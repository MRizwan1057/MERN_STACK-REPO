import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Rizwan"
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const myimg1 = "https://picsum.photos/200/300";
const myimg2 = "https://picsum.photos/250/300";
const myimg3 = "https://picsum.photos/300/300";

const thapa = "thapatechnical.youtube.com"

let time = new Date(2020, 4,4,3);
time = time.getHours();
let greetings = "";
let styling = {
    color:"green"
}
if (time >= 5 && time < 12) {
    greetings = "Subh Bakhair";
    styling.color = "green";
}
else if(time >= 12 && time < 19) {
    greetings = "Shaam Bakhair"
    styling.color = "orange";
}
else {
    greetings = "Shub Bakhair";
    styling.color = "black";
}


const imgdive = {
    background: "red",
    display: "flex",
    justifyContent: "center"

}


ReactDOM.render( <><h1 className='nameHeading'> Salaam, My name is { name } </h1> <h3 className='greeting' style={styling}>{greetings}</h3>  <div className='dateDiv'><h4> Current Time is = { currentTime }</h4> <h4> Current Date is = { currentDate } </h4></div>
<div style={imgdive}>
<img src={myimg1} alt="some Random images" />
<img src={myimg2} alt="some Random images" />
<a href={thapa} target="_thapa">
<img src={myimg3} alt="some Random images" />
</a>
</div>
    </>,
    document.getElementById("root")
);