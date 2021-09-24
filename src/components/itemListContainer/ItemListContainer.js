import ItemList from "../itemList/ItemList";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../factory/firebase";

const ItemListContainer = ({text}) => {
	const [products, setProducts] = useState([]);
	const {category} = useParams();
	useEffect(() => {
		const db = getFirestore();
		const itemCollection = db.collection("items");

		const items = () => {
			if (!category) {
				return itemCollection;
			} else {
				return itemCollection.where("category", "==", category);
			}
		};

		items()
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					console.log("Sin resultados");
				}
				setProducts(
					querySnapshot.docs.map((doc) => {
						return {id: doc.id, data: doc.data()};
					})
				);
			})

			.catch((error) => console.log("Error al buscar productos", error));
	}, [category]);

	return (
		<>
			<div className="text-center rounded-3 w-auto">
				<div className="d-flex justify-content-center mb-4">
					<p className="fs-5 fw-bolder bg-site-main-violet rounded-3 w-auto p-2">
						{category ? category.toUpperCase() : text.toUpperCase()}
					</p>
				</div>
				<ItemList products={products} />
			</div>
		</>
	);
};

export default ItemListContainer;
