import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import { dataProduct } from '../../data.json';

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
				return data.find((element) => (element.id = id));
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
