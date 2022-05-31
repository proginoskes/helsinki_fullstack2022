import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Countries from './components/Countries';
import commService from './components/Communications';

const countries_url = 'https://restcountries.com/v3.1/all';
const weather_url = 'http://api.weatherapi.com/v1';
const api_key = process.env.REACT_APP_API_KEY;

/*
geocoding call:
`${locations_url}q=${city name},${state code},${country code}&limit=${limit}&appid=${api_key}`


weather url:
`${weather_url}lat=${lat}&lon=${lon}&appid=${api_key}`
*/


const App = () => {
  const [countries, setCountries] = useState([]);
  const [newTerm, setNewSearch] = useState('');
  const [revealInfo, setReveal] = useState({});
  const [weather, setWeather] = useState({});
  const [capital, setCapital] = useState('London');
  const effectHook = () =>{
    commService.getAll(countries_url).then(countries => setCountries(countries))
  }
  useEffect(effectHook, [])
  const weatherHook = () => {
    commService.getAll(`${weather_url}/current.json?key=${api_key}&q=${capital}&aqi=no`).then(weather => {
        console.log(weather)
        return setWeather(weather)
      });
  }
  useEffect(weatherHook, [capital])

  const handleTermChange = (event) => {
    setNewSearch(event.target.value);
  }

  return (
    <div>
      <h1>Atlas</h1>
      <Filter entry={newTerm} entryFunc={handleTermChange} />
      <Countries 
        countries={countries.filter(country => country.name.common.includes(newTerm))}
        revealInfo={revealInfo}
        setReveal={setReveal}
        setCapital={setCapital}
        weather={weather}
      />
    </div>
  )
}

export default App;