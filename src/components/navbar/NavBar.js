import CartWidget from "../cartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
	return (
		<header className="fixed-top">
			<nav className="navbar navbar-expand-lg navbar-light fw-bold bg-site-main-orange">
				<div className="container-fluid bg-site-main-orange ">
					<h1>
						<Link to={"/"} className="navbar-brand fs-2">
							Lost Pets
						</Link>
					</h1>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse d-flex-md justify-content-end" id="navbarNav">
						<ul className="nav navbar-nav">
							<li className="nav-item">
								<NavLink
									exact
									to={"/category/dogs"}
									activeClassName="selected rounded"
									className="nav-link"
								>
									Perros
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to={"/category/cats"}
									activeClassName="selected rounded"
									className="nav-link"
								>
									Gatos
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to={"/category/birds"}
									activeClassName="selected rounded"
									className="nav-link"
								>
									Aves
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to={"/contact"}
									activeClassName="selected rounded"
									className="nav-link"
								>
									Contacto
								</NavLink>
							</li>
						</ul>
						<CartWidget />
					</div>
				</div>
			</nav>
		</header>
	);
};
export default NavBar;
