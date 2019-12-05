import React from 'react';
import axios from 'axios';

class Comments extends React.Component {
    render() {
        
        return <>
          
         
        <form action='/api/ratings' method='POST' id="rateSubmit">
        
        <input type="text" name="rate" className="searchBar"  id="rateNumber"/>
        
        <input type="submit" id="submit" className="searchBar" value="Enter guess..."/>
            
        </form>
        
        
        
        
        </>
    } 
}

export default Comments;