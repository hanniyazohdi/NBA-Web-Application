import React from 'react';
import axios from 'axios';
import Teams from './Teams.js';
import Players from './Players.js';
import Headshot from './Headshot.js';
import rendering from './rendering.js';
import Comments from './Comments.js';


class App extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { teams:[], players:[], currentPlayers: [], current: undefined, comments:[] }
        this.handleClick = this.handleClick.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
    }
    
    componentDidMount() {
        axios.get('/teams') 
        .then(results=>{
            const teams = results.data;
            console.log(teams);
            this.setState({teams});
        })
        
        
        Promise.all(
            [1,2,3,4,5, 6, 7, 8, 9, 10]
            .map(x => `https://www.balldontlie.io/api/v1/players?page=${x}`)
            .map(url => axios.get(url))
        ).then(results => {
            const players = results[1,2,3,4,5,6,7,8,9].data.data;
            console.log(players);
            this.setState({players});
        });
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.current != undefined) {
            axios.get(`/comments/${this.props.current}`) 
                .then((response) => {
                let comments = response.data.map(object => {
                return object.text;
                })
            this.setState({comments: comments})
            })
        }
                
    }
    
    currentTeam()  {
        this.state.players.forEach((player) => {
            if(player.team.id == teamId){
                currentPlayers.push(player);
            }
        })
        this.setState({currentPlayers});
    }
    
    
    
    handleClick(teamId)  {
        let currentPlayers = [];

        this.state.players.forEach((player) => {
            if(player.team.id == teamId){
                currentPlayers.push(player);
                var currentTeam = player.team;
            }
        })
        this.setState({currentPlayers});
        this.setState({current});
    }
    
    handlePhoto(first, last){
        if (last.value.length == 0 || first.value.length == 0){
            res.status(404).send("Oops! Something went wrong.");
        }else{
            window.open(`https://nba-players.herokuapp.com/players/${last.value}/${first.value}`)
        }
    }
    
    
    render() {
        
        return <>
            <h1>NBA CENTRAL: 2019</h1>
            
            <h3>Welcome to NBA Central, home of all things NBA and here to let you 
            know who is on the court for this next season. </h3>
            <h3> Rate the teams, comment on players, connect with fans.</h3>
            
        <div className="container">
          <Teams teams={this.state.teams} handleClick={this.handleClick}/>
          <Players players={this.state.players} current={this.state.current} currentPlayers={this.state.currentPlayers}/>
          <Headshot handlePhoto={this.handlePhoto}/>
          <p style={{textDecoration: "bold"}}> 
          Who do YOU think will win the NBA Playoffs? </p>
          <Comments current={this.state.current}/>
        </div>
            
            
    
        </>
    }
}
export default App;