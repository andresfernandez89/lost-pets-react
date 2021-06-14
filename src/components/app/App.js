import ItemListContainer from '../itemListContainer/ItemListContainer';
import NavBar from '../navbar/NavBar';

const App = () => {
	return (
		<div>
			<header>
				<NavBar />
			</header>
			<div className="container">
				<div className="row mt-4 d-flex justify-content-around">
					<div className="col-md-6 text-center rounded-3 w-auto">
						<ItemListContainer text="Alimentos de Mascotas" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
