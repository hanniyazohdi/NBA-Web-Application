const express = require('express');
const app = express();
const path = require("path");
const axios = require('axios');

const connection = require('./db/connection.js');
const Rating = require('./models/Rating.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/teams', (req,res) => {
    axios.get('https://www.balldontlie.io/api/v1/teams') 
    .then(results=>{
        const teams = results.data.data;
        res.send(teams);
    })
    .catch(error=>
        res.status(505).send("Oh no! Something went wrong. Make sure you're entering a team name.")
    );

});


app.get('/players', (req,res) => {
    axios.get('https://www.balldontlie.io/api/v1/players') 
    .then(results=>{
        const players = results.data.data;
        res.send(players);
    })
    .catch(error=>
        res.status(505).send(error)
    );
});

app.post('/api/ratings', (req,res)=>{
    let newRating = new Rating(req.body); 
        
    newRating.save()
    .then(()=> {
        res.status(201).send(newRating);
    })
    .catch(error=> {
        res.status(500).send("Something went wrong!");
    }); 
});


app.get('/api/ratings', (req,res)=>{
    Rating.find().exec()
    .then(ratings=> {
        if(ratings.length != 0){
            res.send(ratings);
        }else{
            res.status(404).send("No team ratings!");
        }
    })
    .catch(error => {
        res.status(500).send("Something went wrong!");
    });
    
});

connection.then(()=>{
    const server = app.listen(process.env.PORT, ()=>{
    console.log("Connected and listening");
});
});