import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Navbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/fuGO_logo.png';

function NavBar(props) {
	return (
		<div>
			<Navbar className='navbar-container' expand='lg'>
				<Container>
					<Link to='/home' className='homeLogo'>
						<img className='homeLogo-img' src={logo} alt='pufferfish' />
					</Link>
					<Navbar.Toggle
						className='toggleButton'
						aria-controls='basic-navbar-nav'
					/>
					<Navbar.Collapse className='basic-navbar-nav'>
						<Nav className='me-auto customNav'>
							<Link to='/menu' className='linkStyle'>
								Menu
							</Link>
							<Link to='/events' className='linkStyle'>
								Events
							</Link>
							<Link to='/contact' className='linkStyle'>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
