import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Contact from './components/Contact/Contact';
import Events from './components/Events/Events';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<section className='wrapper'>
			<Navbar />
			<main>
				<Routes>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/menu' element={<Menu />}></Route>

					<Route path='/events' element={<Events />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/' element={<Navigate replace to='/home' />}></Route>
				</Routes>
			</main>
		</section>
	);
}

export default App;
