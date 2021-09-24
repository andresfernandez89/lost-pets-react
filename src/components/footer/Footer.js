import wappImage from "../../assets/icons/whatsapp.svg";
import "./footer.scss";

const Footer = () => {
	return (
		<>
			<footer className="w-100">
				<div className="tooltipWapp">
					<a
						href="https://wa.me/5492235586169"
						target="_blank"
						rel="noreferrer"
						className="buttonIcon"
					>
						<img src={wappImage} alt="logo whatsapp" className="img-fluid " />
					</a>
					<span className="tooltiptext fw-bold fst-italic">Chetea con nosotros !!</span>
				</div>
				<div className="text-center p-3 fw-bold fs-6 bg-site-main-violet ">
					© 2021 Copyright - Lost Pets
				</div>
			</footer>
		</>
	);
};

export default Footer;
