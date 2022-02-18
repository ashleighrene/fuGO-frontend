import '../../reset.css';
import './Events.css';
import React from 'react';
import fuji from '../../assets/fujisan_hinode.png';

function Events(props) {
	return (
		<section className='eventsMain'>
			<div className='eventsContainer'>
				<div className='eventBox'>
					<h3>Dragon Festival</h3>
					<div>
						<br />
						June 1-3, 9am-9pm
						<br />
						We'll be at booth 25A
					</div>
					<h3>Tacoma Food Fest</h3>
					<div>
						<br />
						September 13-17, 10am-8pm
						<br />
						Come find us in tent 54B!
					</div>
					<h3>Washington State Fair</h3>
					<div>
						<br />
						September 22-29 11am-7pm
						<br />
						Food court next to 4H pens. Spot #7
					</div>
					<div>
						<img src={fuji} alt='Mt. Fuji' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Events;
