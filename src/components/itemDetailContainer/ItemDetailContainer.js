import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import { getFirestore } from '../../factory/firebase';

const ItemDetailContainer = () => {
	const [productDetail, setProductDetail] = useState([]);
	const { id } = useParams();

	const db = getFirestore();
	const itemCollection = db.collection('items');
	const item = itemCollection.doc(id);

	item.get()
		.then((querySnapshot) => {
			if (querySnapshot.size === 0) {
				console.log('Sin resultados');
			}
			setProductDetail(querySnapshot.data());
		})
		.catch((error) => console.log('Error al buscar productos', error));

	return (
		<>
			<ItemDetail id={id} productDetail={productDetail} />
		</>
	);
};

export default ItemDetailContainer;
