import { Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import UserIcon from '@rsuite/icons/legacy/User';
import 'rsuite/dist/rsuite.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';  
function NavBar() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/users/66349b1cf7f0fdbfe2dc08d7'); // Adjust URL and user ID as needed
        setUserData(response.data);
        console.log(response.data); // Log here to see the fetched data after it is set
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
  
    fetchUserData();
  }, []);
  return (
    <Navbar>
    <Navbar.Brand href="/home">NASA API</Navbar.Brand>
    <Nav>
      <Nav.Item href="/home">Picture of the day</Nav.Item>
      <Nav.Item href="/mars">Mars rover</Nav.Item>
      <Nav.Item href="/earth">Live Earth</Nav.Item>
      <Nav.Item href="/earthcamera">Earth Camera</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item href="/about">About Nasa</Nav.Item>
        <Nav.Item>Our Team</Nav.Item>
       
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<UserIcon />} href="/profile">{userData?.firstName}</Nav.Item>
    </Nav>
  </Navbar>
  );
}

export default NavBar;