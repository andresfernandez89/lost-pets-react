import CartContext from "../../context/CartContext";
import {useContext} from "react";

const ItemTicket = () => {
	const {items} = useContext(CartContext);
	return (
		<>
			<div>
				<div className="row fw-bold bgc-default-tp1 py-25">
					<div className="d-none d-sm-block col-1">#</div>
					<div className="col-9 col-sm-5">Descripcion</div>
					<div className="d-none d-sm-block col-4 col-sm-2">Cantidad</div>
					<div className="d-none d-sm-block col-sm-2">Precio Unitario</div>
					<div className="col-2">Monto</div>
				</div>
				{items.map((item, index) => (
					<div key={item.id} className="text-95 text-secondary-d3">
						<div className="row mb-2 mb-sm-0 py-25">
							<div className="d-none d-sm-block col-1">{index}</div>
							<div className="col-9 col-sm-5">{item.title}</div>
							<div className="d-none d-sm-block col-2">{item.quantity}</div>
							<div className="d-none d-sm-block col-2 text-95">{item.price}</div>
							<div className="col-2 text-secondary-d2">{item.totalPrice}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default ItemTicket;
