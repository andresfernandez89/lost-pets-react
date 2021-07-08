import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
const CartWidget = () => {
	const { items } = useContext(CartContext);
	return (
		<>
			<Link exact to="/cart" className="ms-3">
				<i
					className="bi bi-cart4"
					style={{ fontSize: '2rem', color: 'black' }}
				/>
			</Link>
			{items.length !== 0 && (
				<span>{items.map((item) => item.quantity)}</span>
			)}
		</>
	);
};
export default CartWidget;
