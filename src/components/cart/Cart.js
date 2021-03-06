import {useContext} from "react";
import CartContext from "../../context/CartContext";
import {Link} from "react-router-dom";

const Cart = () => {
	const {items, removeItem, clear, totalPrice} = useContext(CartContext);

	return (
		<>
			{items.length === 0 ? (
				<div className="text-center">
					<h3>No hay productos en el Carrito</h3>
					<Link className="btn btn-primary mt-4 fw-bold" to="/">
						<i className="bi bi-arrow-left-square" /> Ir a la Tienda
					</Link>
				</div>
			) : (
				<>
					<div>
						<h3>Detalle de Compra</h3>
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">Producto</th>
									<th scope="col">Cantidad</th>
									<th scope="col">Total</th>
								</tr>
							</thead>
							<tbody>
								{items.map((item) => (
									<tr key={item.id}>
										<th scope="row">{item.productDetail.title}</th>
										<td>{item.quantity}</td>
										<td>{item.totalPrice}</td>
										<td className="btn w-auto bg-danger ms-1" onClick={() => removeItem(item.id)}>
											<i
												className="bi bi-dash-lg"
												style={{
													fontSize: "1.1rem",
												}}
											/>
										</td>
									</tr>
								))}
								<tr className="fs-3 fw-bold">
									<td>Total a pagar ${totalPrice()}</td>
									<td />
									<td />
								</tr>
							</tbody>
						</table>
						<div className="text-center">
							<button className="btn btn-danger me-2 fw-bold" onClick={() => clear()}>
								<i className="bi bi-trash" /> Eliminar Todo
							</button>
							<Link className="btn btn-primary fw-bold" to="/">
								<i className="bi bi-arrow-left-square" /> Agregar mas productos
							</Link>
							<Link className="btn btn-success ms-2 fw-bold" to="/checkout">
								Finalizar Compra
							</Link>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Cart;
