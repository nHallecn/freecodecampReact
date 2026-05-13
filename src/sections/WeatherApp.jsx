import React, { useState } from 'react'

const WeatherApp = () => {
    const cities = [
        { id: 1, value: 'London' },
        { id: 2, value: 'New York' },
        { id: 3, value: 'Los Angeles' },
        { id: 4, value: 'Paris' },
        { id: 5, value: 'Chicago' },
        { id: 6, value: 'Tokyo' },
    ]

    const [location, setLocation] = useState(cities[0].value);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(false);

    async function fetchData(city) {
        try {
            const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
            const result = await response.json();
            
            setData(result);
            setStatus(true);
        } catch (error) {
            alert("Error: " + error);
        }
    }

    return (
        <div style={{
            margin: '50px auto',
            padding: '25px',
            border: '2px solid #f1c40f',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            textAlign: 'center'
        }}>
            <h1>Weather App</h1>
            
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                {cities.map((c) => (
                    <option key={c.id} value={c.value}>{c.value}</option>
                ))}
            </select>

            <button onClick={() => fetchData(location)} style={{ marginTop: '10px' }}>
                Check Weather
            </button>

            {status && data && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{data.name}</h2>
                    
                    {/* DISPLAYING THE IMAGE */}
                    <img 
                        src={data.weather[0].icon} 
                        alt={data.weather[0].description} 
                        style={{ width: '100px' }}
                    />

                    <h3>{Math.round(data.main.temp)}°C</h3>
                    <p>{data.weather[0].description}</p>
                </div>
            )}
        </div>
    )
}

export default WeatherApp