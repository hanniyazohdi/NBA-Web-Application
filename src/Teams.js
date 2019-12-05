import React from 'react';
import axios from 'axios';

class Teams extends React.Component {
    
    render() {
        
        return <>
            <h3> TEAM MVPS: </h3>
            <ul className="teams">
            {this.props.teams.map(teams=>
                <li key={teams.id}> <button className="teamButton" onClick={()=>this.props.handleClick(teams.id)} > {teams.full_name} </button> </li>)}
            </ul>
        </>
    }
}

export default Teams;