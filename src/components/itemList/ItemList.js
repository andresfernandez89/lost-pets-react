import Item from '../item/Item';

const ItemList = ({ products }) => {
	return (
		<div className="row">
			{products.map((element) => {
				return <Item key={element.id} element={element} />;
			})}
		</div>
	);
};

export default ItemList;
