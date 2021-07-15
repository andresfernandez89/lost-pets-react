import { useState } from 'react';
import CartContext from '../context/CartContext';

export default function CartProvider({ defaultValue = [], children }) {
	const [items, setItems] = useState(defaultValue);

	const isInCart = (obj) => {
		return items.find((element) => element.id === obj.id);
	};
	const addItem = (obj) => {
		if (!isInCart(obj)) {
			setItems((items) => [...items, obj]);
		} else {
			const copyItems = [...items];
			let y = copyItems.find((element) => element.id === obj.id);
			y.quantity += obj.quantity;
			setItems(copyItems);
		}
	};
	const removeItem = (id) => {
		setItems(items.filter((element) => element.id !== id));
	};
	const clear = () => {
		setItems(defaultValue);
	};

	return (
		<CartContext.Provider
			value={{ items, addItem, removeItem, clear, isInCart }}>
			{children}
		</CartContext.Provider>
	);
}
