import {useState} from "react";
import CartContext from "../context/CartContext";

export default function CartProvider({defaultValue = [], children}) {
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
			y.totalPrice = y.quantity * y.productDetail.price;
			setItems(copyItems);
		}
	};
	const removeItem = (id) => {
		setItems(items.filter((element) => element.id !== id));
	};
	const clear = () => {
		setItems(defaultValue);
	};

	let totalPrice = () => {
		let total = 0;
		items.forEach((item) => {
			total += item.productDetail.price * item.quantity;
		});
		return total;
	};

	let totalQuantity = () => {
		let quantity = items.map((item) => item.quantity);
		let totalItems = quantity.reduce((valorInicial, valorSumado) => {
			return valorInicial + valorSumado;
		}, 0);
		return totalItems;
	};

	return (
		<CartContext.Provider
			value={{items, addItem, removeItem, clear, isInCart, totalPrice, totalQuantity}}
		>
			{children}
		</CartContext.Provider>
	);
}
