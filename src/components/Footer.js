import react from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<footer>
			<div class="content">
				<div class="left box">
					<div class="upper">
						<div class="topic">About us</div>
						<p>
							Dhrity, a ray of hope for retailers, just as it's name meaning
						</p>
					</div>
					<div class="lower">
						<div class="topic">Contact us</div>
						<div class="phone">
							<a href="#">
								<i class="fas fa-phone-volume">+91 9354481284</i>
							</a>
						</div>
						<div class="email">
							<a href="#">
								<i class="fas fa-envelope">dhrity.co@gmail.com</i>
							</a>
						</div>
					</div>
				</div>
				<div class="middle box">
					<div class="topic">Our Services</div>
					<div>
						<a href="#">Gigantic Inventory</a>
					</div>
					<div>
						<a href="#">24*7 Operation</a>
					</div>
					<div>
						<a href="#">Customer Support</a>
					</div>
					<div>
						<a href="#">Free Home Delivery</a>
					</div>
				</div>
				<div class="right box">
					<div class="topic">Reach us</div>
					<form action="#">
						{/* <input type="text" placeholder="Enter email address" />
						<input type="submit" name="" value="Send" /> */}
						<div class="media-icons">
							<a href="#" target="_blank">
								<i class="fab fab__fb fa-facebook-f"></i>
							</a>
							<a href="https://www.instagram.com/dhritygrocery" target="_blank">
								<i class="fab fab__ig fa-instagram"></i>
							</a>
							<a href="#" target="_blank">
								<i class="fab fa-twitter"></i>
							</a>
							<a
								href="https://www.youtube.com/channel/UCKiP6CL2OSWNR71K_BV_uyw"
								target="_blank"
							>
								<i class="fab fab__yt fa-youtube"></i>
							</a>
							<a href="#" target="_blank">
								<i class="fab fab__li fa-linkedin-in"></i>
							</a>
						</div>
					</form>
				</div>
			</div>
			<div class="bottom">
				<p>
					Copyright © 2022 <a href="#">Dhrity</a> All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
