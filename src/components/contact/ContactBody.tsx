import React from "react";

const ContactBody = () => {
	return (
		<div className="col-lg-8 mt-30">
			<div className="contact">
				{/* iframe 1 */}
				<div className="google-map">
					<iframe src="/src/assets/others/embed.html" title="Contact" allowFullScreen />
				</div>

				{/* iframe 2 */}
				<div className="google-map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5761533072873!2d-78.19644468515456!3d38.91080675375955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b5c5dc680d0b2b%3A0x1e9ff0b6bb7a2f87!2s1000%20Proctor%20Ln%2C%20Front%20Royal%2C%20VA%2022630%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sma!4v1578068093888!5m2!1sfr!2sma"
						title="map"
						allowFullScreen
					/>
				</div>

				{/* form */}
				<form action="" className="widget-form contact_form" method="POST" id="main_contact_form">
					<h6>Feel free to contact any time.</h6>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repudiandae.</p>
					<div className="alert alert-success contact_msg" style={{ display: "none" }} role="alert">
						Your message was sent successfully.
					</div>
					<div className="form-group">
						<input type="text" name="name" id="name" className="form-control" placeholder="Your Name*" required />
					</div>

					<div className="form-group">
						<input type="email" name="email" id="email" className="form-control" placeholder="Your Email*" required />
					</div>

					<div className="form-group">
						<input type="text" name="subject" id="subject" className="form-control" placeholder="Your Subject*" required />
					</div>

					<div className="form-group">
						<textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Your Message*" required></textarea>
					</div>

					<button type="submit" name="submit" className="btn-custom">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactBody;
