function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fw-bold bg-site-main">
			<div className="container-fluid">
				<a className="navbar-brand h1 fs-2" href="#">
					Lost Pets
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav">
					<span className="navbar-toggler-icon" />
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
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
