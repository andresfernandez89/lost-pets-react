import { useState } from 'react';
import CartContext from '../context/CartContext';

export default function CartProvider({ defaultValue = [], children }) {
	const [quantity, setQuantity] = useState(defaultValue);
	const [item, setItem] = useState(defaultValue);

	const isInCart = () => {};
	const addItem = (obj) => {
		//debugger;
		setQuantity(obj.quantity);
		setItem(obj.productDetail);
		console.log(quantity);
		console.log(item.id);
	};
	const removeItem = () => {};
	const clear = () => {};

	return (
		<CartContext.Provider
			value={{ item, quantity, addItem, removeItem, clear, isInCart }}>
			{children}
		</CartContext.Provider>
	);
}
