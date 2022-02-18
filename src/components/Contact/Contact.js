import 'bootstrap/dist/css/bootstrap.min.css';
import '../../reset.css';
import './Contact.css';
import { Carousel } from 'react-bootstrap';
import React from 'react';

import tokyo1 from '../../assets/tokyo1.jpg';
import tokyo2 from '../../assets/tokyo2.jpg';

import tokyo3 from '../../assets/tokyo3.jpg';
import tokyo4 from '../../assets/tokyo4.jpg';
import tokyo5 from '../../assets/tokyo5.jpg';

function Contact(props) {
	return (
		<section className='contactMain'>
			<div className='contactContainer'>
				<h2>Contact us!</h2>
				<div className='contactPhone'>Phone: 123-456-0000</div>
				<div className='contactEmail'>Email: mochi@fugo.Mochi</div>
				<div className='contactAddress'>
					Address: 123456 51st Dr SE Seattle, WA 12345
				</div>

				<Carousel>
					<Carousel.Item>
						<img className='d-block w-100' src={tokyo1} alt='Tokyo alley' />
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='d-block w-100'
							src={tokyo2}
							alt='Tokyo Street Crossing'
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img className='d-block w-100' src={tokyo3} alt='Ramen Shop' />
					</Carousel.Item>

					<Carousel.Item>
						<img
							className='d-block w-100'
							src={tokyo4}
							alt='Japanese Restaurant'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={tokyo5}
							alt='Chef with Peace Sign'
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</section>
	);
}

export default Contact;
