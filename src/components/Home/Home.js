import '../../reset.css';
import 'animate.css';
import './Home.css';
import React from 'react';
import sushi from '../../assets/sushi_8kan_02.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Home(props) {
	return (
		<section className='homeWrapper'>
			<main className='homeMain'>
				<div className='mainContainer'>
					<h2>Welcome!</h2>
					<div className='mainText'>
						Founded in 2009, fuGO was established to provide fresh and delicious
						sushi right to your door. Check out our menu, add your items and in
						no time at all, your fresh and fun meal will be sitting at your
						door. Unpack, chow down, and place your dishes outside - our
						delivery ninjas will be back to pick them up. Be sure to scope out
						the rest of the site to see what we're up to! ~{' '}
						<FontAwesomeIcon icon={faHeart} className='fa_icon' /> Mochi and the
						fuGO team.
					</div>

					<img className='mainImage' src={sushi} alt='Sushi' />
				</div>
			</main>
		</section>
	);
}

export default Home;
