import ItemList from '../itemList/ItemList';
import { useEffect, useState } from 'react';

const dataProducts = [
	{
		id: 1,
		title: 'Royal Canin',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 500,
		pictureUrl: 'http://placekitten.com/200/150'
	},
	{
		id: 2,
		title: 'Pedigree',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 600,
		pictureUrl: 'http://placekitten.com/200/150'
	},
	{
		id: 3,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150'
	}
];

const ItemListContainer = ({ text }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (dataProducts.length === 0) {
					reject(new Error('No hay productos.'));
				} else {
					resolve(dataProducts);
				}
			}, 2000);
		})
			.then((data) => {
				setProducts(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);
	return (
		<>
			<div className="d-flex justify-content-center">
				<p className="fs-4 bold bg-site-main-grey rounded-3 w-auto m-3">
					{text}
				</p>
			</div>
			<ItemList products={products} />
		</>
	);
};

export default ItemListContainer;
