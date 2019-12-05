import React from 'react';
import axios from 'axios';
import Comments from './Comments.js';

class Headshot extends React.Component {

    
    render() {
        return <>
        
        <form className="searchBox">
        
            <p style={{textDecoration: "bold"}}> Search for your favorite player's headshot! </p>
            <input type="text" className="searchBar" id="first"
            placeholder="Player first name..."></input>
            
            <input type="text" className="searchBar" id="last"
            placeholder="Player last name..."></input>
            
            <a>
            <input className="button" onClick={()=>this.props.handlePhoto(first, last)} 
            type='submit' value=' PLAYER SEARCH ' />
            </a>
            
        </form>
        
        
        </>
    }
}

export default Headshot;