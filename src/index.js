import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import css from './style-sample.css';
import axios from 'axios';
import {updateRatings} from "./rendering.js";
updateRatings();


ReactDOM.render(<App />, document.getElementById('react-container'));


const rateSubmit = (event)=>{
    event.preventDefault();
    let newRating = { 
        rate:document.getElementById('rateNumber').value
    };
    
    axios.post('/api/ratings', newRating)
    .then(result =>{
        updateRatings();
    })
    .catch(error => {
        console.log(error);
        res.status(404).send('../public/404.html');
    });
};

let rate = document.getElementById('rate'); 
rate.addEventListener('submit', rateSubmit);