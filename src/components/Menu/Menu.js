import '../../reset.css';
import './Menu.css';
import React from 'react';
import MenuDetail from '../MenuDetail/MenuDetail';

function Menu(props) {
	return (
		<section className='menuMain'>
			<div className='menuContainer'>
				<h2 className='menuTitle'>Rolls</h2>
				<div className='menuDesc'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
					distinctio architecto possimus facilis id ab quis sapiente! Quae
					molestias enim odit voluptatibus exercitationem quibusdam repudiandae
					quasi rem soluta. Nam, deserunt!
				</div>
				<div className='menuWrapper'>
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
					<MenuDetail />
				</div>
			</div>
		</section>
	);
}

export default Menu;
