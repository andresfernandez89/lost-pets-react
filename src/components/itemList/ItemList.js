import { useEffect, useState } from 'react';
import Item from '../item/Item';
const products = [
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
const ItemList = () => {
	const [product, setProduct] = useState([]);

	useEffect(async () => {
		const data = await new Promise((resolve, reject) => {
			setTimeout(() => {
				if (products.length === 0) {
					reject(new Error('No hay productos.'));
				} else {
					resolve(products);
				}
			}, 2000);
		});
		try {
			setProduct(data);
		} catch (error) {
			console.log(error.message);
		}
	}, []);
	return (
		<div className="row">
			{product.map((element) => {
				return (
					<Item
						key={element.id}
						title={element.title}
						description={element.description}
						price={element.price}
						pictureUrl={element.pictureUrl}
					/>
				);
			})}
		</div>
	);
};

export default ItemList;
