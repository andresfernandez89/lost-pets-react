import ItemCount from '../itemCount/ItemCount';

const onAdd = (amount) => {
	console.log(`Agregaste ${amount} al carrito`);
};
function ItemDetail({ productDetail }) {
	return (
		<>
			<div className="container bg-info">
				<div className="d-flex justify-content-center">
					<p className="fs-4 bold bg-site-main-grey rounded-3 w-auto m-3">
						{productDetail.title}
					</p>
				</div>
				<div className="row">
					<div className="col-md-6">
						<img
							src={productDetail.pictureUrl}
							className="rounded"
							alt=""
						/>
					</div>

					<div className="col-md-5 align-self-center ">
						<div className="">
							<p>{productDetail.description}</p>
						</div>
						<div className="fw-bold fs-3">
							<p>${productDetail.price}</p>
						</div>
					</div>
				</div>
				<ItemCount initial={1} stock={10} onAdd={onAdd} />
			</div>
		</>
	);
}

export default ItemDetail;
