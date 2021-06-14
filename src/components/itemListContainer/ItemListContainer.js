import ItemList from '../itemList/ItemList';
const itemListContainer = ({ text }) => {
	return (
		<>
			<div className="d-flex justify-content-center">
				<p className="fs-4 bold bg-site-main-grey rounded-3 w-auto m-3">
					{text}
				</p>
			</div>
			<ItemList />
		</>
	);
};

export default itemListContainer;
