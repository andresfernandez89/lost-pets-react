import ItemListContainer from "../itemListContainer/ItemListContainer";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";
import Cart from "../cart/Cart";
import Checkout from "../checkout/Checkout";
import NavBar from "../navbar/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./app.scss";
import CartProvider from "../../providers/CartProvider";
import Ticket from "../ticket/Ticket";
import Footer from "../footer/Footer";

const App = () => {
	return (
		<CartProvider>
			<>
				<BrowserRouter>
					<NavBar />
					<main className="container main-container position-relative min-vh-100">
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
							<Route exact path="/checkout">
								<Checkout />
							</Route>
							<Route exact path="/ticket">
								<Ticket />
							</Route>
						</Switch>
					</main>
					<Footer />
				</BrowserRouter>
			</>
		</CartProvider>
	);
};

export default App;
