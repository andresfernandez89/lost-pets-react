import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataProduct } from '../../data.json';

const Cart = () => {
	const { id, amount } = useParams();
	const [item, setItem] = useState([]);
	const getItem = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(dataProduct);
		}, 2000);
	});
	useEffect(() => {
		getItem
			.then((data) => {
				return data.find((element) => element.id === parseInt(id));
			})
			.then((info) => setItem(info));
	}, [id, amount]);
	return (
		<>
			<h3>Detalle de Compra</h3>
			<p>Producto: {item.title}</p>
			<p>Cantidad: {amount}</p>
			<p>Precio: {item.price}</p>
		</>
	);
};

export default Cart;
