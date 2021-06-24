import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.scss';

function ItemDetail({ productDetail }) {
	const [amount, setAmount] = useState(0);

	const onAdd = (amount) => {
		setAmount(amount);
	};

	return (
		<>
			<div className="item-datail bg-site-main-violet d-flex justify-content-center rounded">
				<div className="text-center d-grid gap-4 pb-4">
					<div className="d-flex justify-content-center">
						<p className="fs-4 fw-bolder  rounded-3 w-auto m-3">
							{productDetail.title}
						</p>
					</div>
					<div className="row">
						<div className="col-md-6 ">
							<img
								src={productDetail.pictureUrl}
								className="rounded"
								alt=""
							/>
						</div>
						<div className="col-md-5 text-center ">
							<div className="">
								<p>{productDetail.description}</p>
							</div>
							<div className="fw-bold fs-3">
								<p>${productDetail.price}</p>
							</div>
						</div>
					</div>
					{amount < 1 ? (
						<ItemCount initial={1} stock={10} onAdd={onAdd} />
					) : (
						<div>
							<div className="mb-3 fw-bold">
								Cantidad de Productos:
								<span className="fs-5 ms-2">{amount}</span>
							</div>
							<Link
								className="btn btn-primary fw-bold "
								exact
								to={`/cart/${productDetail.id}/${amount}`}>
								Terminar compra
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default ItemDetail;
