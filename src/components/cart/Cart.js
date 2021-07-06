import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Cart = () => {
	const { items, removeItem, clear } = useContext(CartContext);

	return (
		<>
			<h3>Detalle de Compra</h3>
			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Producto</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Total</th>
					</tr>
				</thead>
				{items.map((item) => (
					<tbody>
						<tr>
							<th scope="row">{item.productDetail.title}</th>
							<td>{item.quantity}</td>
							<td>{item.productDetail.price}</td>

							<button
								className="btn bi bi-x-square-fill"
								onClick={() =>
									removeItem(item.productDetail.id)
								}></button>
						</tr>
					</tbody>
				))}
			</table>
			<button onClick={() => clear()}>
				<i className="bi bi-trash" /> Eliminar Todo
			</button>
			<button>
				<i className="bi bi-arrow-left-square"> Seguir Comprando</i>
			</button>
		</>
	);
};

export default Cart;
