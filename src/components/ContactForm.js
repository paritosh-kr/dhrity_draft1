import React, { Component } from "react";
import "./ContactForm.css";
class ContactForm extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
	};
	handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.name, this.state.email, this.state.phone);
		this.props.onFormSubmit({
			name: this.state.name,
			email: this.state.email,
			phone: this.state.phone,
		});
		this.setState({ name: "" });
		this.setState({ phone: "" });
		this.setState({ email: "" });
		// return {
		// 	name: this.state.name,
		// 	email: this.state.email,
		// 	phone: this.state.phone,
		// };
	};
	render() {
		return (
			<>
				<div className="container">
					<form
						id="contact"
						action="#"
						method="post"
						onSubmit={this.handleFormSubmit}
					>
						<h3>Want to open your shop?</h3>
						<h4>Contact us for details</h4>
						<fieldset>
							<input
								placeholder="Your name"
								type="text"
								tabIndex="1"
								required
								autoFocus
								value={this.state.name}
								onChange={(e) => this.setState({ name: e.target.value })}
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="Your Email Address"
								type="email"
								tabIndex="2"
								required
								value={this.state.email}
								onChange={(e) => this.setState({ email: e.target.value })}
							/>
						</fieldset>
						<fieldset>
							<input
								placeholder="Your Phone Number"
								type="tel"
								tabIndex="3"
								required
								value={this.state.phone}
								onChange={(e) => this.setState({ phone: e.target.value })}
							/>
						</fieldset>
						<fieldset>
							<button
								name="submit"
								type="submit"
								id="contact-submit"
								data-submit="...Sending"
							>
								Submit
							</button>
						</fieldset>
						s
					</form>
				</div>
			</>
		);
	}
}

export default ContactForm;
