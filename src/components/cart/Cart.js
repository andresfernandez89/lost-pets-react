import { useEffect, useState } from 'react';
import { dataProduct } from '../../data.json';

const Cart = () => {
	const [item, setItem] = useState([]);
	const getItem = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(dataProduct);
		}, 2000);
	});
	useEffect(() => {
		getItem
			.then((data) => {
				return data.find((element) => element.id === parseInt());
			})
			.then((info) => setItem(info));
	}, []);
	return (
		<>
			<h3>Detalle de Compra</h3>
			<p>Producto:</p>
			<p>Cantidad:</p>
			<p>Precio:</p>
		</>
	);
};

export default Cart;
