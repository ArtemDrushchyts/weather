import React from 'react';

const Weather = (props) => {
    const iconUrl = "http://openweathermap.org/img/w/" + props.image + ".png";

    return (
        <div className="infoWeath">
            {props.city && 
                <div>
                    <p>{props.main} in {props.city} {props.country} <img src={iconUrl} alt={2}/></p>
                    
                    <p>Current: {props.temp}°</p>
                    <p>Pressure: {props.pressure}</p>
                    <p>Sunset: {props.sunset}</p>
                </div>
            }
            <p className="error">{props.error}</p>
        </div>
    )
}

export default Weather;