import {useContext} from "react";
import {getFirestore} from "../../factory/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import CartContext from "../../context/CartContext";
import Swal from "sweetalert2";

function Checkout() {
	const {items, totalQuantity, totalPrice, clear} = useContext(CartContext);
	const saveOrder = () => {
		const products = items.map((item) => {
			return {
				id: item.id,
				title: item.productDetail.title,
				price: item.productDetail.price,
			};
		});
		const db = getFirestore();
		const order = db.collection("orders");
		const newOrder = {
			buyer: {
				lastname: document.getElementById("lastname").value,
				name: document.getElementById("name").value,
				phone: document.getElementById("phone").value,
				payType: document.getElementById("payType").value,
			},
			items: products,
			date: firebase.firestore.Timestamp.now(),
			totalQuantity: totalQuantity(),
			totalPrice: totalPrice(),
		};
		order.add(newOrder);
		Swal.fire({
			icon: "success",
			title: "Pago realizado con exito",
			text: `Muchas Gracias ${newOrder.buyer.name} !!`,
		});
		clear();
	};
	return (
		<>
			<h2 className="text-center mb-5">Resumen de Compra</h2>
			<form className="row" onSubmit={() => saveOrder()}>
				<div className="col-md-6 row">
					<div className="col-md-10">
						<label htmlFor="lastanme" className="form-label">
							Apellido
						</label>
						<input
							type="text"
							className="form-control"
							id="lastname"
							placeholder="Fernandez"
							required={true}
						/>
					</div>
					<div className="col-md-10">
						<label htmlFor="name" className="form-label">
							Nombre
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Andres Alejandro"
							required={true}
						/>
					</div>
					<div className="col-md-10">
						<label htmlFor="phone" className="form-label">
							Celular
						</label>
						<input
							type="number"
							className="form-control"
							id="phone"
							placeholder="2236545252"
							required={true}
						/>
					</div>
					<div className="col-md-10">
						<label htmlFor="payType" className="form-label">
							Forma de Pago
						</label>
						<select className="form-select" id="payType" required={true}>
							<option disabled="" value="">
								Selecciona...
							</option>
							<option>Efectivo</option>
							<option>Transferencia Bancaria</option>
							<option>MercadoPago</option>
						</select>
					</div>
				</div>
				<div className="col-md-4 ">
					<div className="row">
						<div className="col-md-12">
							<p className="fw-bold">Cantidad de Items: {totalQuantity()}</p>
							<p className="fw-bold">Total a Pagar: {totalPrice()}</p>
						</div>
						<div className="form-check mb-3 col-md-12">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="agreeTerms"
								required
							/>
							<label className="form-check-label" htmlFor="agreeTerms" required={true}>
								Agree to terms and conditions
							</label>
						</div>
						<button type="submit" className="btn btn-success ms-2 fw-bold w-auto">
							Finalizar Compra
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default Checkout;
