import '../../reset.css';
import './Contact.css';
import React from 'react';

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
			</div>
		</section>
	);
}

export default Contact;
