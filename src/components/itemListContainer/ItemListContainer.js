import ItemList from '../itemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataProduct } from '../../data.json';

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
					data.forEach((element) => {
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
