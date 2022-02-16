import '../../reset.css';
import './MenuDetail.css';
import React from 'react';
import salmon from '../../assets/salmon.jpg';

function MenuDetail(props) {
	return (
		<section className='detailMain'>
			<div className='detailContainer'>
				<img src={salmon} alt='Sushi Item' />
				<h1 className='detailTitle'>Classic Philly</h1>
				<span className='detailPrice'>$4</span>
				<p className='detailDesc'>
					Smoked salmon and cream cheese garnished with green onion.
				</p>
			</div>
		</section>
	);
}

export default MenuDetail;
