import '../../reset.css';
import './Menu.css';
import React from 'react';

import plainsalmon from '../../assets/plainsalmon.jpg';
import salmon from '../../assets/salmon.jpg';
import salmonset from '../../assets/salmonset.jpg';
import seaweed from '../../assets/seaweed.jpg';
import specialset from '../../assets/specialset.jpg';
import tuna from '../../assets/tuna.jpg';
import Veg from '../../assets/Veg.jpg';
import Vegcrab from '../../assets/Vegcrab.jpg';
import handroll from '../../assets/handroll.jpg';

function Menu(props) {
	return (
		<section className='menuMain'>
			<div className='menuContainer'>
				<h2 className='menuTitle'>Rolls</h2>
				<div className='menuDesc'>
					We happily deliver within a 20 miles radius of our location! Please
					call if you have any questions. Any purchase of $15 or more comes with
					a side salad (serves 2) as well as 2 miso soup. All orders come with
					wasabi, soy sause, and pickled ginger.
				</div>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={salmon} alt='Philly' />
						<h1 className='detailTitle'>Philly</h1>
						<span className='detailPrice'>$5</span>
						<p className='detailDesc'>Cream Cheese and Smoked Salmon</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={handroll} alt='Spicy Tuna Handroll' />
						<h1 className='detailTitle'>Spicy Tuna Handroll</h1>
						<span className='detailPrice'>$5</span>
						<p className='detailDesc'>Spicy Tuna and Mayo Wrapped in Nori</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={plainsalmon} alt='Salmon' />
						<h1 className='detailTitle'>Salmon Roll</h1>
						<span className='detailPrice'>$4</span>
						<p className='detailDesc'>Salmon Wrapped in Sticky Rice</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={salmonset} alt='Salmon Set' />
						<h1 className='detailTitle'>Salmon Set</h1>
						<span className='detailPrice'>$8</span>
						<p className='detailDesc'>Mixed Set With Salmon</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={seaweed} alt='Seaweed' />
						<h1 className='detailTitle'>Seaweed</h1>
						<span className='detailPrice'>$4</span>
						<p className='detailDesc'>
							Beautifully Topped with Marinated Seaweed
						</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={tuna} alt='Tuna' />
						<h1 className='detailTitle'>Tuna</h1>
						<span className='detailPrice'>$5</span>
						<p className='detailDesc'>Raw Tuna Wrapped in Sticky Rice</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={Veg} alt='Veg' />
						<h1 className='detailTitle'>Veg</h1>
						<span className='detailPrice'>$3</span>
						<p className='detailDesc'>Vegetarian Roll</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={Vegcrab} alt='Vegcrab' />
						<h1 className='detailTitle'>Veg and Crab</h1>
						<span className='detailPrice'>$5</span>
						<p className='detailDesc'>Pickled Vegetables and Crabmeat</p>
					</div>
				</section>
				<section className='detailMain'>
					<div className='detailContainer'>
						<img src={specialset} alt='specialset' />
						<h1 className='detailTitle'>Special Set</h1>
						<span className='detailPrice'>$10</span>
						<p className='detailDesc'>Chef Special Plate of Mixed Fish</p>
					</div>
				</section>
			</div>
		</section>
	);
}

export default Menu;
