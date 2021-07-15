import Item from '../item/Item';

const ItemList = ({ products }) => {
	return (
		<div className="row">
			{products.map((element) => {
				return (
					<Item
						key={element.id}
						id={element.id}
						element={element.data}
					/>
				);
			})}
		</div>
	);
};

export default ItemList;
