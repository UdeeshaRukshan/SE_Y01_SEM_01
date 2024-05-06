import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Ensure this points to the correct location of your CSS file

function MarsRover() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=SyrPWWRnegnQ8mEkrpF79r2BWAhqn7ecDBilJR96');
                setData(response.data.photos.slice(0, 16));
                setError(null);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
                setData([]);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-3">
            <h2 className=" flex items-center justify-center">Mars Rover Discovery</h2>
            {loading ? (
                <p className="loading">Loading...</p>
            ) : error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center">
                    {data.map((photo, index) => (
                        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                            <Card.Img variant="top" src={photo.img_src} alt="Mars Rover" />
                            <Card.Body>
                                <Card.Title>{photo.camera.full_name}</Card.Title>
                                <Card.Text>
                                    Rover: {photo.rover.name}<br />
                                    Date Taken: {photo.earth_date}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MarsRover;
