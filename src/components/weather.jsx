import React from 'react'
import "../index.css"

export default function Weather(props) {
    return (
        <div className="weather">
            <h2>{props.name.toUpperCase()}</h2>
            <p><b>Temperature:</b> {props.temperature}°C</p>
            <p><b>Wind Speed:</b> {props.wind_speed}m/s</p>
            <p><b>All Clouds:</b> {props.clouds}</p>
        </div>
    )
}
