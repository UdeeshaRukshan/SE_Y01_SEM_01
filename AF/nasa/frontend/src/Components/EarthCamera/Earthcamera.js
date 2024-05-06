import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Assuming you saved the CSS in a file named style.css

function EarthCamera() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.nasa.gov/EPIC/api/natural/images?api_key=SyrPWWRnegnQ8mEkrpF79r2BWAhqn7ecDBilJR96');
                setData(response.data);
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
        <div>
            {loading ? (
                <p className="loading">Loading...</p>
            ) : error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center">
                    {data.map((item, index) => (
                        <Card className="card-container" key={index} style={{ width: '18rem', margin: '10px' }}>
                            <Card.Img variant="top" src={`https://epic.gsfc.nasa.gov/archive/natural/${item.date.substring(0, 10).replace(/-/g, '/')}/png/${item.image}.png`} />
                            <Card.Body>
                                <Card.Title>{item.caption}</Card.Title>
                                <Card.Text>
                                    Date: {item.date}<br />
                                    Latitude: {item.centroid_coordinates.lat}<br />
                                    Longitude: {item.centroid_coordinates.lon}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default EarthCamera;
