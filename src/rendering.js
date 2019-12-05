import axios from "axios";

const updateRatings = ()=>{
    axios.get('/api/ratings') 
    .then(results=>{
        const rateContainer = document.getElementById('rateContainer');
        rateContainer.innerHTML = '';
        
        results.data.forEach(rate=> {
            let number = document.createElement('h3'); 
            
            number.innerHTML = `${this.props.current} <br> ${rate.number}`;
            
        });
    })
    .catch(error=>
    console.log(error)
    ); 
};



export {updateRatings};