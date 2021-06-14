import ItemCount from '../itemCount/ItemCount';

const onAdd = (amount) => {
	console.log(`Agregaste ${amount} al carrito`);
};

const Item = ({ id, title, description, price, pictureUrl }) => {
	return (
		<div id={id} className="col-md-4 d-flex justify-content-center">
			<div>
				<div
					className="card col-3 m-2 rounded-3"
					style={{ width: '18rem' }}>
					<img
						src={pictureUrl}
						className="card-img-top rounded"
						alt=""
					/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="fw-bold" style={{ fontSize: '36px' }}>
							${price}
						</p>
						<p className="card-text">{description}</p>
						<ItemCount initial={1} stock={10} onAdd={onAdd} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Item;