import ItemListContainer from '../itemListContainer/ItemListContainer';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import NavBar from '../navbar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<main className="container main-container vh-100">
					<Switch>
						<Route exact path="/">
							<ItemListContainer text="Alimentos de Mascotas" />
						</Route>
						<Route exact path="/category/:category">
							<ItemListContainer text="Alimentos de Mascotas" />
						</Route>
						<Route exact path="/item/:id">
							<ItemDetailContainer />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</>
	);
};

export default App;
