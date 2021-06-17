import { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
const dataProductDetail = {
	id: 1,
	title: 'Royal Canin',
	description:
		"Some quick example text to build on the card title and make up the bulk of the card's content.",
	price: 500,
	pictureUrl: 'http://placekitten.com/400/200',
	category: 'Dogs Food'
};
const getItems = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(dataProductDetail);
	}, 2000);
});
const ItemDetailContainer = ({ text }) => {
	const [productDetail, setProductDetail] = useState([]);

	useEffect(() => {
		getItems.then((data) => {
			setProductDetail(data);
		});
	}, []);

	return (
		<>
			<hr />

			<ItemDetail productDetail={productDetail} />
		</>
	);
};

export default ItemDetailContainer;
