import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css';
 

const Countries = ({countriesPromise}) => {

        const [visitedCountries, setVisitedCountries] = useState([]);

        const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedFlag = (flag) =>{
         const newVisitedFlags = [...visitedFlags, flag];
         setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountries = (country) => {
        console.log('country visited clicked to be added',country);
        const newVisitedCountries = [...visitedCountries, country];
         setVisitedCountries(newVisitedCountries);
    }
     
    return (
        <div className='count'>
            <h1>Traveling Countries : {countries.length}</h1>

                

               
                  <div className='country'>
                  <h3>Traveled so far: {visitedCountries.length}</h3>
                  <div className='countR' >
                  
                 {
                    visitedCountries.map(country => <p> Name:{country.name.common}
                       <img src= {country.flags.png} alt ="" />
                    
                      </p>)
                    }

                       

                    </div>
                  </div>
               

             <div className='countries'>
             {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag = {handleVisitedFlag}
                    country={country}></Country>)
            }
             </div>
            
        </div>
    );
};

export default Countries;


