import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	// paper: {
	// 	// backgroundColor: theme.palette.background.paper,
	// 	border: "2px solid #000",
	// 	boxShadow: theme.shadows[5],
	// 	padding: theme.spacing(2, 4, 3),
	// 	marginTop: "50px",
	// },
}));

export default function TransitionsModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const takeUserInput = async ({ name, email, phone }) => {
		console.log(`User input taken is ${name},${email}, ${phone}`);
		const res = await axios.post("http://localhost:3000/api/v1/users", {
			name: name,
			email: email,
			phone: phone,
		});
		console.log(res.data);
	};

	return (
		<div>
			{/* <Button vairant="contained" onClick={handleOpen}>
				Open your shop
			</Button> */}
			<Button
				size="small"
				color="primary"
				variant="contained"
				className="dhrity_button"
				onClick={handleOpen}
			>
				{" "}
				Register Now !{" "}
			</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<ContactForm onFormSubmit={takeUserInput} />
						{/* <h2 id="transition-modal-title">Transition modal</h2>
						<p id="transition-modal-description">
							react-transition-group animates me.
						</p> */}
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
