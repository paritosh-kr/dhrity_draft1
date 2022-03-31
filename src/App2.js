import { Button, Box } from "@material-ui/core";
import "./styles.css";
import Dhrity from "./Assets/dhrity.png";
import topImage from "./Assets/TopImage.png";
import headingUnderline from "./Assets/headingUnderline.png";
import cardImage1 from "./Assets/cardImage1.png";
import cardImage2 from "./Assets/cardImage2.png";
import cardImage3 from "./Assets/cardImage3.png";
import cardImage4 from "./Assets/cardImage4.png";
import dots from "./Assets/dots.png";
import handShake from "./Assets/HandShake.png";
import profile1 from "./Assets/profile1.png";
import profile2 from "./Assets/profile2.png";
import profile3 from "./Assets/profile3.png";
import profile4 from "./Assets/profile4.png";
import profile5 from "./Assets/profile5.png";
import profile6 from "./Assets/profile6.png";
import commas from "./Assets/commas.png";
import franchise from "./Assets/franchise.png";
import Footer from "./components/Footer";
// import Modal from "./components/Modal";
export default function App() {
	return (
		<div className="App">
			<nav>
				<img className="dhrity" src={Dhrity} alt="logoImage" />
				<div className="topBtn">
					{/* <Modal /> */}
					{/* <Button variant="contained" color="primary" className="btnColor">
						{" "}
						Register Now{" "}
					</Button> */}
				</div>
			</nav>
			<div className="topSection">
				<div className="topSectionDiv">
					<p className="topSectionHeading">
						Turn your Shop into Online Supermart , Get 5000+ branded products ,
						24*7 operational shop .{" "}
					</p>
					{/* <p className="topSectiontxt">Register Now !</p> */}
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
				</div>
				<div className="topImageDiv">
					<img src={dots} alt="dots" className="dotsImage" />
					<img src={topImage} className="topImage" alt="TopImage" />
				</div>
			</div>
			<div className="workSection">
				<div className="center">
					<p className="workSectionHeading">How it works</p>
				</div>
				<img
					className="headingUnderline"
					src={headingUnderline}
					alt="underline"
				/>
				<div className="center workSectionSubheading">
					<p>
						Register your shop on dhrity and get a QR Code installed at your
						shop. Now you have 5000+ products ready to be sold from your shop
						and your customers can shop online from the comfort of their homes
						by simply using your qr code . Rest assured Dhrity delivers products
						within minutes at your customers doorsteps.So while we make your
						shop run 24*7 you earn the profit !
					</p>
				</div>
				<div className="cardDiv card1">
					<Box className="card ">
						<img src={cardImage1} alt="CardImage" />
						<p className="cardHeading">Register on Dhrity</p>
						<p>
							Register on Dhrity to activate your shop by paying a monthly
							activation fee. A QR code will be setup within 24 hours at your
							store turning your shop into Dhrity Labelled store.
						</p>
					</Box>
				</div>
				<img src={dots} alt="dots" className="dotRight" />
				<div className="cardDiv card2">
					<Box className="card ">
						<img src={cardImage2} alt="CardImage" />
						<p className="cardHeading">Receiving an Order</p>
						<p>
							Your customer places an order through your shop which dhrity
							fulfils from its warehouse. They get 1000s of products from every
							top brand in ITC , HUL, P & G, etcs to buy from .
						</p>
					</Box>
				</div>
				<img src={dots} alt="dots" className="dotLeft" />
				<div className="cardDiv card3">
					<Box className="card ">
						<img src={cardImage3} alt="CardImage" />
						<p className="cardHeading">Fulfilment and Delivery </p>
						<p>
							Within minutes order is picked by the delivery guy and is
							delivered to the customer without your involvement.
						</p>
					</Box>
				</div>
				<img src={dots} alt="dots" className="dotRight" />
				<div className="cardDiv card4">
					<Box className="card">
						<img src={cardImage4} alt="CardImage" />
						<p className="cardHeading">Get full Margin , 0% commission </p>
						<p>
							Product sold via you will fetch you full margin thus you dont need
							to purchase products to sell . Run your shop the Dhrity Way and
							join the revolution .
						</p>
					</Box>
				</div>
				<div className="outlinedBtnDiv">
					{/* <Button color="primary" variant="outlined" className="outlinedBtn">
						Learn more
					</Button> */}
				</div>
			</div>
			<div className="handShakeSection">
				<img src={handShake} alt="HandShake" className="handShakeImg" />
				<div className="handShaketxt">
					<p className="handShakeHeading">
						Check How Dhrity creates a superstore for you{" "}
					</p>

					<ul className="dhrity__feature">
						<li className="dhrity__feature__list">
							Free inventory consisting of 5000+ products from all major brands
							i.e HUL, ITC, P&G, NESTLE and many more..{" "}
						</li>
						<li className="dhrity__feature__list">Your store operates 24*7</li>
						<li className="dhrity__feature__list">
							Superfast Doorstep delivery services
						</li>
						<li className="dhrity__feature__list">24*7 customer support </li>
						<li className="dhrity__feature__list">
							Full Margin , Zero % commission
						</li>
					</ul>

					{/* <Button color="primary" variant="outlined" className="outlinedBtn">
						Learn more
					</Button> */}
				</div>
			</div>
			<div className="maecenas">
				<div className="MaecenasHeadingDiv">
					<p className="MaecenasHeading"> Testimonials </p>
				</div>
				<img
					className="headingUnderline"
					src={headingUnderline}
					alt="underline"
				/>
				<div className="fullMaecenas">
					<Box className="MaecenasBox">
						<img src={commas} alt="commas" className="commasImage" />
						<p style={{ zIndex: 2 }}>
							I have been associated with Dhrity from their Day 1 and I have
							hugely benefitted from their services. I dont have to invest lakhs
							of rupees for my shop . Its a boon for shop owners like us . Thank
							You Dhrity .
						</p>
					</Box>

					<img
						src={profile1}
						alt="profileImg"
						className="profileImage profile1"
					/>
					<img
						src={profile2}
						alt="profileImg"
						className="profileImage profile2"
					/>
					<img
						src={profile3}
						alt="profileImg"
						className="profileImage profile3"
					/>
					<img
						src={profile4}
						alt="profileImg"
						className="profileImage profile4"
					/>
					<img
						src={profile5}
						alt="profileImg"
						className="profileImage profile5"
					/>
					<img
						src={profile6}
						alt="profileImg"
						className="profileImage profile6"
					/>
				</div>
			</div>
			<div>
				<div className="finalSection">
					<div className="franchiseImageDiv">
						<img src={dots} alt="dots" className="dotsImage" />
						<img src={franchise} alt="franchise" />
					</div>
					<div className="infromationFranchise">
						<p className="heading"> Numbers so far..... </p>
						<p className="textFranchise">Registered shops: 3</p>
						<p className="textFranchise">Number of products sold: 500+</p>
						<p className="textFranchise">Total Sales: Rs 53240</p>
						{/* <Button variant="outlined" color="primary">
							{" "}
							Learn More{" "}
						</Button> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
