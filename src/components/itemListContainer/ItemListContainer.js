import ItemCount from '../itemCount/ItemCount';
const itemListContainer = ({ text }) => {
	const onAdd = (amount) => {
		console.log(`Agregaste ${amount} al carrito`);
	};
	return (
		<>
			<div className="d-flex justify-content-center">
				<p className="fs-4 bold bg-site-main-grey rounded-3 w-auto m-3">
					{text}
				</p>
			</div>
			<div className="row justify-content-center">
				<div
					className="card col-3 m-2 rounded-1"
					style={{ width: '18rem' }}>
					<img src="" className="card-img-top fas fa-dog" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<ItemCount initial={1} stock={10} onAdd={onAdd} />
					</div>
				</div>
				<div
					className="card col-3 m-2 rounded-3"
					style={{ width: '18rem' }}>
					<img src="" className="card-img-top fas fa-cat" alt="" />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<ItemCount initial={1} stock={10} onAdd={onAdd} />
					</div>
				</div>
			</div>
		</>
	);
};

export default itemListContainer;
