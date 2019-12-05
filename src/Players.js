import React from 'react';
import axios from 'axios';

class Players extends React.Component {
    
    
    render() {
        const playerStyle = {
            width: "200px",
            height: "100px",
            fontFamily: "helvetica",
            lineHeight: "20px",
            fontSize: "17px",
            fontStyle: "bold",
            padding: "18px"
              	
        }

        
        return <>
        
        <ul style={playerStyle}>
            {this.props.currentPlayers.map(players=>
                <li key={players.id} > 
                    <a> 
                        {players.position} {players.first_name}, {players.last_name} 
                    </a> 
                </li>)}
        </ul>
        
        </>
    }
}

export default Players;