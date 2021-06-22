import ItemList from '../itemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const dataProduct = [
	{
		id: 1,
		title: 'Royal Canin',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 500,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'dogs'
	},
	{
		id: 2,
		title: 'Pedigree',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 600,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'dogs'
	},
	{
		id: 3,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'dogs'
	},
	{
		id: 4,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 600,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'dogs'
	},
	{
		id: 5,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'dogs'
	},
	{
		id: 6,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 250,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'dogs'
	},
	{
		id: 7,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'cats'
	},
	{
		id: 8,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'cats'
	},
	{
		id: 9,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'cats'
	},
	{
		id: 10,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 200,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'cats'
	},
	{
		id: 11,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'cats'
	},
	{
		id: 12,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 100,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'cats'
	},
	{
		id: 13,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 550,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'birds'
	},
	{
		id: 14,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'birds'
	},
	{
		id: 15,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'birds'
	},
	{
		id: 16,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 350,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'birds'
	},
	{
		id: 17,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 400,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'birds'
	},
	{
		id: 18,
		title: 'Eukanuba',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		price: 50,
		pictureUrl: 'http://placekitten.com/200/150',
		category: 'birds'
	}
];

const ItemListContainer = ({ text }) => {
	const [products, setProducts] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (dataProduct.length === 0) {
					reject(new Error('No hay productos.'));
				} else {
					resolve(dataProduct);
				}
			}, 2000);
		})
			.then((data) => {
				if (category) {
					let listCategory = [];
					data.map((element) => {
						if (element.category === category) {
							listCategory.push(element);
						}
					});
					return listCategory;
				} else {
					return data;
				}
			})

			.then((dataCategory) => setProducts(dataCategory))
			.catch((e) => {
				console.log(e.message);
			});
	}, [category]);
	return (
		<>
			<div className="text-center rounded-3 w-auto">
				<div className="d-flex justify-content-center mb-4">
					<p className="fs-5 fw-bolder bg-site-main-violet rounded-3 w-auto p-2">
						{category ? category : text}
					</p>
				</div>
				<ItemList products={products} />
			</div>
		</>
	);
};

export default ItemListContainer;
