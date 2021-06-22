import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';

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

const getItems = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(dataProduct);
	}, 2000);
});
const ItemDetailContainer = () => {
	const [productDetail, setProductDetail] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getItems
			.then((data) => {
				return data[id];
			})
			.then((info) => setProductDetail(info));
	}, [id]);

	return (
		<>
			<ItemDetail productDetail={productDetail} />
		</>
	);
};

export default ItemDetailContainer;
