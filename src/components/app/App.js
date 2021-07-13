import ItemListContainer from '../itemListContainer/ItemListContainer';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import NavBar from '../navbar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';
import Cart from '../cart/Cart';
import CartProvider from '../../providers/CartProvider';

const App = () => {
	return (
		<CartProvider>
			<>
				<BrowserRouter>
					<NavBar />
					<main className="container main-container vh-100">
						<Switch>
							<Route exact path="/">
								<ItemListContainer text="Alimentos de Mascotas" />
							</Route>
							<Route exact path="/category/:category">
								<ItemListContainer />
							</Route>
							<Route exact path="/item/:id">
								<ItemDetailContainer />
							</Route>
							<Route exact path="/contact">
								<ItemListContainer text="Contacto" />
							</Route>
							<Route exact path="/cart">
								<Cart />
							</Route>
						</Switch>
					</main>
				</BrowserRouter>
			</>
		</CartProvider>
	);
};

export default App;
