import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fw-bold bg-site-main-orange">
			<div className="container-fluid">
				<h1>
					<a className="navbar-brand fs-2" href="#">
						Lost Pets
					</a>
				</h1>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex-md justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Perdidos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Encontrados
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Que Hacemos?
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contacto
							</a>
						</li>
					</ul>
					<CartWidget />
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
