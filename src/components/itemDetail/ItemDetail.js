import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import "./itemDetail.scss";
import CartContext from "../../context/CartContext";

function ItemDetail({id, productDetail}) {
	const {addItem} = useContext(CartContext);

	const [quantity, setQuantity] = useState(0);

	const onAdd = (quantity) => {
		setQuantity(quantity);
		addItem({id, productDetail, quantity});
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
							<img src={productDetail.pictureUrl} className="rounded" alt="" />
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
					{quantity < 1 ? (
						<ItemCount initial={1} stock={10} onAdd={onAdd} />
					) : (
						<div>
							<div className="mb-3 fw-bold">
								Cantidad de Productos:
								<span className="fs-5 ms-2">{quantity}</span>
							</div>
							<Link
								className="btn btn-success me-3 fw-bold "
								exact
								to={`/cart`}
							>
								Ir al Carrito
							</Link>
							<Link className="btn btn-primary fw-bold" exact to={`/`}>
								<i className="bi bi-arrow-left-square" /> Agregar mas productos
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default ItemDetail;
