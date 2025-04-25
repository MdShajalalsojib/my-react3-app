import React, { useState } from 'react';
import './Country.css'
// import './btn.css';

const Country = ({country, handleVisitedCountries,  }) => {

    const [visited, setVisited] = useState(false);

    // console.log(handleVisitedCountries);

    const handleVisited = () =>{
       if (visited === true){
        setVisited(false);
       }
       else{
        setVisited(true);
       }

    //    setVisited(!visited);

         handleVisitedCountries(country);
    }

    console.log(country.flags);
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common} </h3>
             <img src= {country.flags.png} alt ="" />

             <p>Independent: {country.independent ? 'Free': 'Not Free'}</p>
             <p>population: {country.population}</p>
              <div className='button'>
                  <button onClick={handleVisited}> {
                    visited ? 'Visited' : 'Not Visited'

                    }

                  </button>

                   
              </div>
        </div>
    );
};

export default Country;