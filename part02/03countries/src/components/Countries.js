//import { useState } from 'react';

const CountryInfo = (props) => {
    return(
        <div key={props.final_country.ccn3}>
            <h2>{props.final_country.name.common}</h2>
            <p>Capital: {props.final_country.capital}</p>
            <p>Population: {props.final_country.population}</p>
            <h4>languages:</h4>
            <ul>
                {Object.entries(props.final_country.languages).map((language) => {
                    return(
                        <li key={language[0]}>
                            {language[1]}
                        </li>
                    )
                })}
            </ul>
            <img src={props.final_country.flags.svg} alt={`flag of ${props.final_country.name.common}`}/>
            <h3>Weather in {props.final_country.capital}</h3>
            {props.setCapital(props.final_country.capital)}
            <p>Temp: {props.weather.current.temp_c} Celsius</p>
            <img src={props.weather.current.condition.icon}/>
            <p>Wind: {props.weather.current.wind_kph} {props.weather.current.wind_dir}</p>
        </div>
    )
}

const ListItem = (props) => {
    console.log(props.country.ccn3)
    return(
    <div key={props.country.ccn3}>
        {props.country.name.common} <button onClick={()=>{
            const copy_revealInfo = {[props.country.ccn3]: true};
            props.setReveal(copy_revealInfo);
        }}>show</button>
        {props.revealInfo[props.country.ccn3] 
            ? <CountryInfo final_country={props.country} setCapital={props.setCapital} weather={props.weather}/>
            : null}
    </div>)
}

const Countries = (props) => {
    // 

    if(props.countries.length === 1){
        <CountryInfo final_country={props.countries[0]} setCapital={props.setCapital} weather={props.weather}/>
    }
    if(props.countries.length <=10){
        return(
            <div>
                <h2>Countries</h2>
                {
                    props.countries
                        .map((country) => {
                        return(
                            <ListItem 
                                country={country} 
                                setReveal={props.setReveal}
                                revealInfo={props.revealInfo}
                                setCapital={props.setCapital}
                                weather={props.weather}
                            />
                        );
                    })
                }
            </div>
        )
    }
    return(
    <div>
        Query not specific enough, specify a country above.
    </div>
    )
}

export default Countries;