import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
const CartWidget = () => {
	const { items } = useContext(CartContext);
	const [totalItems, setTotalItems] = useState(0);

	let quantity = 0;
	console.log(totalItems);
	useEffect(() => {
		debugger;
		items.forEach((item) => {
			return (quantity += item.quantity);
		});
		setTotalItems(quantity);
	}, []); // me renueva el numero solo con productos nuevos

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
