import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'


const Result = (props) => {

    if(props.type === 'list')
    {
      return(
        <div>
          <ul>
          {props.data.map((country) => <li key={country.alpha2Code}>{country.name}<button id={country.name} onClick={props.onClick}>show</button></li>)}
          </ul>
          
        </div>
      )
    }
    else if (props.type === 'message')
    {
      return (
        <div>
          <p>{props.data}</p>
        </div>
      )
    }
    else if (props.type === 'item')
    {
      return (
        <div>
          <h2>{props.data.name}</h2>
          <p>capital {props.data.capital}</p>
          <p>population {props.data.population}</p>
          <h3>languages</h3>
          <ul>
            {props.data.languages.map( lang => <li key={lang.iso639_2}>{lang.name}</li>)}
          </ul>
          <img src={props.data.flag} alt={props.data.name} width="320" height="240"/>
        </div>
      )
    }
        
}

const WeatherData = (props) => {
    const current = props.data;
    const city = props.capital;
    console.log(current);
  if(current !== {} && props.type === 'item')
  {
    return(
      <div>
        <h2>Temperature for {city}</h2>
          <p><b>Temperature</b> {current.temperature}</p>
          {/* {console.log(current.weather_icons , current.weather_descriptions)} */}
          <img src={current.weather_icons} alt={current.weather_descriptions}/>
    <p><b>wind:</b>  {current.wind_speed} mph direction {current.wind_dir}</p>
      </div>
    )
  }
  else 
  {
    return (
      <>
      </>
    )
  }

}

const App = () => {
      const [countries, setCountries] = useState([])
      const [view, setView] = useState('search for some country')
      const [term, setTerm] = useState('');
      const [type, setType] = useState('message')
      const [capital, setCapital] = useState('none')
      const [weather, setWeather] = useState({})

      useEffect(()=> {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then (response => setCountries(response.data));
      }, []);

      useEffect(()=> {
        if(type === 'item' && capital !== 'none')
        {
              axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
              .then(response => setWeather(response.data.current))}
       }, [capital, type])

      const handleView = (e) => {
            let name = e.target.id;
            let countryData = countries.filter(country => country.name === name);
            setView(countryData[0]);
            setCapital(countryData[0].capital);
            // console.log(countryData[0]);
            setType('item');
      }

      const filter = () => {
       let result =  countries.filter( (country) => 
         (country.name).toLowerCase().includes(term)
        )

        // if(result.length === 1)
        // {
            
        //     setView(result[0]);
        //     console.log(result[0]);
        //     setType('item');
        // }
        // else 
        if(result.length <= 10)
        {
          // console.log(result);
          setView([...result]);
          setType('list');

        }
        else if (result.length > 10)
        {
          setView(['Too many results'])
          setType('message');
        }
        
      }

      const handleSearch = (e) => {
            setTerm(e.target.value);
            filter();
      }

      return (
        <div>
         <p>find countries <input onChange={handleSearch}/></p>
         <Result data={view} type={type} onClick={handleView} />
         <WeatherData data={weather} capital={capital} type={type}/>
         </div>
      )
}

ReactDOM.render(<App />, document.getElementById('root'));