import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
const CartWidget = () => {
	const { items } = useContext(CartContext);

	let quantity = items.map((item) => item.quantity);
	let totalItems = quantity.reduce((valorInicial, valorSumado) => {
		return valorInicial + valorSumado;
	}, 0);

	return (
		<>
			<Link exact to="/cart" className="ms-3">
				<i
					className="bi bi-cart4"
					style={{ fontSize: '2rem', color: 'black' }}
				/>
			</Link>
			{totalItems !== 0 && (
				<span className="ms-2 fs-3">{totalItems}</span>
			)}
		</>
	);
};
export default CartWidget;
