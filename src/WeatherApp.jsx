import './WeatherApp.css'
import GetInfo from './GetInfo.jsx'
import DisplayInfo from './DisplayInfo.jsx'
import { useState } from 'react'

export default function WeatherApp(){

    const [weather,setWeather] = useState({
        city : "Delhi",
        feelsLike : 34.55,
        humidity : 36,
        temp : 34.05,
        tempMax : 34.05,
        tempMin : 34.05,
        description : "Haze"
    })
    const [error,setError] = useState(false);

    let updateInfo = (info)=>{
        try{
        setWeather(info);
        }catch(e){
           setError(true);
        }
    }

    return (
        <>
        <h1>Weather App!</h1>
        <br></br>
        <GetInfo updateInfo={updateInfo}></GetInfo>
        {error && <p style={color="red"}>No such place exists</p>}
        <DisplayInfo result={weather}></DisplayInfo>
        </>
    )
}