import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
console.log(weatherData);
    useEffect(() => {
        axios.get('https://api.nasa.gov/insight_weather/?api_key=SyrPWWRnegnQ8mEkrpF79r2BWAhqn7ecDBilJR96&feedtype=json&ver=1.0')
            .then(response => {
                setWeatherData(response.data);
                setLoading(false);
                console.log(response.data);             
              
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setError('Failed to load data');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {weatherData ? (
                <div>
                    <h1>Mars Weather</h1>
                    {/* Example of accessing Sol keys, modify depending on actual data structure */}
                    {Object.keys(weatherData.sol_keys).map((key, index) => (
                        <div key={index}>
                            <h2>Sol {key}</h2>
                            <p><strong>Date:</strong> {weatherData[key].First_UTC}</p>
                            <p><strong>Temperature:</strong> Avg: {weatherData[key].AT.av}°C</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No weather data available.</p>
            )}
        </div>
    );
}

export default Weather;
