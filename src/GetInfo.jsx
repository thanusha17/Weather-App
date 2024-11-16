import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function GetInfo({updateInfo}){

    let [city,setCity] = useState("");

    const URL_API = "http://api.openweathermap.org/geo/1.0/direct"
    const API_KEY = "90328e4fce33f2a3d5b1d10e5ac80fe0"
    const URL = "https://api.openweathermap.org/data/2.5/weather"


    let handleChange = (e)=>{
        setCity(e.target.value); 
    }

    let handleClick = async (e)=>{
       e.preventDefault();
       try{
        let response = await fetch(`${URL_API}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        let latitude = jsonResponse[0].lat;
        let longitude = jsonResponse[0].lon;

        let response1 = await fetch(`${URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
        let jsonResponse1 = await response1.json();
        console.log(jsonResponse1);
        let result = {
            city : city,
            feelsLike : jsonResponse1.main.feels_like,
            humidity : jsonResponse1.main.humidity,
            temp : jsonResponse1.main.temp,
            tempMax : jsonResponse1.main.temp_max,
            tempMin : jsonResponse1.main.temp_min,
            description : jsonResponse1.weather[0].description
        }
        // console.log(result);
        updateInfo(result);
    }catch{
        throw err;
    }
        setCity("");

    }

    return (
        <>
        <form onSubmit={handleClick}>
        <TextField id="outlined-basic" label="Enter City name" value={city} onChange={handleChange} variant="outlined" required/>
        <br></br><br></br>
        <Button variant="contained" type='submit'>Search</Button>
        </form>
        </>
    )
}